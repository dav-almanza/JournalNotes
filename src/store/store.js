import { configureStore } from '@reduxjs/toolkit'
import { authenticationSlice } from './auth/authSlice'
import { journalSlice } from './journal/journalSlice'

export const store = configureStore({
  reducer: {
    auth: authenticationSlice.reducer,
    journal: journalSlice.reducer,
    
  },
})