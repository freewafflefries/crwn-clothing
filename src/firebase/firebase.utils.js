import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBLGXUWFcdhD99wuhQNe9Fe-UWQmaF4-g8",
    authDomain: "crwn-db-9db60.firebaseapp.com",
    projectId: "crwn-db-9db60",
    storageBucket: "crwn-db-9db60.appspot.com",
    messagingSenderId: "746162046126",
    appId: "1:746162046126:web:c0f5a2d3daa7c16e03193f",
    measurementId: "G-JXFHCFTZ70"
 }

 firebase.initializeApp(config);

 export const auth = firebase.auth();
 export const firestore = firebase.firestore();

 const provider = new firebase.auth.GoogleAuthProvider();
 provider.setCustomParameters({promp: 'select_account'})
 export const signInWithGoogle = () => auth.signInWithPopup(provider)

 export default firebase;