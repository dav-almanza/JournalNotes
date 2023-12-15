import { AddOutlined } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"

export const JournalHomePage = () => {
  return (
    <JournalLayout>
      {/* <Typography variant="h1">JournalHomeyPage</Typography> */}
      {/* <MailOutline/> */}
      
      {/* <NothingSelectedView/>  */}
      <NoteView/>
      <IconButton
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
