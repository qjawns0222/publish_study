const fs = require('fs');
const path = require('path');

// Read the verification report
const report = JSON.parse(fs.readFileSync(path.join(__dirname, 'verification-report.json'), 'utf-8'));

// Categorize failures
const issueCategories = {
  missingCSS: [],
  missingColors: [],
  missingTags: [],
  other: []
};

report.details
  .filter(item => item.status === 'FAIL')
  .forEach(item => {
    item.issues.forEach(issue => {
      if (issue.includes('Missing CSS property')) {
        issueCategories.missingCSS.push({ id: item.exampleId, issue });
      } else if (issue.includes('Missing color value')) {
        issueCategories.missingColors.push({ id: item.exampleId, issue });
      } else if (issue.includes('Missing required tag')) {
        issueCategories.missingTags.push({ id: item.exampleId, issue });
      } else {
        issueCategories.other.push({ id: item.exampleId, issue });
      }
    });
  });

console.log('FAILURE ANALYSIS');
console.log('='.repeat(80));
console.log(`\n📊 Missing CSS Properties: ${issueCategories.missingCSS.length}`);
issueCategories.missingCSS.slice(0, 10).forEach(item => {
  console.log(`   ${item.id}: ${item.issue}`);
});
if (issueCategories.missingCSS.length > 10) {
  console.log(`   ... and ${issueCategories.missingCSS.length - 10} more`);
}

console.log(`\n🎨 Missing Colors: ${issueCategories.missingColors.length}`);
issueCategories.missingColors.slice(0, 10).forEach(item => {
  console.log(`   ${item.id}: ${item.issue}`);
});
if (issueCategories.missingColors.length > 10) {
  console.log(`   ... and ${issueCategories.missingColors.length - 10} more`);
}

console.log(`\n🏷️  Missing Tags: ${issueCategories.missingTags.length}`);
issueCategories.missingTags.forEach(item => {
  console.log(`   ${item.id}: ${item.issue}`);
});

console.log(`\n❓ Other Issues: ${issueCategories.other.length}`);
issueCategories.other.forEach(item => {
  console.log(`   ${item.id}: ${item.issue}`);
});

// Find examples with most issues
const examplesByIssueCount = {};
report.details
  .filter(item => item.status === 'FAIL')
  .forEach(item => {
    examplesByIssueCount[item.exampleId] = item.issues.length;
  });

const sorted = Object.entries(examplesByIssueCount)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 10);

console.log('\n📌 Examples with Most Issues:');
sorted.forEach(([id, count]) => {
  console.log(`   ${id}: ${count} issue(s)`);
});

// Conclusion
console.log('\n' + '='.repeat(80));
console.log('CONCLUSION');
console.log('='.repeat(80));
console.log(`The verification found ${report.failed} failing examples out of 100.`);
console.log(`Main issue types:`);
console.log(`  - Missing CSS properties: ${issueCategories.missingCSS.length} occurrences`);
console.log(`  - Missing color values: ${issueCategories.missingColors.length} occurrences`);
console.log(`  - Missing HTML tags: ${issueCategories.missingTags.length} occurrences`);
console.log(`\nThese failures are due to incomplete implementation code in custom-guide-data-full.js.`);
console.log(`The guide data has requirements but missing complete implementation code.`);
