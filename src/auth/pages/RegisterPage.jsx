import { useDispatch, useSelector } from 'react-redux';
import { useMemo, useState } from 'react';

import {Link as ReactRouterLink} from 'react-router-dom';
import { Link, Button, Grid, TextField, Typography, Alert } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from '../../hooks';
import { startRegisterUserEmailPassword } from '../../store/auth';


const formData = {
  email: '',
  displayName: '',
  password: ''
}

const formValidation = {
  email: [ (value) => value.includes('@'), 'The email is not valid' ],
  displayName: [ (value) => value.length >= 1, 'The name is required' ],
  password: [ (value) => value.length >= 6, 'The password is not valid' ],
}  // si alguna de estas funciones no se cumple NO es valido el formulario... objeto cuyas props son arreglos.. con pares de valores (tupla): funcion a evaluar y mensaje de error

export const RegisterPage = () => {

  const [formSubmitted, setformSubmitted] = useState(false);
  
  const { status, errorMessage } = useSelector( state => state.auth );
  const dispatch = useDispatch();

  const { displayName, email, password, formState, onInputChange,
          displayNameValid, emailValid, passwordValid, isFormValidforSubmit,} = useForm( formData, formValidation );

  const isCheckingAuth = useMemo(() => status === 'checking', [status]);  // memorizar el valor del status... para evitar recalcular en las renderizaciones

  const onFormSubmit = (event) => {
    event.preventDefault();
    setformSubmitted(true);
    if (!isFormValidforSubmit) return;
    dispatch( startRegisterUserEmailPassword( formState ) );
  }

  return (
    <AuthLayout title='Register'>
      <form action="" onSubmit={onFormSubmit} className='animate__animated animate__zoomIn animate__faster'>
          <Grid container>
            <Grid item xs={12} sx={{mt: 2}} >
              <TextField
                label="name"
                type="text"
                placeholder="John Snow"
                fullWidth
                name='displayName'
                value={displayName}
                onChange={onInputChange}
                error={!!displayNameValid && formSubmitted}
                helperText={(!!displayNameValid && formSubmitted) && displayNameValid}
              />
              {/* validaciones de form en base a materialUI */}
            </Grid>
            <Grid item xs={12} sx={{mt: 2}} >
              <TextField
                label="email"
                type="email"
                placeholder="email@google.com"
                fullWidth
                name='email'
                value={email}
                onChange={onInputChange}
                error={!!emailValid && formSubmitted}
                helperText={(!!emailValid && formSubmitted) && emailValid}
              />
            </Grid>
            <Grid item xs={12} sx={{mt: 2}}  >
              <TextField
                label="password"
                type="password"
                placeholder="password"
                fullWidth
                name='password'
                value={password}
                onChange={onInputChange}
                error={!!passwordValid && formSubmitted}
                helperText={(!!passwordValid && formSubmitted) && passwordValid}
              />
            </Grid>

            <Grid container spacing={2} sx={{ mb:2, mt:2, justifyContent:'center'}}>
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
                  variant='contained' 
                  fullWidth
                  type='submit'
                  onClick={onFormSubmit}
                  disabled={isCheckingAuth}
                >
                  Register
                </Button>
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
