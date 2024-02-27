import fs from 'fs/promises';

const inputFilePath = process.argv[2];
const operation = process.argv[3];
const outputFileName = process.argv[4] || (operation === 'encode' ? 'cypher.txt' : 'clear.txt');

async function cypher(inputFilePath, operation, outputFileName) {
  const fileData = await fs.readFile(inputFilePath, 'utf8');

  let outputData;
  if (operation === 'encode') {
    outputData = Buffer.from(fileData).toString('base64');
  } else if (operation === 'decode') {
    outputData = Buffer.from(fileData, 'base64').toString('utf8');
  } else {
    throw new Error('Invalid operation. Use "encode" or "decode".');
  }

  await fs.writeFile(outputFileName, outputData, 'utf8');
  console.log(`Operation "${operation}" completed. Output saved to "${outputFileName}".`);
}

cypher(inputFilePath, operation, outputFileName);
