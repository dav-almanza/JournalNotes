import { useDispatch, useSelector } from "react-redux"

import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { useMemo } from "react";
import { setActiveNote } from "../../store/journal/journalSlice";


export const SideBar = ({drawerWidth = 280}) => {
    
    // HOOKS
    const { displayName } = useSelector( state => state.auth );
    const { notes }       = useSelector( state => state.journal );

  return (
    <Box
        component={'nav'}
        sx={{ width: { sm: drawerWidth}, flexShrink: {sm: 0} }}
    >
        <Drawer
            variant="permanent" // temporary
            open
            sx={{
                display: { xs: 'none', sm: 'block' },
                '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth}
            }}
        >
            <Toolbar>
                <Typography variant="h6" noWrap component={'div'} >
                   { displayName }
                </Typography>
            </Toolbar>

            <Divider/>

            <List>
                { notes.map( note => (
                    <SideBarItem key={note.id} {...note} />    
                )) }
            </List>
        </Drawer>
    </Box>
  )
}

// ModalProps={{ keepMounted }}
// 

export const SideBarItem = ({ title = '', body, id, date, imageUrls = [] }) => {

    const dispatch = useDispatch();

    const newTitle = useMemo( () => {
        return title.length > 17
                ? title.substring(0,17) + '...'
                : title;
    }, [title]);

    return (
        <ListItem 
            disablePadding
            onClick={ () => dispatch( setActiveNote({ title, body, id, date, imageUrls }) )}
        >
            <ListItemButton>
                <ListItemIcon>
                    <TurnedInNot/>
                </ListItemIcon>
                <Grid container direction={'column'}>
                    <ListItemText primary={ newTitle } />
                    <ListItemText secondary={ body } />
                </Grid>
            </ListItemButton>
        </ListItem>   
    )
}