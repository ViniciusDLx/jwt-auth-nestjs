const base64Url = require('base64-url');

const header = {
  alg: 'HS256', // Hmac + SHA256
  type: 'JWT',
};

// corpo de dados - dados principais do token
const payload = {
  username: 'user1@user.com',
  name: 'Vinicius de Lima Xavier',
  exp: new Date().getTime(), // timestamp
};

const headerEncoded = base64Url.encode(JSON.stringify(header));
const payloadEncoded = base64Url.encode(JSON.stringify(payload));

console.log(headerEncoded, payloadEncoded);

const key = 'abcd123456';

const crypt = require('crypto');

const signature = crypt
  .createHmac('sha256', key)
  .update(`${headerEncoded}.${payloadEncoded}`)
  .digest('bin');

console.log(
  `${headerEncoded}.${payloadEncoded}.${base64Url.encode(signature)}`,
);
