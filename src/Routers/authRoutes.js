import { Navigate,useLocation } from 'react-router-dom'
import { useAuth } from '../context/authContext'


function AuthRoutes({ children }) {
    const { authToken } = useAuth();
    const location = useLocation()
    return authToken ? <>{children}</> : <Navigate to={'/auth/login'} state={{ from: location }}/>
}

export default AuthRoutes
