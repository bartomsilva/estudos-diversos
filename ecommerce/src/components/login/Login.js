import { useState, useContext, useEffect } from "react";
import { goToRegister } from "../router/coordinator";
import useForm from "../hooks/useForm";
import { ContainerLogin, Input, MessageError } from "./styled";
import { getAuth, signInWithEmailAndPassword, setPersistence, browserSessionPersistence, inMemoryPersistence } from "firebase/auth";
import { EcommerceContext } from '../context/Context'
import { useNavigate } from "react-router-dom";

export const UserLogin = () => {
    const [form, setForm] = useForm({ email: "", password: "" });
    const [userMsg, setUserMsg] = useState({ type: "sucess", msg: "" })

    const navigate = useNavigate()
    const { loading, setLoading } = useContext(EcommerceContext)

    const auth = getAuth();
    const user = auth.currentUser;


    useEffect(() => {
        if (!loading && localStorage.getItem("token") !== null) {

            navigate("/order")
        }
    }, [loading, navigate])

    function handleClick(event) {
        event.preventDefault();
        const { email, password } = form
        // signInWithEmailAndPassword(auth, email, password)
        //     .then((userCredential) => {
        //         // Signed in
        //         const user = userCredential.user;
        //         // ...                
        //         setLoading(true)
        //         setUserMsg({
        //             ...userMsg,
        //             type: "sucess",
        //             msg: "bem vindo!"
        //         })
        //         setTimeout(() => {
        //             localStorage.setItem("token", "token")
        //             setLoading(false)
        //         }, 2000)              
        //     })
        //     .catch((error) => {
        //         setUserMsg({
        //             ...userMsg,
        //             type: "error",
        //             msg: "não foi possível efetuar o login!"
        //         })
        //     });

        setPersistence(auth, browserSessionPersistence)
            .then(() => {
                setLoading(true)
                setUserMsg({
                    ...userMsg,
                    type: "sucess",
                    msg: "bem vindo!"
                })
                setTimeout(() => {
                    localStorage.setItem("token", "token")
                    setLoading(false)
                }, 2000)

                return signInWithEmailAndPassword(auth, email, password);
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
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
                <button>Faça Login</button>
                <button onClick={() => goToRegister(navigate)}>Efeturar cadastro</button>
            </form>
            <MessageError status={userMsg.type}>
                <span>{userMsg.msg ? userMsg.msg : " "}</span>
                <span>{user ? user.email : "não logado"}</span>
            </MessageError>
        </ContainerLogin>
    );
};
