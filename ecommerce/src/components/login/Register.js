import useForm from "../hooks/useForm";
import { ContainerLogin, Input, MessageError } from "./styled";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToLogin, goToOrder } from "../router/coordinator";


export const RegisterUser = () => {
    const [form, setForm] = useForm({ email: "", password: "", repassword: "" });
    const [userMsg, setUserMsg] = useState({type:"sucess", msg: "" })
    const navigate=useNavigate()

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

        const auth = getAuth();
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
                goToOrder(navigate)
                // ...
            })
            .catch((error) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;
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
                <button>Criar conta</button>
                <button onClick={()=>goToLogin(navigate)}>Já tenho conta!</button>
            </form>
            <MessageError status={userMsg.type}>
                <span>{userMsg.msg ? userMsg.msg : " "}</span>
            </MessageError>
        </ContainerLogin>
    );
};
