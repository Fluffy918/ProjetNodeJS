const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://db:27017/mydb', 
    
    
).then(() => {
    console.log("✅ Connecté à MongoDB");
}).catch(err => {
    console.error("❌ Erreur de connexion à MongoDB :", err);
});

// Définition du modèle Item
const ItemSchema = new mongoose.Schema({ name: String });
const Item = mongoose.model('Item', ItemSchema);

// Route GET : récupérer tous les items
app.get('/items', async (req, res) => {
    const items = await Item.find();
    res.json(items);
});

// Route POST : ajouter un item
app.post('/items', async (req, res) => {
    const newItem = new Item(req.body);
    await newItem.save();
    res.status(201).json(newItem);
});

// Lancer le serveur
app.listen(3000, () => console.log('🚀 Serveur lancé sur http://localhost:3000'));
