
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Server is running.');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


let tasks = [
    { id: 1, description: 'Feed Dogs', done: false },
    { id: 2, description: 'Study for Networks Final', done: true },
  ];
  
  app.get('/tasks', (req, res) => {
    res.json(tasks);
  });
  
  app.post('/tasks', (req, res) => {
    const newTask = req.body;
    tasks.push(newTask);
    res.status(201).json(newTask);
  });
  
  app.put('/tasks/:id', (req, res) => {
    const { id } = req.params;
    tasks = tasks.map(task =>
      task.id === parseInt(id) ? { ...task, done: true } : task
    );
    res.json(tasks);
  });
  
  app.delete('/tasks/:id', (req, res) => {
    const { id } = req.params;
    tasks = tasks.filter(task => task.id !== parseInt(id));
    res.json(tasks);
  });