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

export const createUserProfileDocument = async (userAuth, additionalData) => {

   if (!userAuth) return;

   const userRef =  firestore.doc(`users/${userAuth.uid}`)

   const snapShot = await userRef.get();

   //console.log(snapShot);

   if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
   

      try {
         await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
         })
      } catch (error) {
         console.log('error creating user: ', error.message)
      }
   }  

   return userRef;

}

export const getCurrentUser = () => {
   return new Promise((resolve, reject) => {
      const unsubscribe = auth.onAuthStateChanged(userAuth => {
         unsubscribe()
         resolve(userAuth)
      }, reject)
   })
}


export const convertCollectionsSnapshotToMap = (collections) => {
   const transformedCollection = collections.docs.map(doc => {
      const {title, items} = doc.data()

      return {
         routeName: encodeURI(title.toLowerCase()),
         id: doc.id,
         title,
         items
      }
   })

   console.log(transformedCollection)
   const reducedCollection = transformedCollection.reduce((accumulator, collection) => {
      
      return {...accumulator, [collection.title.toLowerCase()]: collection}
   }, {})

   console.log('reducedCollection',reducedCollection)

   return reducedCollection;
}




 firebase.initializeApp(config);

 export const auth = firebase.auth();
 export const firestore = firebase.firestore();


 export const googleProvider = new firebase.auth.GoogleAuthProvider();
 googleProvider.setCustomParameters({promp: 'select_account'})
 export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)


 export default firebase;