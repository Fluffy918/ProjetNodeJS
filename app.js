const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Middleware pour analyser les données JSON
app.use(express.json());

// Connexion à la base de données
mongoose.connect('mongodb://localhost:27017/itemsDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Définition d'un modèle pour un item
const Item = mongoose.model('Item', new mongoose.Schema({
  name: String,
  description: String
}));

// Route GET /items pour récupérer la liste des objets
app.get('/items', async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

// Route POST /items pour ajouter un nouvel objet
app.post('/items', async (req, res) => {
  const newItem = new Item(req.body);
  await newItem.save();
  res.status(201).json(newItem);
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

