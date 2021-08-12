const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
const port = 4000;

const generateTasks = (names) => names.map((name, index) => ({ uuid: `${index+1}`, title: name }));
const fetchTasks = (req, res) => {
  const n = req.params.n || 3;
  const url = `https://lorem-faker.vercel.app/api?quantity=${n}`;

  fetch(url)
    .then(res => res.json())
    .then(names => {
      const tasks = generateTasks(names);

      res.json({ tasks });
    })
    .catch(err => {
      res.json({ error: err });
    });
}

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/tasks', fetchTasks);
app.get('/tasks/:n', fetchTasks);

app.put('/tasks/:uuid', (req, res) => {
  const uuid = req.params.uuid;
  console.log(`The task #${uuid} was completed`);
  res.json({});
});

app.listen(port, () => {
  console.log(`Running at http://localhost:${port}`);
});