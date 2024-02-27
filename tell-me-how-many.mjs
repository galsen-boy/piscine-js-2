import fs from 'fs/promises';
import path from 'path';

const folder = process.argv[2] ? path.resolve(process.argv[2]) : process.cwd();

fs.readdir(folder)
  .then(entries => {
    const num = entries.length;

    // Print the result in the console
    console.log(num);
  })