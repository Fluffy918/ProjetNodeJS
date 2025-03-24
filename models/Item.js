
// Définir un schéma pour l'objet Item
const ItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, // Le nom est requis
        trim: true // Supprime les espaces en début et fin
    },
    price: {
        type: Number,
        required: true, // Le prix est requis
        min: 0 // Le prix ne peut pas être négatif
    },
    createdAt: {
        type: Date,
        default: Date.now // La date de création est par défaut la date actuelle
    }  });

// Créer le modèle basé sur le schéma
const Item = mongoose.model('Item', ItemSchema);

// Exporter le modèle pour l'utiliser ailleurs
module.exports = Item;
