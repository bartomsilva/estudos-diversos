import { useNavigate } from "react-router-dom"
import userConected from "../hooks/UserStatus";
import { Button, ContainerLogin } from "../login/styled";
import { useContext } from "react";
import { EcommerceContext } from "../context/Context";
import { Fragment } from "../fragment";

export function Jobs() {

    const navigate = useNavigate()
    const {userId, userEmail}=useContext(EcommerceContext)
        
    return (
        <ContainerLogin>
            {/* <h1>jobs</h1>
            <h4>{userId}</h4>
            <h4>{userEmail}</h4> */}
            <Button onClick={() => navigate('/order')}>votar</Button>
            {Fragment()}
        </ContainerLogin>)

}