# Étape 1 : Utiliser une image de base officielle de Node.js
FROM node:16

# Étape 2 : Définir le répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Étape 3 : Copier package.json et package-lock.json dans le conteneur
COPY package*.json ./

# Étape 4 : Installer les dépendances
RUN npm install

# Étape 5 : Copier le reste des fichiers de ton application dans le conteneur
COPY . .

# Étape 6 : Exposer le port que l'application va utiliser (par défaut, Node.js utilise le port 3000)
EXPOSE 3000

# Étape 7 : Démarrer l'application
CMD ["npm", "start"]
