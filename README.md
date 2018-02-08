# Boilerplate React Setup


### 1) NPM install your dependencies.
### 2) ADD YOUR DAMN .gitignore before you forget

#### ignore these while you're at it:
1) node_modules
2) public/bundle.js
3) secrets.json

### 3) Name your app in package.json

### 4) Start linking up visual components in app/main.jsx

---

### Some Notes:
* Server works on Node/Express
* 'npm start' will run webpack -w and nodemon on your server/index
* Server initializes a passport config on server/index.js, which you can obviously use as is or remove.
* If you wish to use SQL, there is some minimal setup done. You will need to create the database on your machine and then hook it up in db/index.js
* Basic React-Routing template has been added
* Assumes the basic file structure of action-creators, components, containers, and reducers for React which you can tweak to your preferences.
* If you have never used React, take some time to figure out how your react components make their way into the DOM. Start in index.html, and then take a look at app/main.jsx if you are lost.

---

### Tech stack used:
-Node
-Express
-React
-Redux
-Webpack / Babel
-SCSS
-SQL
-Postgres
-Sequelize ORM
