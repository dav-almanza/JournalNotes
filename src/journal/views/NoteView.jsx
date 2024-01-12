import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux"

import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGalleryList } from "./ImageGallery"

import { useForm } from '../../hooks';
import { setActiveNote, updateNote } from "../../store/journal/journalSlice";
import { startSavingNote } from "../../store/journal/thunks";


export const NoteView = () => {

    // HOOKS
   const dispatch = useDispatch();
   const { active:activeNote } = useSelector(state => state.journal);

   const dateString = useMemo(() => {
        const newDate = new Date( date );
        return newDate.toUTCString();  // Returns a date converted to a string using UTC.
    },[date]);

    useEffect(() => {
      dispatch( setActiveNote(formState) );
    }, [formState])
   
    const { body, title, date, formState, onInputChange } = useForm( activeNote );

    // FUNCTIONS 
    const onSaveNote = () => {
        dispatch( startSavingNote() );
        dispatch( updateNote(formState) );
    }


  return (
    <Grid container 
        alignItems={'center'} 
        justifyContent={'space-between'} 
        direction={'row'} 
        sx={{ mb:1 }}
    >
        <Grid item>
            <Typography fontSize={39} fontWeight={'light'}>
                {/* { String(new Date()).slice(0,28)} */}
                { dateString }
            </Typography>
        </Grid>
        <Grid item>
            <Button 
                color="primary" 
                sx={{ padding:2 }}
                onClick={onSaveNote}
            > 
                <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                Save
            </Button>
        </Grid>
        <Grid container>
            <TextField 
                type="text" 
                variant="filled" 
                fullWidth
                placeholder="Enter a title"
                label="title"
                name='title'
                value={title}
                onChange={onInputChange}
                sx={{ border:'none', mb: 1 }}
            />
            <TextField 
                type="text" 
                variant="filled" 
                fullWidth
                multiline
                minRows={5}
                placeholder="What's happened today?"
                label="note..."
                name='body'
                value={body}
                onChange={onInputChange}
            />
            <ImageGalleryList/>
        </Grid>
    </Grid>
  )
}
