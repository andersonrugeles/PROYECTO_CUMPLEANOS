import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBKYzkch7aNINPGe9-iHWOKToOGqgvu8N4",
    authDomain: "cumpleanos-f4389.firebaseapp.com",
    databaseURL: "https://cumpleanos-f4389.firebaseio.com",
    projectId: "cumpleanos-f4389",
    storageBucket: "cumpleanos-f4389.appspot.com",
    messagingSenderId: "353544746268",
    appId: "1:353544746268:web:4226772c17f5459de3b6d9"
  };

  export default firebase.initializeApp(firebaseConfig);