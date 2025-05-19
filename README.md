# Application To-Do List avancée avec filtrage et persistance

![Image](https://github.com/user-attachments/assets/10216711-efe2-4e56-a07f-6857373a1068)

✅ Description fonctionnelle
Cette application permet à l’utilisateur de :

Ajouter des tâches dans une liste.

Supprimer des tâches avec une animation fluide.

Garder les tâches enregistrées même après avoir rafraîchi ou redémarré l’application.

Profiter automatiquement du thème clair ou sombre en fonction des préférences du système d’exploitation (navigateur).

# Pour démarrer cette application en local , Voici les instructions à faire :

✅ 1. Télécharger ou cloner le projet

Si tu as un fichier .zip :</br>
Décompresse-le dans un dossier de ton choix.

Si tu as un lien GitHub :</br>
git clone https://github.com/salimhaloui1/app-two-react-todolist.git </br>
cd nom-du-projet

✅ 2. Installer les dépendances

Avant tout, tu dois t'assurer d'avoir Node.js installé. Tu peux le vérifier avec :

node -v</br>
npm -v

Si ce n’est pas installé, télécharge-le ici : https://nodejs.org/

Ensuite, dans le dossier du projet :

npm install

Cette commande lit le fichier package.json et installe toutes les dépendances nécessaires dans le dossier node_modules.

✅ 3. Lancer l’application en développement

Toujours dans le dossier du projet :

npm run dev

ou parfois :

npm start

Ça dépend de ce qui est configuré dans le fichier package.json. Si dev ne fonctionne pas, regarde ce fichier pour voir la bonne commande.

✅ 4. Accéder à l’application

Une fois lancée, tu verras quelque chose comme :

VITE v5.0.0  ready in 300 ms

➜  Local:   http://localhost:5173/

Ouvre ce lien dans ton navigateur.

✅ 5. Résolution des erreurs courantes

Si tu as une erreur comme :

Error: Cannot find module</br>
→ Une dépendance manquante ? Refaire npm install.

vite: command not found </br>
→ Peut-être qu’il faut installer Vite globalement :

npm install -g vite </br>
Erreur liée à node-sass ou autre </br>
→ Parfois, il faut supprimer node_modules et refaire l'installation :

rm -rf node_modules</br>
npm install

✅ En résumé rapide :

# 1. Aller dans le dossier
cd nom-du-projet

# 2. Installer les dépendances
npm install

# 3. Lancer le projet
npm run dev     # ou npm start
