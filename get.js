// Route GET /items - Récupère tous les items
app.get('/items', async (req, res) => {
    try {
        const items = await Item.find(); // Trouve tous les items
        res.status(200).json(items); // Retourne les items
    } catch (err) {
        res.status(500).json({ message: "Erreur lors de la récupération des items", error: err.message });
    }  });

