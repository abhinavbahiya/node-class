'use strict';

const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const {get, post} = require('./restMethods');
const {decode} = require('./decode');
const {hiddenTools} = require('./hiddenTools');
const {toolUsageData} = require('./toolUsageData');
const {sortTools} = require('./sortTools');

app.get('/', (req, res) => {
  console.log('Hello World');
  res.status(200).send('Hi Abhinav, Hello World!')
});

app.get('/domychallenge1', async (req, res) => {
  try {
    const input = await get();
    console.log(input.data);

    const decryptedText = decode(input.data);
    console.log(decryptedText);

    const data = {
      message: decryptedText
    };
    const output = await post(data);
    
    console.log(output.data);
    
    res.status(200).json(output.data);
  
  } catch(error) {
    console.log(error);
  }
  });

app.get('/challenge2', async (req, res) => {
  try {
    const input = await get();
    console.log(input.data);
    
    const toolsFound = hiddenTools(input.data);
    console.log(toolsFound);

    const data = {
      toolsFound
    };
    const output = await post(data);
    console.log(output);
    
    res.status(200).json(output.data);
  } catch(error) {
    console.log(error);
  }
});

app.get('/challenge3', async (req, res) => {
  try {
    const input = await get();
    console.log(input.data);
    
    console.log(typeof toolUsageData);
    
    const toolsSortedOnUsage = toolUsageData(input.data);
    console.log(toolsSortedOnUsage);

    const data = {
      toolsSortedOnUsage
    };
    const output = await post(data);
    console.log(output);
    
    res.status(200).json(output.data);
  } catch(error) {
    console.log(error);
  }
});

app.get('/domytest', async (req, res) => {
  try {
    // const input = await get();
    // console.log(input.data);
    
    // console.log(typeof toolUsageData);
    
    const input = {
      data: {
        tools: [
          { name: 'knife', weight: 10, value: 60 },
          { name: 'guns', weight: 20, value: 100 },
          { name: 'rope', weight: 30, value: 120 },
          { name: 'water', weight: 40, value: 500 }
        ],
        maximumWeight: 60
      }
    }
    const toolsToTakeSorted = sortTools(input.data);
    
    // const data = {
    //   toolsToTakeSorted
    // };
    // console.log(data);
    // const output = await post(data);
    // console.log(output);
    
    // res.status(200).json(output.data);
  } catch(error) {
    console.log(error);
  }
});

app.get('/about/:something', (req, res) => {
  console.log(req.params.something);
  // We can also send query params here
  res.status(200).send(`The parameter is ${req.params.something}`);
});

app.listen(process.env.PORT, () => {
  console.log(`App is listening on port ${process.env.PORT}`)
});

