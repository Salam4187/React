"use client"

import { useEffect, useRef, useState, type MouseEvent } from "react";
import axios from "axios";
import { useRouter } from "next/navigation"
import { useDispatch } from "react-redux";
import { useTitle } from "@/hooks/useTitle";

function Login() {


    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const userNameInputRef = useRef<HTMLInputElement>(null);
    const router = useRouter();
    const dispatch=useDispatch();
    useTitle("Login");

    useEffect(() => {
        console.log("login comp mounteed");
        //userNameInputRef.current.focus();
        return () => {
            console.log("login page unmounted")
        }
    }, []);

    async function LoginUser(e: MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        //userNameInputRef.current.focus();
        if (userName && password) {

            const url = 'http://localhost:9000/login';
            try {
                const response = await axios.post(url, { name: userName, password: password });
                console.log("response-->", response);

                dispatch({type:"login",payload:{
                isAuthenticated: true,
                userName:userName,
                accessToken: response.data.accessToken,
                refreshToken:response.data.refreshToken
            }})
            router.push("/")
            setMessage("")
                
                
            } catch (error) {
                console.log("failed", error)
                dispatch({type:"logout"});
                setMessage("Please enter valid creds");
            }
        
        } else {
            setMessage("enter the creds");
        }
    }


    return (
        <div>
            {message ? <div className="alert alert-warning"> {message} </div> : null}
            <h4>Login</h4>
            <form>
                <div className="form-group">
                    <label> UserName</label>
                    <input type='text' name="username" className="form-control" placeholder="User name"
                        value={userName} onChange={e => setUserName(e.target.value)} autoFocus
                        ref={userNameInputRef}
                    ></input> <br />

                    <label> Password</label>
                    <input type='password' name="password" className="form-control" placeholder=" Password"
                        value={password} onChange={e => setPassword(e.target.value)} autoFocus
                    ></input> <br />


                </div>
                <button className="btn btn-success" onClick={LoginUser}>Login</button>
            </form>

        </div>
    )

}
export default Login;