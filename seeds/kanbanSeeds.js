
const { Kanban } = require('../models');

const kanbanData = [
  {
    "kcard_name": "Create Routes",
    "member_name": "Bob",
    "description": "Finish Build out Api and Home routes",
    "column_Id" : 2
  },
  {
    "kcard_name": "Delete Route for a card",
      "member_name": "Jane",
      "description":"Build route to delete card",
      "column_Id" : 2  
  },
  {
    "kcard_name": "Styling",
    "member_name": "Joe",
    "description":"Work on page styling and Css",
      "column_Id" : 1  
  }
]


const seedKanban = () => Kanban.bulkCreate(kanbanData, {individualHooks:true});

module.exports = seedKanban;

