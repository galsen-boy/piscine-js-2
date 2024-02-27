import fs from 'fs/promises';

const filename = process.argv[2];

fs.readFile(filename, 'utf-8')
  .then(content => {
    const words = content.split(' ');

    const changed = words.map(word => {
      const middle = Math.floor(word.length / 2);
      const firstHalf = word.slice(0, middle);
      const secondHalf = word.slice(middle);
      return secondHalf + firstHalf;
    });

    const result = changed.join(' ');
    console.log(result);
  })
  .catch(error => {
    console.error('Error reading file:', error);
  });
