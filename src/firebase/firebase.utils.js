import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDAl1FpfEUPxKXIi2N5mJazRVkssUFBqSI",
    authDomain: "tradition-db-fb26b.firebaseapp.com",
    projectId: "tradition-db-fb26b",
    storageBucket: "tradition-db-fb26b.appspot.com",
    messagingSenderId: "129334417358",
    appId: "1:129334417358:web:db4e5bfa0d12ac7b5cbd9f"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    //It verify if the user ref that we are getting doesn't exists in order to store 
    // the data in the database
    if (!snapShot.exists) {
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
            console.log('Error creating user', error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;