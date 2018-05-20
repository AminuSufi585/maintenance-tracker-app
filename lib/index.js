import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({ message: 'Server setup is successful!' });
});

app.listen(port, () => {
  console.log(`Server started....\nVisit http://localhost:${port}`);
});

module.exports = app; // for testing
