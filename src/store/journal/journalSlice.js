import { SatelliteAlt } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit"

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        active: null,
        // active: {
        //     id: 'asdf123',
        //     title: '',
        //     body: '',
        //     date: 123234,
        //     imageUrls: [],  //https://foto1.jpg,...
        // }
    },
    reducers: {
        createNewNote: ( state ) => {
            state.isSaving = true;
        },
        addEmptyNote: (state, action) => {
            state.notes.push( action.payload );
            state.isSaving = false;
        },
        setNotes: (state, action) => {
            state.notes = action.payload;
        },
        setActiveNote: (state, action) => {
            state.active = action.payload;
            state.messageSaved = '';
        },
        setSavingNote: (state, action) => {
            state.isSaving = true;
            state.messageSaved = '';
        },
        updateNote: (state, action) => {
            state.isSaving = false;
            state.notes = state.notes.map( note => {
               if ( note.id === action.payload.id ) {
                   return action.payload;
               }
               return note;
            });
            state.messageSaved = `${ action.payload.title }...`;
        },
        setPhotoActiveNote: (state, action) => {
            state.active.imageUrls = [...state.active.imageUrls, ...action.payload];
            state.isSaving = false;
        },
        deleteNoteByID: (state, action) => {

        },

    },
});

// Actions creators are generated for each case reducer function
export const { 
    addEmptyNote,
    createNewNote,
    deleteNoteByID,
    setActiveNote,
    setNotes,
    setSavingNote,
    setPhotoActiveNote,
    updateNote,
} = journalSlice.actions;





// boolean flag > saber si estoy guardando la nota o no ... evitar doble posteo, etc.
