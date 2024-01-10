import { loginEmailPassword, logoutFirebase, registerEmailPassword, signInWithGoogle } from '../../firebase/providers';
import { checkingCredentials, login, logout } from "./authSlice"

export const checkingAuthentication = (email, password) => {
    return async(dispatch) => {
        dispatch( checkingCredentials() );
    }
}

export const startGoogleSignIn = () => {
    return async(dispatch) => {
        dispatch( checkingCredentials() );
        const result = await signInWithGoogle();  // empleo del provider
        if ( !result.ok ) return dispatch( logout(result.errorMessage) );   // si falla la autenticacion >> logout
        // delete result.ok
        dispatch( login(result) );
    }
}

export const startRegisterUserEmailPassword = ({ email, password, displayName }) => {
    return async(dispatch) => {
        dispatch( checkingCredentials() );
        const { ok, uid, photoURL: photourl, errorMessage } = await registerEmailPassword( {email, password, displayName});  
        
        if ( !ok ) return dispatch( logout({errorMessage}) );  // le mandamos en el payload directamenet la propiedad "errorMessage"
        dispatch( login({uid, displayName, email, photourl}) );
    }
}

export const startLoginEmailPassword = ({ email, password }) => {
    return async(dispatch) => {
        dispatch( checkingCredentials() );
        const result = await loginEmailPassword( {email, password});  
        
        if ( !result.ok ) return dispatch( logout( result ) );  
        dispatch( login( result ) );
    }
}

export const startFirebaseLogout = () => {
    return async(dispatch) => {
        await logoutFirebase();
        dispatch( logout() ); 
    }
}



// para acciones asincronas...  acciones que se despachan que incluyen una tarea asincrona (a destiempo) 

// checkingAuthentication> despachar una accion que permita poner la app en un estado de loading... "Checking credentials"