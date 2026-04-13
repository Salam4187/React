function Login(){

    return (
      <div>
        
        <h4>Login</h4>
<form>
<div className="form-group">
    <label> UserName</label>
    <input  type='text'  name="username" className="form-control" placeholder="User name"></input> <br/>

       <label> Password</label>
    <input  type='password' name="password" className="form-control" placeholder=" Password"></input> <br/>

   

</div>
 <button className="btn btn-success">Login</button>
</form>

      </div>
    )
    
}
export default Login;