import fs from 'fs/promises';


const ting = process.argv[2];

const words = ting.split(' ');

// change the ting
const changed = words.map(word => {
  const middle = Math.ceil(word.length / 2);
  const fir = word.slice(0, middle);
  const sec = word.slice(middle);
  return sec + fir;
});

const result = changed.join(' ')
fs.writeFile('verydisco-forever.txt', result)