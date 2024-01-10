import { useDispatch, useSelector } from "react-redux"

import { AddOutlined } from "@mui/icons-material"
import { IconButton } from "@mui/material"

import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"
import { startNewNote } from "../../store/journal/thunks"

export const JournalHomePage = () => {

  const { isSaving, active: activeNote } = useSelector( state => state.journal ); 
  const dispatch = useDispatch();

  const onNewNote = () => {
    dispatch( startNewNote() );  // se despacha la accion asincrona comprendida en el "thunks"
  }

  return (
    <JournalLayout>
      {/* <Typography variant="h1">JournalHomeyPage</Typography> */}
      {/* <MailOutline/> */}
      
      { !!activeNote
         ? <NoteView/>
         : <NothingSelectedView/> }
         
      <IconButton
        onClick={onNewNote}
        disabled={isSaving}
        size="large"
        sx={{ 
            color: 'white', 
            backgroundColor: 'error.main', 
            ":hover": { backgroundColor: 'error.main', opacity: .9 },
            position: 'fixed',
            right: 50, 
            bottom: 50, 
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  )
}
