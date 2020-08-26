import express from 'express';

const app = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.send('ok');
});


app.listen(8080, function() {
  console.log('app running at this server, on port 8080');
});