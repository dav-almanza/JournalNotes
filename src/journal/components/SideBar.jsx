import { useSelector } from "react-redux"

import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"

export const SideBar = ({drawerWidth = 280}) => {

    const {displayName} = useSelector( state => state.auth )

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
                { 
                    ['January', 'February', 'March', 'April'].map( text => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot/>
                                </ListItemIcon>
                                <Grid container direction={'column'}>
                                    <ListItemText primary={text} />
                                    <ListItemText secondary={'Lorem dssd dsjnjkd'} />
                                </Grid>
                            </ListItemButton>
                         </ListItem>   
                    ))
                }
            </List>

        </Drawer>

    </Box>
  )
}

// ModalProps={{ keepMounted }}
// 