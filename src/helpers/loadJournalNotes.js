import { collection, getDocs } from "firebase/firestore/lite";
import { cloudFirestore } from "../firebase/config";

export const loadJournalNotes = async( uid = '' ) => {

    if ( !uid ) throw new Error(" user UID don't exist");
    const collectionRef = collection( cloudFirestore, `${uid}/journal/notes` );  // apuntar y hacer referencia a la collection necesaria
    const docusNotes = await getDocs( collectionRef );  // bring the documents... and other filters

    const notes = [];
    docusNotes.forEach( note => {
        notes.push({ id: note.id, ...note.data() });
    }) 

    return notes;
}