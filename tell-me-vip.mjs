import fs from 'fs/promises';
import path from 'path';

const directoryPath = process.argv[2];

async function getVipGuests(directoryPath) {
  const files = await fs.readdir(directoryPath);
  const guests = await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(directoryPath, file);
      const data = await fs.readFile(filePath, 'utf8');
      const guestInfo = JSON.parse(data);

      if (guestInfo.answer.toLowerCase() === 'yes') {
        const [firstName, lastName] = file.slice(0, -5).split('_');
        return `${lastName} ${firstName}`;
      }
      return null;
    })
  );

  const filteredGuests = guests.filter((guest) => guest !== null);
  const sortedGuests = filteredGuests.sort();

  const formattedGuests = sortedGuests
    .map((guest, index) => `${index + 1}. ${guest}`)
    .join('\n');

  await fs.writeFile('vip.txt', formattedGuests, 'utf8');
  console.log('VIP list saved to vip.txt');
}

getVipGuests(directoryPath);
