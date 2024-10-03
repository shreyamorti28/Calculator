const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/calculate', (req, res) => {
  const { input } = req.body;
  let output;
  try {
    output = eval(input);
  } catch (error) {
    output = 'Error';
  }
  res.json({ output });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
