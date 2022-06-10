const router = require('express').Router();
const Kcard = require('../../models/kanban');


// route to get tasks
router.get('/api/kanban', async (req, res) => {
    const kcardData = await Kcard.findAll().catch((err) => { 
      res.json(err);
    });
    const kcards = kcardData.map((card) => card.get({ plain: true }));
    res.render('kcards', { kcards });
    });


// route to delete task

router.delete('/api/kanban/:id', async (req, res) => {
  try {
    const kcardData = await Kcard.destroy({
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
    const newKcard = await Kcard.create({
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
    const kcardData = await Kcard.update( 
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
    const kcardData = await Kcard.findByPk(req.params.id, {
    });

    const kcard = kcardData.get({ plain: true });

    res.status(200).json(kcard);
  } catch (err) {
    res.status(500).json(err);
  }
});