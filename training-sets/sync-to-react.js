const fs = require('fs');
const path = require('path');

console.log('🔄 Syncing training-sets to training-sets-react/public...\n');

let successCount = 0;
let failCount = 0;

for (let i = 1; i <= 100; i++) {
  const exampleId = `S${String(i).padStart(3, '0')}`;
  const sourcePath = path.join(__dirname, exampleId);
  const destPath = path.join(__dirname, '..', 'training-sets-react', 'public', exampleId);

  try {
    // Create destination directory if it doesn't exist
    if (!fs.existsSync(destPath)) {
      fs.mkdirSync(destPath, { recursive: true });
    }

    // Copy all 3 HTML files
    const files = ['A-guide.html', 'B-practice.html', 'C-answer.html'];

    files.forEach(file => {
      const srcFile = path.join(sourcePath, file);
      const destFile = path.join(destPath, file);

      if (fs.existsSync(srcFile)) {
        fs.copyFileSync(srcFile, destFile);
      }
    });

    successCount++;
    if (i % 10 === 0) {
      console.log(`✅ ${exampleId} synced (${i}/100)`);
    }
  } catch (err) {
    console.error(`❌ ${exampleId} failed:`, err.message);
    failCount++;
  }
}

console.log('\n' + '='.repeat(60));
console.log('SYNC COMPLETE');
console.log('='.repeat(60));
console.log(`✅ Success: ${successCount}/100`);
console.log(`❌ Failed: ${failCount}/100`);
console.log('\n🎉 training-sets-react/public is now up to date!');
