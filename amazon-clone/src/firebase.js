import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDfUSfZItbX5XQyGzrTcATgsUU3MutCmc4",
    authDomain: "fly-buy-6c344.firebaseapp.com",
    projectId: "fly-buy-6c344",
    storageBucket: "fly-buy-6c344.appspot.com",
    messagingSenderId: "20680034895",
    appId: "1:20680034895:web:a959929390302c76e8b83a",
    measurementId: "G-YZ8RVTG40P"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};
  