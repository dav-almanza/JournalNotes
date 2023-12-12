import {Link as ReactRouterLink} from 'react-router-dom';
import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
// import { Link } from "react-router-dom"

export const LoginPage = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={ { minHeight: '100vh', backgroundColor: 'primary.main', pt: 4} }

    >
      <Grid item
        className="box-shadow"
        xs={3}
        sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2 }}
      >
        <Typography variant="h5" sx={{mb: 1}} >Login</Typography>
        <form action="">
          <Grid container>
            <Grid item xs={12} sx={{mt: 2}} >
              <TextField
                label="email"
                type="email"
                placeholder="email@google.com"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sx={{mt: 2}}  >
              <TextField
                label="password"
                type="password"
                placeholder="password"
                fullWidth
              />
            </Grid>

            <Grid container spacing={2} sx={{mb:2, mt:2}}>
              <Grid item  xs={12} sm={6}>
                <Button variant='contained' fullWidth >Login</Button>
              </Grid>
              <Grid item  xs={12} sm={6}>
                <Button variant='contained' fullWidth >
                  <Google/>
                  <Typography sx={{ml:1}}>Google</Typography>
                </Button>
              </Grid>
              <Grid container direction={'row'} justifyContent={'end'}>
                <Link component={ReactRouterLink} color="inherit" to={'/auth/register'} >

                  Create an account
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  )
}


// los Grid  son algo asi como cajas ... por analogias con elementos HTML (modelo de cajas)
// Material UI funciona basado en "movil first" => prioridad a dispositivos moviles (teniendo en cuenta el size: "xs md..")
