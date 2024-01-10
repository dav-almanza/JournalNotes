import { createSlice } from "@reduxjs/toolkit"

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: true,
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
        addEmptyNote: (state,action) => {

        },
        setNotes: (state, action) => {

        },
        setActiveNote: (state, action) => {
            
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
    setNotes,
    setActiveNote,
    setSaving,
    updateNote,
    deleteNoteByID,
} = journalSlice.actions;





// boolean flag > saber si estoy guardando la nota o no ... evitar doble posteo, etc.
