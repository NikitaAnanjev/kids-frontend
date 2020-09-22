import React, {useState} from "react"
import {Link, useHistory} from "react-router-dom"
//styles
import {LoginForm} from "./loginStyles";

import {Logo} from "../../assets/svg/imageSvg";
import {LogoIcon} from "../Header/headerStyles";
import Button from "@material-ui/core/Button";
import {auth} from "./firebase";

const Login = () => {

// Login
    const history = useHistory()

    const [email, setEmail] = useState('')

    const [password, setPassword] = useState('')


    const login = (event) => {

        event.preventDefault()
        // login logic
        auth.signInWithEmailAndPassword(email, password).then((auth) => {
            // login and redirect to the home page

            history.push("/dashboard")
        }).catch((e) => alert(e.message))
    }

    const register = (event) => {

        event.preventDefault()
        // login logic
        auth.createUserWithEmailAndPassword(email, password).then(auth => {
            // create a user and log in

            history.push("/")

        }).catch((e) => alert(e.message))
    }


    return (
        <>
            <LoginForm>
                <Link to="/">

                    <LogoIcon className="logo-center"><Logo/></LogoIcon>
                </Link>
                <h1>Sign In</h1>
                <form>

                    <h5>Email</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email"/>

                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password"/>

                    <Button
                        onClick={login}
                        variant="contained"
                        color="primary"
                    > Sign In</Button>

                </form>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum eaque, facilis id odit quo rem!
                    Consectetur dolor, dolores nobis nulla officia quas recusandae repellat voluptas. Eum magni quis
                    quisquam ut!</p>

                <Button
                    onClick={register}
                    variant="outlined"
                    color="primary"
                    fullWidth={true}
                > Create New Account</Button>
            </LoginForm>
        </>
    )

}
export default Login
