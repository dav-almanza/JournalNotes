import {Link as ReactRouterLink} from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Google } from "@mui/icons-material"
import { AuthLayout } from '../layout/AuthLayout';

export const LoginPage = () => {
  return (
      <AuthLayout title='Login'>
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
              <Grid container sx={{mt:2}} direction={'row'} justifyContent={'center'}>
                <Link component={ReactRouterLink} color="inherit" to={'/auth/register'} >
                  Create an account
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </AuthLayout>
  )
}


// los Grid  son algo asi como cajas ... por analogias con elementos HTML (modelo de cajas)
// Material UI funciona basado en "movil first" => prioridad a dispositivos moviles (teniendo en cuenta el size: "xs md..")
