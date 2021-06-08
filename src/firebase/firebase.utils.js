import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD6y0rJbez_Wfw187nCBmfj1VjHlctW6pk",
    authDomain: "ketrika-2fc0e.firebaseapp.com",
    projectId: "ketrika-2fc0e",
    storageBucket: "ketrika-2fc0e.appspot.com",
    messagingSenderId: "683970922803",
    appId: "1:683970922803:web:12c9f35ecccb83d7409646",
    measurementId: "G-2CTQDTNHMB"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//authentification google
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
//popup
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;