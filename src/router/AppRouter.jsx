import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { JournalRoutes } from "../journal/routes/JournalRoutes"

export const AppRouter = () => {
  return (
    <Routes>

        {/* Login y registro */}
       <Route path="/auth/*" element={<AuthRoutes />} />   
        
       {/* Journal App */}
       <Route path="/*" element={<JournalRoutes />} /> 

    </Routes>
  )
}
 
// cualquier path que entre por /auth: "/auth/*" va a mostrar o llevarnos a <AuthRoutes/>
// y 'cualquier otra ruta entra al Journal...