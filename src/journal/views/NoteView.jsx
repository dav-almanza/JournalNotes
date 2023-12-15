import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGalleryList } from "./ImageGallery"

export const NoteView = () => {
  return (
    <Grid container 
        alignItems={'center'} 
        justifyContent={'space-between'} 
        direction={'row'} 
        sx={{ mb:1 }}
    >
        <Grid item>
            <Typography fontSize={39} fontWeight={'light'}>
                { String(new Date()).slice(0,28)}
            </Typography>
        </Grid>
        <Grid item>
            <Button color="primary" sx={{ padding:2 }}> 
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
            />
            <ImageGalleryList/>
        </Grid>
    </Grid>
  )
}
