import { collection, doc, setDoc } from "firebase/firestore/lite";
import { cloudFirestore } from "../../firebase/config";

import { addEmptyNote, createNewNote, setActiveNote, setNotes, setPhotoActiveNote, setSavingNote } from "./journalSlice";
import { loadJournalNotes } from "../../helpers";
import { fileUpload } from "../../helpers/filesUpload";

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

export const startLoadingNotes = () => {
    return async( dispatch, getState ) => {

        const { uid } = getState().auth;
        if ( !uid ) throw new Error(" user UID don't exist");  // esto no debe pasar...

        const notes = await loadJournalNotes( uid );
        dispatch( setNotes(notes) );
    }
}

export const startSavingNote = () => {
    return async( dispatch, getState ) => {

        dispatch( setSavingNote() );

        const { uid } = getState().auth;
        const { active:activeNote } = getState().journal;

        const noteFireStore = {...activeNote};
        delete noteFireStore.id;

        const documRef = doc( cloudFirestore, `${uid}/journal/notes/${activeNote.id}` );  // referencia al doc en firestore
        await setDoc( documRef, noteFireStore, { merge: true });  //
    }
}

export const startUploadingFiles = ( files = [] ) => {
    return async( dispatch ) => {
        dispatch( setSavingNote() );  // block the buttons... app en estado de carga 
        
        // code to UPLOAD to Cloudinary...
        const fileUploadPromises = [];
        for (const file of files) {
            fileUploadPromises.push( fileUpload(file) );
        }
        // files.map( file => fileUpload(file) );  // async... parallel
        const photoURLs = await Promise.all(fileUploadPromises);
          // sync... secuential
        // files.forEach( async(file) => {
        //     await fileUpload(file);
        // })  
        dispatch( setPhotoActiveNote(photoURLs) );

    }
}