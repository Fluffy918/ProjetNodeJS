const Item = require('./models/Item');

// Route POST /items - Crée un nouvel item
app.post('/items', async (req, res) => {
    try {
        // On récupère les données envoyées dans la requête
        const { name, price } = req.body;
        // Créer une nouvelle instance de l'objet Item
        const newItem = new Item({ name, price });
        // Sauvegarder le nouvel objet dans la base de données
        await newItem.save();
        // Répondre avec l'objet créé
        res.status(201).json(newItem);
    } catch (err) {
        // Si une erreur se produit, on renvoie un message d'erreur
        res.status(400).json({ message: "Erreur lors de l'ajout de l'item", error: err.message });
    }  });


