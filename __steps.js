/* 
AUTH SETUP

1. create firebase project
2. enable web
3. enable sign in method
4. install firebase 
5. get firebase config in your firebase.config.js file
6. export app from firebase.config.js
*/


/* 
1. create UserContext (Auth context): UserContext --> component name,
   UserContext provides AuthContext
2. create AuthContext
3. seet AuthContext.Provider
4. Make sure you set the children
5. export AuthContext to be used inside useContext() hook
6. get form data
*/

/* 
FIREBASE HOSTING

1. one time for each computer
  1. npm install -g firebase-tools
  2. firebase login
2. one time for each project
  1. firebase init
3. make sure for public directory: you select build folder
4. single page application: y
5. for every deploy: npm run build
6. firebase deploy
*/