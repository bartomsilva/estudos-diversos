import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export function Order() {

    const navigate = useNavigate()
    const auth = getAuth();
    let user = auth.currentUser;
    
    const logOff=()=>{
        auth.signOut()
        localStorage.removeItem('token')
        navigate("/")                   
    }
    

                 
    return (
        <>
            <p>{user?user.email :"não logado"}</p> 
            <p>com foco é fé</p>
            <h1>e Deus acima de tudo!</h1>
            <h1>com dedicação e esforço alcançamos o sucesso!</h1>
            <button onClick={()=>navigate("/jobs")}>Jobs</button>
            <button onClick={()=>logOff()}>Fazer Logoff</button>
        </>
    )
}