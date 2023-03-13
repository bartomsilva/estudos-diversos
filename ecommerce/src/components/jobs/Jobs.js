import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import UserConected from "../hooks/UserStatus";


export function Jobs(){

    useEffect(()=>{

        console.log(UserConected())

    })

    const navigate=useNavigate()
    return<>
    <h1>jobs</h1>
    <button onClick={()=>navigate('/order')}>votar para order</button>
    {

    }

    </>

}