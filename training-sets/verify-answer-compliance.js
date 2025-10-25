const fs = require('fs');
const path = require('path');
const customGuideData = require('./custom-guide-data-full.js');

// Verification results
const results = {
  total: 0,
  passed: 0,
  failed: 0,
  details: []
};

// Helper function to check if answer file exists and contains basic required elements
function verifyAnswerFile(exampleId) {
  const answerPath = path.join(__dirname, exampleId, 'C-answer.html');

  if (!fs.existsSync(answerPath)) {
    return {
      exampleId,
      status: 'FAIL',
      reason: 'Answer file does not exist',
      issues: []
    };
  }

  const content = fs.readFileSync(answerPath, 'utf-8');
  const guideData = customGuideData[exampleId];

  if (!guideData) {
    return {
      exampleId,
      status: 'SKIP',
      reason: 'No custom guide data available',
      issues: []
    };
  }

  const issues = [];

  // Check HTML requirements
  if (guideData.requirements && guideData.requirements.html) {
    guideData.requirements.html.forEach(req => {
      const cleanReq = req.replace(/<[^>]*>/g, ''); // Remove HTML tags from requirement text

      // Extract key tags to check for
      const headerMatch = req.match(/<code>&lt;(\w+)&gt;<\/code>/);
      if (headerMatch) {
        const tagName = headerMatch[1];
        const tagRegex = new RegExp(`<${tagName}[^>]*>`, 'i');
        if (!tagRegex.test(content)) {
          issues.push(`Missing required tag: <${tagName}>`);
        }
      }
    });
  }

  // Check CSS requirements - look for key properties
  if (guideData.requirements && guideData.requirements.css) {
    guideData.requirements.css.forEach(req => {
      // Extract CSS properties from requirement
      const codeMatches = req.match(/<code>([^<]+)<\/code>/g);
      if (codeMatches) {
        codeMatches.forEach(match => {
          const cssProperty = match.replace(/<\/?code>/g, '');
          // Check for key CSS properties like display, flex, etc.
          if (cssProperty.includes('display:') || cssProperty.includes('flex:') || cssProperty.includes('min-height:')) {
            const cleanProp = cssProperty.replace(/[;\s]/g, '');
            const contentClean = content.replace(/[\s\n]/g, '');
            if (!contentClean.includes(cleanProp.replace(/[\s]/g, ''))) {
              issues.push(`Missing CSS property: ${cssProperty}`);
            }
          }
        });
      }
    });
  }

  // Check for color values from styles
  if (guideData.styles && guideData.styles.colors) {
    guideData.styles.colors.forEach(color => {
      if (!content.includes(color.value)) {
        issues.push(`Missing color value: ${color.value} (${color.name})`);
      }
    });
  }

  // Check implementation steps - verify key code snippets are present
  if (guideData.implementation && guideData.implementation.length > 0) {
    guideData.implementation.forEach((impl, idx) => {
      if (impl.code) {
        // Check for key structural elements from implementation code
        const keyElements = impl.code.match(/<(\w+)[^>]*>/g);
        if (keyElements && keyElements.length > 0) {
          // Just check first few key elements to avoid over-checking
          const firstElement = keyElements[0];
          const tagName = firstElement.match(/<(\w+)/)[1];
          if (!content.includes(`<${tagName}`)) {
            issues.push(`Implementation step ${idx + 1}: Missing key element from ${impl.step}`);
          }
        }
      }
    });
  }

  return {
    exampleId,
    status: issues.length === 0 ? 'PASS' : 'FAIL',
    reason: issues.length === 0 ? 'All requirements met' : `${issues.length} issue(s) found`,
    issues
  };
}

// Verify all 100 examples
console.log('Starting verification of answer files against custom-guide-data-full.js...\n');

for (let i = 1; i <= 100; i++) {
  const exampleId = `S${String(i).padStart(3, '0')}`;
  const result = verifyAnswerFile(exampleId);

  results.total++;
  if (result.status === 'PASS') {
    results.passed++;
    console.log(`✅ ${exampleId}: ${result.reason}`);
  } else if (result.status === 'FAIL') {
    results.failed++;
    console.log(`❌ ${exampleId}: ${result.reason}`);
    result.issues.forEach(issue => {
      console.log(`   - ${issue}`);
    });
  } else {
    console.log(`⚠️  ${exampleId}: ${result.reason}`);
  }

  results.details.push(result);
}

console.log('\n' + '='.repeat(80));
console.log('VERIFICATION SUMMARY');
console.log('='.repeat(80));
console.log(`Total examples checked: ${results.total}`);
console.log(`Passed: ${results.passed} (${Math.round(results.passed/results.total*100)}%)`);
console.log(`Failed: ${results.failed} (${Math.round(results.failed/results.total*100)}%)`);
console.log('='.repeat(80));

// Save detailed report
fs.writeFileSync(
  path.join(__dirname, 'verification-report.json'),
  JSON.stringify(results, null, 2)
);

console.log('\nDetailed report saved to: verification-report.json');

// Exit with error code if there are failures
process.exit(results.failed > 0 ? 1 : 0);
