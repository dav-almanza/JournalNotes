import { useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux"

import { SaveOutlined, UploadOutlined } from "@mui/icons-material"
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material"
import { ImageGalleryList } from "./ImageGallery"
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.css';

import { useForm } from '../../hooks';
import { setActiveNote, updateNote } from "../../store/journal/journalSlice";
import { startSavingNote, startUploadingFiles } from "../../store/journal/thunks";


export const NoteView = () => {

    // HOOKS
   const dispatch = useDispatch();
   const { active:activeNote, messageSaved, isSaving} = useSelector(state => state.journal);
   
   const { body, title, date, formState, onInputChange } = useForm( activeNote );
   
   const dateString = useMemo(() => {
        const newDate = new Date( date );
        return newDate.toUTCString();  // Returns a date converted to a string using UTC.
    },[date]);

    const fileInputRef = useRef();

    useEffect(() => {
      dispatch( setActiveNote(formState) );
    }, [formState])

    useEffect(() => {
      if (messageSaved.length > 0) {
        Swal.fire('Nota actualizada!', messageSaved, 'success');
      }
    }, [messageSaved])
   

    // FUNCTIONS 
    const onSaveNote = () => {
        dispatch( startSavingNote() );
        dispatch( updateNote(formState) );
    }

    const onFileInputChange = ({ target }) => {
        if(target.files === 0) return;
        dispatch( startUploadingFiles(target.files) );
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
            <input
                ref={fileInputRef}
                type="file"
                multiple
                onChange={ onFileInputChange }
                style={{ display: 'none' }}
            />
            {/* Simulate the "CLICK" */}
            <IconButton 
                color="primary" 
                disabled={isSaving}
                onClick={ () => fileInputRef.current.click() }
            >
                <UploadOutlined/>
            </IconButton>

            <Button 
                color="primary" 
                sx={{ padding:2 }}
                onClick={onSaveNote}
                disabled={isSaving}
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
