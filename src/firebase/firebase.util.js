import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config ={
  apiKey: "AIzaSyB0l0fiXAscmWghSwGNkN1j2saMCHmLPLo",
  authDomain: "crwn-data-4948f.firebaseapp.com",
  projectId: "crwn-data-4948f",
  storageBucket: "crwn-data-4948f.appspot.com",
  messagingSenderId: "383457618433",
  appId: "1:383457618433:web:e2b5a42d254d95cf3cae00",
  measurementId: "G-PBVQ82W6PM"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;