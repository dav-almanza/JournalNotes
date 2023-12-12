import { Navigate, Route, Routes } from 'react-router-dom'
import { JournalHomePage } from '../pages/JournalHomePage'

export const JournalRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<JournalHomePage/>} />
        <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  )
}
