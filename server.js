const express = require('express');
const app = express();

const port = process.env.PORT || 4000;
const path = require('path');
const fs = require('fs');

app.get('/', function(request, response) {
  console.log('Home')
  const filePath = path.resolve(__dirname, './build', 'index.html');
  fs.readFile(filePath, 'utf8', function(err, data) {
    if (err) {
      return console.log(err);
    }
    response.send(data);
  })
});

app.get('/about', function(request, response) {
  console.log('About')
  const filePath = path.resolve(__dirname, './build', 'index.html');
  fs.readFile(filePath, 'utf8', function(err,data) {
    if (err) {
      return console.log(err);
    }
    response.send(data);
  })
})

app.get('/contact', function(request, response) {
  console.log('Contact')
  const filePath = path.resolve(__dirname, './build', 'index.html');
  fs.readFile(filePath, 'utf8', function(err,data) {
    if (err) {
      return console.log(err);
    }
    response.send(data);
  })
})

app.get('/kalkulator', function(request, response) {
  console.log('Kalkulator')
  const filePath = path.resolve(__dirname, './build', 'index.html');
  fs.readFile(filePath, 'utf8', function(err,data) {
    if (err) {
      return console.log(err);
    }
    response.send(data);
  })
})

app.use(express.static(path.resolve(__dirname, './build')));

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
