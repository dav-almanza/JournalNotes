import { Navigate, Route, Routes } from "react-router-dom"

import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { JournalRoutes } from "../journal/routes/JournalRoutes"
import { CheckingAuth } from "../ui"

import { useCheckingAuth } from "../hooks"

export const AppRouter = () => {

  const status = useCheckingAuth();
  if ( status ==='checking' ) { return <CheckingAuth /> }

  return (
    <Routes>
      {/* Tipo de proteccion de rutas privadas/publicas */}
      { 
        (status === 'authenticated') 
        ? <Route path="/*" element={<JournalRoutes />} /> 
        : <Route path="/auth/*" element={<AuthRoutes />} />   
      }
      {/* Ruta por defecto: cualquier otra ruta que se ponga entrara aqui */}
      {/* solo existe esta ruta si el user NO esta autenticado */}
      <Route path='/*' element={ <Navigate to='/auth/login' /> } />  
     
     
      {/* Login y registro */}
      {/* <Route path="/auth/*" element={<AuthRoutes />} />    */}
      {/* Journal App */}
      {/* <Route path="/*" element={<JournalRoutes />} />  */}
    </Routes>
  )
}
 






// cualquier path que entre por /auth: "/auth/*" va a mostrar o llevarnos a <AuthRoutes/>
// y 'cualquier otra ruta entra al Journal...

// si " status" es checking no generara las rutas ... porque CheckingAuth esta antes... esto luego ayuda pora la determinacion de rutas privadas y publicas.  

// onAuthStateChanged > observable... una funcion que esta constantemente emitiendo valores. Se dispara cada vez que el estado de la autenticacion cambia.