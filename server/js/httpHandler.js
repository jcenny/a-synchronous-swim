const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');
const keypressHandler = require('./keypressHandler');
const messageQ = require('./messageQueue');
//const backgroundImage = require('./../background.jpg');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

let messageQueue = null;
module.exports.initialize = (queue) => {
  messageQueue = queue;
};

module.exports.router = (req, res, next = () => { }) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  if (req.method = "GET") {
    if (req.url === '/') {
      res.writeHead(200, headers);
      res.end(JSON.stringify(messageQ.messages));
      for (let i = 0; i < messageQ.messages.length; i++) {
        messageQ.dequeue();
      }
    }
   if (req.url === '/background.jpg') {
      fs.readFile('./background.jpg', (err, data) => {
      if (err) throw err;
      console.log(data)
      // console.log(Buffer.from(data).toString('base64'));
      res.end(data.toString('base64'))
    });

   }

    next(); // invoke next() at the end of a request to help with testing!
  }

  if (req.method = "OPTIONS") {
    res.writeHead(200, headers);
    res.end();
    next();
  }

  if (req.method = "POST") {
    //console.log(res)

    console.log()
    res.writeHead(200, headers);
    res.end();
    next();
    // save somewhere that image you got
  }

};
