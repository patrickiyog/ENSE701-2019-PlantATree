const router = require('express').Router();
let Tree = require('../models/tree.model');


// displaying tree
router.route('/').get((req, res) => {
    Tree.find()
        .then(trees => res.json(trees))
        .catch(err => res.status(400).json('Error: '+err));
});

//adding tree to the database
router.route('/add').post((req, res) => {
    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;

    const newTree = new Tree({
        name, 
        description,
        price,
    });

    newTree.save()
        .then(() => res.json('tree added!'))
        .catch(err => res.status(400).json('Error: '+err));
});

// finding tree by ID
router.route('/:id').get((req, res) => {
    Tree.findById(req.params.id)
        .then(tree => res.json(tree))
        .catch(err => res.status(400).json('Error: '+err));
});

//deleting trees
router.route('/:id').delete((req, res) => {
    Tree.findByIdAndDelete(req.params.id)
        .then(tree => res.json(tree))
        .catch(err => res.status(400).json('Error: '+err));
});

//update tree by ID
router.route('/update/:id').post((req, res) =>{
    Tree.findById(req.params.id)
        .then(tree => {
            tree.name = req.body.name;
            tree.description = req.body.description;
            tree.price = req.body.price;
        Tree.save()
            .then(() => res.json('Tree updated! '))
            .catch(err => res.status(400).json('Error: '+err))
    })
    .catch(err => res.status(400).json('Error: '+err));
});

module.exports = router;