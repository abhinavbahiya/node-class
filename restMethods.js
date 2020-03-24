'use strict';

const axios = require('axios');
const baseUrl = `https://http-hunt.thoughtworks-labs.net`;

module.exports.get = async () => {
  return await axios({
    method: 'GET',
    url: `${baseUrl}/challenge/input`,
    headers: {'userId': 'P2u4Xb0N'}
  });
}

module.exports.post = async (data) => {
  return await axios({
    method: 'POST',
    url: `${baseUrl}/challenge/output`,
    headers: {'userId': 'P2u4Xb0N', 'Content-Type': 'application/json'},
    data
  });
}