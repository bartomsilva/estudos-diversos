import { Routes, Route, Navigate } from 'react-router-dom'
import { UserLogin } from '../login/Login'
import { RegisterUser } from '../login/Register'
import { Order } from '../order/Orders'
import { Jobs } from '../jobs/Jobs'
import { getAuth } from "firebase/auth";
// import UserConected from '../hooks/UserStatus';

export default function Router() {

    const auth = getAuth();

    const PrivateRoute = ({ children, redirectTo }) => {
        const isAuthenticated = localStorage.getItem('token') !==null
        return isAuthenticated ? children : <Navigate to={redirectTo} />
        // return isLogin ? children : <Navigate to={redirectTo}/>
    }

    return (
        <Routes>
            <Route path="/order" element={<PrivateRoute redirectTo="/">
                <Order />
            </PrivateRoute>} />
            <Route path='/' element={<UserLogin />} />
            <Route path="/register" element={<RegisterUser />} />
            <Route path="/jobs" element={<Jobs />} />
        </Routes>
    )
}