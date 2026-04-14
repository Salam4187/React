import { useState ,type MouseEvent} from "react";

function Login(){
    
    function LoginUser(e:MouseEvent<HTMLButtonElement>){
        e.preventDefault();

        if(userName && password){
        
setMessage("")
        }else{
            setMessage("enter the creds");
        }
    }

    const [userName,setUserName] =useState("");
    const [password,setPassword] =useState("");
    const [message,setMessage]=useState("");



    return (
      <div>
       {message?<div className="alert alert-warning"> {message} </div>:null}
        <h4>Login</h4>
<form>
<div className="form-group">
    <label> UserName</label>
    <input  type='text'  name="username" className="form-control" placeholder="User name"
    value={userName} onChange={e=>setUserName(e.target.value)} autoFocus
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