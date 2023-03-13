import {Routes, Route}  from 'react-router-dom'
import { UserLogin } from '../login/Login'
import { RegisterUser } from '../login/Register'
import { Order } from '../order/Orders'

export default function Router(){

    return(
        <Routes>
            <Route index element={<UserLogin/>}/>
            <Route path="/register" element={<RegisterUser/>}/>
            <Route path="/order" element={<Order/>} />
        </Routes>
    )
}