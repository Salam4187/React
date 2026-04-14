import { useEffect, useRef, useState ,type MouseEvent} from "react";

function Login(){

    useEffect(()=>{
        console.log("login comp mounteed");
        userNameInputRef.current.focus();


        return ()=>{
            console.log("login page unmounted")
        }
    },[]);
    
    function LoginUser(e:MouseEvent<HTMLButtonElement>){
        e.preventDefault();
        userNameInputRef.current.focus();

        if(userName && password){
        
setMessage("")
        }else{
            setMessage("enter the creds");
        }
    }

    const [userName,setUserName] =useState("");
    const [password,setPassword] =useState("");
    const [message,setMessage]=useState("");
    const userNameInputRef=useRef<HTMLInputElement>(null);



    return (
      <div>
       {message?<div className="alert alert-warning"> {message} </div>:null}
        <h4>Login</h4>
<form>
<div className="form-group">
    <label> UserName</label>
    <input  type='text'  name="username" className="form-control" placeholder="User name"
    value={userName} onChange={e=>setUserName(e.target.value)} autoFocus
    ref={userNameInputRef}
    ></input> <br/>

       <label> Password</label>
    <input  type='password' name="password" className="form-control" placeholder=" Password"
    value={password} onChange={e=>setPassword(e.target.value)} autoFocus
    ></input> <br/>
   

</div>
 <button className="btn btn-success" onClick={LoginUser}>Login</button>
</form>

      </div>
    )
    
}
export default Login;