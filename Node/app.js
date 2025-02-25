const express = require('express');

const { taskRouter } = require('./router');

const app = express();
app.use(express.json());

app.use('/api/tasks', taskRouter);

app.get('/', (req, res) => {
  res.send('Welcome to the CRUD API!');
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running oon porrt ${PORT}`);
});
