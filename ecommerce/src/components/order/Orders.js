import { getAuth, onAuthStateChanged } from "firebase/auth";
import { goToLogin } from "../router/coordinator";
import { useNavigate } from "react-router-dom";
import { useState } from 'react'

export function Order() {

    const [uId,setUId]=useState("")

    const navigate = useNavigate()
    let uid=null
    const auth = getAuth();
    
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            setUId(user.uid);
            // ...
        } else {
            goToLogin(navigate)         
          
        }
    });

    return (
        <>
            <p>user id {uId}</p>
            <p>com foco é fé</p>
            <h1>e Deus acima de tudo!</h1>
            <h1>com dedicação e esforço alcançamos o sucesso!</h1>
        </>
    )
}