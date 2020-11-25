# Aide-mémoire
## Fonctionnalités
  - S'inscrire
  - Se connecter (via firebase)
  - Ajouter un carnet
  - Supprimer un carnet
  - Modifier un carnet
  - Ajouter une tache
  - Valider une tache
  - Supprimer une tache
  - Se déconnecter
  - Lister les carnet
  - Lister les taches d'un carnet

## Préalables
  - Initialiser npm (npm init)
## Implémentation de netlify functions
  1. Installer netlify-lambda: **npm install netlify-lambda**
  2. Ajout des scripts:
  - lambda-serve: "netlify-lambda serve ***dossier_en_question***"
  - lambda-build: "netlify-lambda build ***dossier_en_question***"
  3. Créer une fichier netlify.toml pour définir le dossier du __build__
  4. dans le dossiers des fonctions créer une premiere fonction:
```javascript
exports.handler = (event, context, callback) => {
  callback(null, { statusCode: 200, body: "Hello world" });
}
```
## Implémentation de firestore
 1. Créer un projet sur firebase
 2. Créer une application
 3. Copier et coller le code fournit par firebase après création du projet
 4. Installer le package __firebase-admin__ -> __npm install firebase-admin__
 5. Générer une clé dans la console firebase au niveau de __service account__
 7. Renommer le fichier téléchargé et le mettre dans le projet (en le mettant dans le git ignore)
 8. Inclure __firebase-admin__ à l'endroit où on veut l'utiliser
 9. Inclure le fichier contenant les configuration du __service account__
 10. Installer __webpack-node-externals__
 11. Créer un fichier webpack.functions.js pour intitialiser webpack

## Design des pages avec tailwind css
 1. Utilisation de tailwindCss


## Remarques
- Chaque fonction est dans son propre fichier