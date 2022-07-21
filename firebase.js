import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC7O2omF-gnEcPEYchN1PrxeMAOlz1hIzE",
    authDomain: "whatssapp-997ae.firebaseapp.com",
    databaseURL: "https://whatssapp-997ae.firebaseio.com",
    projectId: "whatssapp-997ae",
    storageBucket: "whatssapp-997ae.appspot.com",
    messagingSenderId: "455039470660",
    appId: "1:455039470660:web:dd9e3ace2d461f0268c011",
    measurementId: "G-X7C3F3WYTH"
  };

  const firebaseApp  = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  export {auth};
  export default db;