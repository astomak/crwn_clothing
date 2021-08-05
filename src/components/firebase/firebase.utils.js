import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyA08RkwmySF9p_rDeyawo8ekM7L8pe8RxQ",
    authDomain: "crown-db-cbcd8.firebaseapp.com",
    projectId: "crown-db-cbcd8",
    storageBucket: "crown-db-cbcd8.appspot.com",
    messagingSenderId: "311420531532",
    appId: "1:311420531532:web:a4ec5c6729b5ba586355e9",
    measurementId: "G-ZKLB33SW2E"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
