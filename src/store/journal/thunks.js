import { collection, doc, setDoc } from "firebase/firestore/lite";
import { cloudFirestore } from "../../firebase/config";

import { addEmptyNote, createNewNote, setActiveNote } from "./journalSlice";

export const startNewNote = () => {
    return async( dispatch, getState ) => {

        dispatch( createNewNote() ); 

        const {uid} = getState().auth;
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),

        }
        const newDoc = doc( collection( cloudFirestore, `${uid}/journal/notes` ) );
        await setDoc( newDoc, newNote );
        // console.log({newDoc, newNote});
        newNote.id = newDoc.id;

        //dispatch...
        dispatch( addEmptyNote( newNote ) ); 
        dispatch( setActiveNote( newNote ) ); 
    }
}