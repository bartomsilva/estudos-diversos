import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { EcommerceContext } from "../context/Context";
import { Button, ContainerLogin } from "../login/styled";

export function Order() {

    const navigate = useNavigate()
    const {auth,userId,userEmail } = useContext(EcommerceContext)
        
    const logOff=()=>{
        auth.signOut()
        localStorage.removeItem('token')
        navigate("/")                   
    }
                     
    return (
        <ContainerLogin>
            <p>{userId}</p> 
            <p>{userEmail}</p> 
            <p>com foco é fé</p>
            <h2>e Deus acima de tudo!</h2>
            <p>com dedicação e esforço alcançamos o sucesso!</p>
            <Button onClick={()=>navigate("/jobs")}>Order</Button>
            <Button onClick={()=>logOff()}>Fazer Logoff</Button>
        </ContainerLogin>
    )
}