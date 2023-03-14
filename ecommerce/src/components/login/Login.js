import { useState, useContext, useEffect } from "react";
import useForm from "../hooks/useForm";
import { Button, ContainerLogin, Input, MessageError } from "./styled";
import { signInWithEmailAndPassword } from "firebase/auth";
import { EcommerceContext } from '../context/Context'
import { useNavigate } from "react-router-dom";

export const UserLogin = () => {

    const navigate = useNavigate()

    const [form, setForm] = useForm({ email: "", password: "" });
    const [userMsg, setUserMsg] = useState({ type: "sucess", msg: "" })
    const { loading, setLoading, auth, userId, userEmail  } = useContext(EcommerceContext)

    useEffect(() => {
        if (localStorage.getItem("token") !== null && userId!==null) {
            navigate("/order")
        }
    }, [loading, navigate])

    function handleClick(event) {
        event.preventDefault();
        const { email, password } = form
        console.log("submit", email, password)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUserMsg({
                    ...userMsg,
                    type: "sucess",
                    msg: "bem vindo!"
                })
                // setTimeout(() => {
                    setLoading(!loading)
                    // setLoading(false)
                localStorage.setItem("token", "token")
                // }, 2000)
            })
            .catch((error) => {
                setUserMsg({
                    ...userMsg,
                    type: "error",
                    msg: "não foi possível efetuar o login!"
                })
            });
    };


    return (
        <ContainerLogin>
            <form onSubmit={handleClick} onClick={() => {
                setUserMsg({
                    ...userMsg,
                    type: "",
                    msg: ""
                })
            }}>
                <label>
                    Digite seu e-mail
                </label>
                <Input
                    name="email"
                    value={form.email}
                    // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    onChange={setForm}
                    type="email"
                    placeholder="e-mail"
                />
                <label>
                    Digite sua senha
                </label>
                <Input
                    name="password"
                    value={form.password}
                    onChange={setForm}
                    type="password"
                    placeholder="senha"
                />
                <Button>Login</Button>
                <Button onClick={() => navigate("/register")}>Efeturar cadastro</Button>
            </form>
            <MessageError status={userMsg.type}>
                <span>{userMsg.msg ? userMsg.msg : " "}</span> 
            </MessageError>
        </ContainerLogin>
    );
};
