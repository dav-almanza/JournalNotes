// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDW2cCm2S6xXGvK31wvNEN_2IkRNysh8Lc",
  authDomain: "journal-react-project.firebaseapp.com",
  projectId: "journal-react-project",
  storageBucket: "journal-react-project.appspot.com",
  messagingSenderId: "140604990388",
  appId: "1:140604990388:web:a09986ec857b85d98cc8e1"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);  // exportarlo por si se necesita en otro lugar (para testing...)
export const firebaseAuth   = getAuth( firebaseApp )  // todas las funcionalidades para la autenticacion
export const cloudFirestore = getFirestore( firebaseApp )  // para el acceso y config de la base de datos





// Esto es la configuracion del cliente de firebase... define que asi usaremos firebase en nuestro proyecto. (Variables de entorno). Esta es solo para conectarse, NO para administrar

// firebaseApp, firebaseAuth, cloudFirestore > objetos necesarios para interactuar con firebase
