const mongoose = require('mongoose');

// Définition du modèle Item
const ItemSchema = new mongoose.Schema({
    name: String,
    price: Number,
    createdAt: { type: Date, default: Date.now }  });

module.exports = mongoose.model('Item', ItemSchema);
