import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { EcommerceContext } from "../context/Context";
import { createUserWithEmailAndPassword } from "firebase/auth";
import useForm from "../hooks/useForm";
import { Button, ContainerLogin, Input, MessageError } from "./styled";

export const RegisterUser = () => {
    
    const navigate=useNavigate()

    const [form, setForm] = useForm({ email: "", password: "", repassword: "" });
    const [userMsg, setUserMsg] = useState({type:"sucess", msg: "" })
    const {auth}=useContext(EcommerceContext)
    

    function checkError() {
        let result = true
        if (form.password.length < 6) {
            setUserMsg({
                ...userMsg,
                type: "error",
                msg: "as senhas devem ter no mínimo 6 caracteres!"
            })
            result = false
        }
        if (form.password !== form.repassword) {
            setUserMsg({
                ...userMsg,
                type: "error",
                msg: "as senhas não são iguais!"
            })
            result = false
        }

        return result

    }
    const handleClick = (event) => {
        event.preventDefault();

        //verificações
        if (!checkError()) {
            return
        }

        const { email, password } = form

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                // const user = userCredential.user;
                setUserMsg({
                    ...userMsg,
                    type: "sucess",
                    msg: "conta cadastrada com sucesso!"
                })                
                navigate("/")
                // ...
            })
            .catch((error) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;
                console.log(error)
                setUserMsg({
                    ...userMsg,
                    type: "error",
                    msg: "Conta já cadastrada!"
                })
                // ..
            });

    };

    return (
        <ContainerLogin >
            <form onSubmit={handleClick} onClick={()=>{
                        setUserMsg({
                            ...userMsg,
                            type: "",
                            msg: ""
                        })
                    }}>
                <label>
                    Digite seu E-mail
                </label>
                <Input
                    name="email"
                    value={form.email}
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    title="veja se digitou tudo corretamente"
                    onChange={setForm}
                    type="email"
                    placeholder="E-mail"
                    required                   
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
                <label>
                    Repita sua senha
                </label>
                <Input
                    name="repassword"
                    value={form.repassword}
                    onChange={setForm}
                    type="password"
                    placeholder="repita a senha"
                />
                <Button>Criar conta</Button>
                <Button onClick={()=>navigate("/")}>Já tenho conta!</Button>
            </form>
            <MessageError status={userMsg.type}>
                <span>{userMsg.msg ? userMsg.msg : " "}</span>
            </MessageError>
        </ContainerLogin>
    );
};
