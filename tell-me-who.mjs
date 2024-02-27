// tell-me-who.mjs
import fs from 'fs/promises';

const directoryPath = process.argv[2];

async function printGuestNames() {
  try {
    const files = await fs.readdir(directoryPath);
    const names = files
      .filter(file => file.endsWith('.json'))
      .map(file => {
        const [firstName, lastName] = file.slice(0, -5).split('_');
        return `${lastName} ${firstName}`;
      })
      .sort();

    names.forEach((name, index) => {
      console.log(`${index + 1}. ${name}`);
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

printGuestNames();
