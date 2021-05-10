## Deploy

React app requires [Node.js](https://nodejs.org/) v10+ to run.

Install the firebase tools.

```javascript
npm -i firebase
npm i -g firebase-tools
firebase login
firebase init
single page app: y
npm run build
firebase deploy
```


Install the axios lib.

```javascript
npm i axios
```

Install the cloud functions.

```javascript
firebase init
select functions
select javascript
Esline bugs: y
Dependencies: y
install everthing inside functions folder: npm i xxx
```
Install the cloud functions inside backend.

```javascript
npm i express
npm i cors
npm i stripe
firebase emulators:start
```
