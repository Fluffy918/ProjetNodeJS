require('dotenv').config(); // Charge les variables d'environnement

const mongoose = require('mongoose'); // Assure-toi que mongoose est installé
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

// Connexion à MongoDB
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie'))
    .catch(err => console.error('Erreur de connexion à MongoDB :', err));

app.listen(PORT, () => {
    console.log(`🚀 Serveur démarré sur http://localhost:${3000}`);
});
