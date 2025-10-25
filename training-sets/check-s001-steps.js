const data = require('./custom-guide-data-full.js');
const s001 = data['S001'];

console.log('S001 Implementation Steps:\n');
s001.implementation.forEach((step, i) => {
  console.log(`Step ${i+1}: ${step.step}`);
  console.log(`Has code? ${!!step.code}`);
  if (step.code) {
    console.log(`Code preview: ${step.code.substring(0, 100)}...`);
  }
  console.log('---');
});
