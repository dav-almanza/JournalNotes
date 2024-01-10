import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import { firebaseAuth } from './config';


const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async() => {

    try {
        const res = await signInWithPopup(firebaseAuth, googleProvider);
        // const credentials = GoogleAuthProvider.credentialFromResult(res);
        const user = res.user;
        const {displayName, email, photoURL: photourl, uid} = user;
        return {
            ok: true,
            displayName, email, photourl, uid
        }
    } catch (error) {
        // // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // // The email of the user's account used.
        // const email = error.customData.email;
        // // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        return { ok: false, errorMessage,}
    }
}

// email - pass  register Provider
export const registerEmailPassword = async({ email, password, displayName }) => {
    try {
        const res = await createUserWithEmailAndPassword(firebaseAuth, email, password);
        const { uid, photoURL: photourl } = res.user;
        await updateProfile( firebaseAuth.currentUser, { displayName } );  // para saber el user actual... that's all I need
        return {
            ok: true,
            displayName, email, photourl, uid
        }
    } catch (error) {
        return { ok: false, errorMessage: error.message,}
    }
}

// email - pass Login
export const loginEmailPassword = async({ email, password }) => {
    try {
        const res = await signInWithEmailAndPassword(firebaseAuth, email, password);
        console.log(res.user);
        const { uid, photoURL: photourl, displayName } = res.user;
        return {
            ok: true,
            displayName, email, photourl, uid
        }
    } catch (error) {
        return { ok: false, errorMessage: error.message,}
    }
}

export const logoutFirebase = async() => {
    return await firebaseAuth.signOut();
}