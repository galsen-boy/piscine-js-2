import http from 'http';
import fs from 'fs/promises';
import path from 'path';

const port = 5000;
const directoryPath = './guests';

const server = http.createServer(async (req, res) => {
  try {
    const guestName = req.url.slice(1);
    const filePath = path.join(directoryPath, `${guestName}.json`);
    const fileData = await fs.readFile(filePath);
    const guest = JSON.parse(fileData);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(guest));
  } catch (error) {
    if (error.code === 'ENOENT') {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'guest not found' }));
    } else {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'server failed' }));
    }
  }
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

