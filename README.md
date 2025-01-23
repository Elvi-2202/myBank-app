
## **Présentation du Projet**

**MyBank App** est une application web qui permet aux utilisateurs de gérer leurs comptes bancaires, effectuer des opérations (dépôts, retraits, virements), et consulter leur historique de transactions. Le projet est divisé en deux parties principales :

- **Backend** : Une API RESTful développée avec Symfony (PHP) qui gère la logique métier, les opérations bancaires et la communication avec la base de données.
- **Frontend** : Une interface utilisateur développée avec React (JavaScript) qui permet aux utilisateurs d'interagir avec l'application de manière intuitive.

## **Technologies Utilisées**

- **Backend** :
  - Symfony (PHP)
  - MySQL (Base de données)
  - Docker (Conteneurisation)
  - Composer (Gestion des dépendances PHP)

- **Frontend** :
  - React (JavaScript)
  - Axios (Communication avec l'API)
  - Docker (Conteneurisation)
  - NPM (Gestion des dépendances JavaScript)

- **Outils Communs** :
  - Docker Compose (Orchestration des conteneurs)
  - GitHub Actions (CI/CD)



## **Installation et Configuration**

### **Cloner le Projet**

1. Clonez le dépôt GitHub :
   git clone https://github.com/Elvi-2202/myBank-app.git
   cd myBank-app
  

2. Le projet est divisé en deux dossiers :
   - `backend` : Contient le code source du backend.
   - `frontend` : Contient le code source du frontend.

### **Configuration du Backend**

1. Accédez au dossier `backend` :
   cd backend

2. Configurez les variables d'environnement :
   - Créez un fichier `.env.local` à partir du fichier `.env` :
    
   - Modifiez le fichier `.env.local` pour configurer les accès à la base de données :
     
     DATABASE_URL="mysql://root:password@db:3307/mybank-db?serverVersion=10.4.32-MariaDB&charset=utf8mb4"
     

### **Configuration du Frontend**

1. Accédez au dossier `frontend` :
   cd ../frontend
   

2. Installez les dépendances JavaScript avec NPM : 
   npm install
  
## **Lancer l'Application avec Docker**

1. Revenez à la racine du projet : 
   cd ..
  
2. Utilisez Docker Compose pour lancer les conteneurs :
   ```bash
   docker-compose up --build
   ```

3. Une fois les conteneurs démarrés, accédez à l'application :
   - **Frontend** : [http://localhost:3000](http://localhost:3000)
   - **Backend** : [http://localhost:8080](http://localhost:8080)

## **Lancer l'Application en Local**

### **Backend**

1. Accédez au dossier `backend` :
   cd backend
 

2. Lancez le serveur Symfony :
   symfony server:start

3. Accédez au backend : [http://localhost:8000]

### **Frontend**

1. Accédez au dossier `frontend` :
   cd ../frontend

2. Lancez le serveur de développement React :
   npm start

3. Accédez au frontend : [http://localhost:3000]

## **Déploiement**

Le projet utilise **GitHub Actions** pour automatiser le déploiement. Chaque fois que du code est poussé sur la branche `main`, le pipeline CI/CD :

1. Installe les dépendances.
2. Exécute les tests.
3. Construit les images Docker.
4. Déploie l'application sur un serveur.

