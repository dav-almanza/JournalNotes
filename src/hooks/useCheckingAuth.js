import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../firebase/config';

import { login, logout } from '../store/auth';
import { startLoadingNotes } from '../store/journal/thunks';


export const useCheckingAuth = () => {
    
  const {status} = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, async(user) => {
      if (!user) return dispatch( logout() );

      const {uid, email, dispalyName, photoURL: photourl} = user;
      dispatch( login({uid, email, dispalyName, photourl}) );
      dispatch( startLoadingNotes() );
    });  //cuando el estado de la autenticacion cambia... pendiente a eso
  }, [])

  return status
}
