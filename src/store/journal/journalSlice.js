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

        },
        setActiveNote: (state, action) => {
            state.active = action.payload;
        },
        setSavingNote: (state, action) => {

        },
        updateNote: (state, action) => {

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
    setSaving,
    updateNote,
} = journalSlice.actions;





// boolean flag > saber si estoy guardando la nota o no ... evitar doble posteo, etc.
