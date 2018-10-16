const express = require("express");
const router = express.Router();

const Task = require('../models/task')

router.get('/', async (req, res) => {
  const tasks = await Task.find();
  console.log(tasks);
  res.json(tasks)
})

// Buscar una Unica tarea por :id
router.get('/:id', async (req, res) => {
  const task = await Task.findById(req.params.id);
  res.json(task);
})

// Insertamos Nueva Tarea a la BD
router.post('/', async (req, res) => {
  const { title, description } = req.body;
  // Nueva tarea
  const task = new Task({
    title,
    description
  });
  // almacenamos en mongodb
  await task.save();
  res.json({
    status: 'Task Saved'
  });
})

// Actualizamos Tarea de la BD
router.put('/:id', async (req, res) => {
  const { title, description } = req.body;
  const newTask = {
    title,
    description
  };
  await Task.findByIdAndUpdate(req.params.id, newTask);
  res.json({
    status: 'Task Update'
  });
})

// Eliminamos Tarea de la BD
router.delete('/:id', async (req, res) => {
  await Task.findByIdAndRemove(req.params.id);
  res.json({
    status: 'Task Delete'
  });
})

module.exports = router;
