import { useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import {Link as ReactRouterLink} from 'react-router-dom';

import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Google } from "@mui/icons-material"
import { AuthLayout } from '../layout/AuthLayout';

import { useForm } from '../../hooks';
import { startGoogleSignIn, startLoginEmailPassword } from '../../store/auth';


export const LoginPage = () => {

  // HOOKS
  const {status, errorMessage} = useSelector( state => state.auth);
  const dispatch = useDispatch();

  const { email, password, formState, onInputChange } = useForm({
    email: '',
    password: '',
  });

  // const isAuthenticating = useMemo( () => status === 'checking', [status]);

  // FUNCTIONS
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch( startLoginEmailPassword( formState ) );
  }

  const onGoogleSignIn = () => {
    dispatch( startGoogleSignIn() );
  }

  return (
      <AuthLayout title='Login'>
        <form action="" onSubmit={onSubmit} className='animate__animated animate__fadeInUp animate__faster' >
          <Grid container>
            <Grid item xs={12} sx={{mt: 2}} >
              <TextField
                label="email"
                type="email"
                placeholder="email@google.com"
                fullWidth
                name="email"
                value={email}
                onChange={onInputChange}
              />
            </Grid>
            <Grid item xs={12} sx={{mt: 2}}  >
              <TextField
                label="password"
                type="password"
                placeholder="password"
                fullWidth
                name="password"
                value={password}
                onChange={onInputChange}
              />
            </Grid>

            <Grid container spacing={2} sx={{mb:2, mt:2}}>
              {/* Login Button */}
              <Grid 
                item  
                xs={12} 
                sm={6} 
                display={ !!errorMessage ? '' : 'none' }
              >
                <Alert severity='error'>
                  {errorMessage}
                </Alert>
              </Grid>
              
              <Grid item  xs={12} sm={6}>
                <Button 
                  type="submit"
                  variant="contained"
                  fullWidth
                  onSubmit={onSubmit} 
                  disabled={status==='checking'}
                >
                  Login
                </Button>
              </Grid>
              {/* Google Button */}
              <Grid item  xs={12} sm={6}>
                <Button 
                  variant='contained' 
                  fullWidth
                  onClick={onGoogleSignIn}
                  disabled={status==='checking'} 
                >
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
