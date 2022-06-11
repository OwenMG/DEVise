const { Task } = require('../models');

const taskData = [{
    "id": 14,
    "name": "Models/Seeds/Deployment",
    "assignedTo": 15,
    "deadline": 2022-06-11,
    "completed": true
  }, 
  {
    "id": 15,
    "name": "UI/UX front end",
    "assignedTo": 18,
    "deadline": 2022-06-11,
    "completed": true
  },
  {
    "id": 3,
    "name": "Kanban",
    "assignedTo": 17,
    "deadline": 2022-06-11,
    "completed": true
  },
  {
    "id": 4,
    "name": "back end routes/rendering",
    "assignedTo": 16,
    "deadline": 2022-06-11,
    "completed": false
  },
  {
    "id": 5,
    "name": "more routes/rendering",
    "assignedTo": 14,
    "deadline": 2022-06-11,
    "completed": false
  }
]

const seedTasks = () => Task.bulkCreate(taskData, {individualHooks:true});

module.exports = seedTasks;

seedTasks();