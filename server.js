require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour parser le JSON
app.use(express.json());

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("✅ Connecté à MongoDB"))
.catch(err => console.error("❌ Erreur de connexion MongoDB:", err));

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`🚀 Serveur en écoute sur http://localhost:${PORT}`);
});

const Item = require('./models/Item');

// Route GET /items - Récupère tous les objets
app.get('/items', async (req, res) => {
    try {
        const items = await Item.find(); // Récupère tous les objets
        res.json(items);
    } catch (err) {
        res.status(500).json({ message: "Erreur serveur" });
    }
});

// Route POST /items - Ajoute un nouvel objet
app.post('/items', async (req, res) => {
    try {
        const { name, price } = req.body;
        const newItem = new Item({ name, price });
        await newItem.save();
        res.status(201).json(newItem);
    } catch (err) {
        res.status(400).json({ message: "Erreur lors de l'ajout" });
    }
});
