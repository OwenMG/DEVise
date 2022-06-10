const router = require('express').Router();
const { Kanban } = require('../../models');
const Authenticated = require('../../utils/auth');




// route to delete task

router.delete('/api/kanban/:id', async (req, res) => {
  try {
    const kcardData = await Kanban.destroy({
      where: {
        id: req.params.id
      },
    });

    if (!kcardData) {
      res.status(404).json({ message: 'No task found with this id!' });
      return;
    }

    res.status(200).json(kcardData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// route to create task 

router.post('/api/kanban', async (req, res) => {
  try {
    const newKcard = await Kanban.create({
      member_name: req.body.name,
      kcard_name: req.body.task,
      description: req.body.description,
    });

    res.status(200).json(newKcard);
  } catch (err) {
    res.status(400).json(err);
  }
});
        
module.exports = router;

// update 

router.put('/api/kanban/:id', async (req, res) => {
  try {
    const kcardData = await Kanban.update( 
      {
        column_id: req.body.columnId,
      },
      {
      where: {
        id: req.params.id,
      },
    });
    
    res.status(200).json(kcardData);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/api/kanban/:id', async (req, res) => {
  try {
    const kcardData = await Kanban.findByPk(req.params.id, {
    });

    const kcard = kcardData.get({ plain: true });

    res.status(200).json(kcard);
  } catch (err) {
    res.status(500).json(err);
  }
});