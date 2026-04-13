var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('CI/CD pipeline working successfully!');
});

if (require.main === module) {
  app.listen(3000, '0.0.0.0', function () {
    console.log('App is running on port 3000');
  });
}

module.exports = app;
