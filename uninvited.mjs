import http from 'http';
import fs from 'fs/promises';

const port = 5000;
const directoryPath = './guests/';

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk.toString();
    });

    req.on('end', async () => {
      const fileName = req.url.slice(1) + '.json';

      try {
        await fs.writeFile(directoryPath + fileName, body, { flag: 'w' });
        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(body);
      } catch (error) {
        console.error(error);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'server failed' }));
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'page not found' }));
  }
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
