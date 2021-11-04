import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDUiIez4VKz4_uXfUkLRhAAyKz-wwZE_qo",
  authDomain: "crown-db-7fcad.firebaseapp.com",
  projectId: "crown-db-7fcad",
  storageBucket: "crown-db-7fcad.appspot.com",
  messagingSenderId: "945458824650",
  appId: "1:945458824650:web:492a324a564c43d0aafb33",
  measurementId: "G-8RCP9H5VSH"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
