import { createSlice } from "@reduxjs/toolkit";


export const authenticationSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking', // not-authenticated, authenticated, checking
        uid: null,
        email: null,
        photourl: null,
        displayName: null,
        errorMessage: null,
    },
    reducers: {
        login: (state, { payload }) => {
            state.status = 'authenticated'; // not-authenticated, authenticated, checking
            state.uid = payload.uid;
            state.email = payload.email;
            state.photourl = payload.photourl;
            state.displayName = payload.displayName;
            state.errorMessage = null;
        },
        logout: (state, { payload }) => {
            state.status = 'not-authenticated'; // not-authenticated, authenticated, checking
            state.uid = null;
            state.email = null;
            state.photourl = null;
            state.displayName = null;
            state.errorMessage = payload?.errorMessage; // si no viene el payload no hay problema: "null"
        },
        checkingCredentials: (state) => {
            state.status = 'checking';
        }
    }
})

export const { login, logout, checkingCredentials } = authenticationSlice.actions;   // actions creator functions


// checkingCredentials: ayuda en los procesos asincronos ej:login.  Sirve para evitar doble posteo de submit, bloquear botones...
// en teoria cuando estamos en checking no deberiamos mostrar ningun Login... estamos revisando la uatenticacion. 

// cuando se crean reducers, usualmente se quiere crear acciones que disparen algo

// el estado inicial es checking porque no se sabe si se esta autenticado o no... hay que disparar un algun proceso para saberlo