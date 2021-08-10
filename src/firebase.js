import firebase from 'firebase'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBoFtcW7muDFb7AN9FPgv6vj9jvio8aCo",
  authDomain: "clone-f3590.firebaseapp.com",
  projectId: "clone-f3590",
  storageBucket: "clone-f3590.appspot.com",
  messagingSenderId: "119862972460",
  appId: "1:119862972460:web:c36f6a238cdfbfccc70189",
  measurementId: "G-KYBT9HYRVQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

