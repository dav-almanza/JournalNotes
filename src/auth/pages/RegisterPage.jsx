import {Link as ReactRouterLink} from 'react-router-dom';
import { Link, Button, Grid, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";


export const RegisterPage = () => {
  return (
    <AuthLayout title='Register'>
      <form action="">
          <Grid container>
            <Grid item xs={12} sx={{mt: 2}} >
              <TextField
                label="name"
                type="text"
                placeholder="Daviel Almanza"
                fullWidth
              />
            </Grid>
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

            <Grid container spacing={2} sx={{ mb:2, mt:2, justifyContent:'center'}}>
              <Grid item  xs={12} sm={6}>
                <Button variant='contained' fullWidth >Register</Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid container direction={'row'} justifyContent={'center'}>
            <Typography sx={ {mr: 2} }>Already have an account?</Typography>
            <Link component={ReactRouterLink} color="inherit" to={'/auth/login'} >
              Login
            </Link>
          </Grid>
        </form>
    </AuthLayout>
  )
}
