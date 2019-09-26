const mongoose = require('mongoose');

const treeSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number,}
}, {
    timestamps: true,
});

const Tree = mongoose.model('Tree', treeSchema);

module.exports = Tree;
