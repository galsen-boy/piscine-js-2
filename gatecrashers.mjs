import http from 'http';
import { join } from 'path';
import { readFile, writeFile } from 'fs/promises';

const authorizedUsers = {
  'Caleb_Squires': 'abracadabra',
  'Tyrique_Dalton': 'abracadabra',
  'Rahima_Young': 'abracadabra',
};

const directoryPath = 'guests';

function handlePostRequest(request, response) {
  let body = '';
  request.on('data', chunk => {
    body += chunk.toString();
  });

  request.on('end', async () => {
    try {
      const { username, password } = request.auth;
      if (!authorizedUsers[username] || authorizedUsers[username] !== password) {
        response.statusCode = 401;
        response.setHeader('Content-Type', 'application/json');
        response.end(JSON.stringify({ error: 'Authorization Required' }));
        return;
      }

      const guestName = request.url.slice(1);
      const filePath = join(directoryPath, `${guestName}.json`);
      const guestData = JSON.parse(body);

      await writeFile(filePath, JSON.stringify(guestData));

      response.statusCode = 200;
      response.setHeader('Content-Type', 'application/json');
      response.end(JSON.stringify(guestData));
    } catch (error) {
      response.statusCode = 500;
      response.setHeader('Content-Type', 'application/json');
      response.end(JSON.stringify({ error: 'Server failed' }));
      console.error(error);
    }
  });
}

function handleRequest(request, response) {
  const { url, method, headers } = request;

  if (method === 'POST') {
    if (!headers.authorization) {
      response.statusCode = 401;
      response.setHeader('WWW-Authenticate', 'Basic realm="Authorization Required"');
      response.setHeader('Content-Type', 'application/json');
      response.end(JSON.stringify({ error: 'Authorization Required' }));
      return;
    }

    const auth = headers.authorization.replace(/^Basic /, '');
    const [username, password] = Buffer.from(auth, 'base64').toString().split(':');
    request.auth = { username, password };

    handlePostRequest(request, response);
  } else {
    response.statusCode = 404;
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify({ error: 'Guest not found' }));
  }
}

const server = http.createServer(handleRequest);

const port = 5000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

export default server;