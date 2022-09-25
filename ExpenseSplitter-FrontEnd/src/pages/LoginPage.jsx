import axios from "axios";
import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom";
import loginvalidation from "../validations/loginvalidation"
import { toast } from "react-toastify";

function LoginPage(){
    const dispatch=useDispatch()
    const navigate=useNavigate()
    // const [errmsg,setErrmsg]=useState(null)

    const [user,setUser]=useState()
    const [errors,setErrors]=useState({})

    const handleInput=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        setErrors(loginvalidation(user))   
        if(Object.keys(errors).length===0){
            console.log(user)
            axios.post("http://localhost:8080/api/users/validate",user)
            .then(resp=>{
                console.log(resp)
                sessionStorage.setItem("userid",resp.data.userid)
                sessionStorage.setItem("uname",resp.data.fname+" "+resp.data.lname)
                sessionStorage.setItem("id",resp.data.uid)  
                dispatch({type:'IsLoggedIn'})            
                navigate("/dashboard")
            })
            .catch(error=>{
                console.log("Error",error);                
                toast.error("Invalid username or password")
            })            
        }
    }

    return(
        <div className="login">
            <div className="container pt-4">
                <div className="row" style={{height:"90vh"}}>
                    <div className="col-sm-6 bg-primary text-white">
                    <h4 className="display-2 text-center" style={{marginTop:"200px"}}>Expense<br/> Splitter</h4>
                    </div>
                    <div className="col-sm-5 offset-1">
                        <form className="card shadow" style={{marginTop:"160px"}}  onSubmit={handleSubmit}>
                            <div className="card-header bg-white">
                                <h5>Welcome Back</h5>
                            </div>                             
                            <div className="card-body text-right">
                                <div className="form-group">
                                    <label>User Id</label>
                                    <input type="text" name="userid" required className="form-control" placeholder="User Id"  value={user?.userid} onChange={handleInput}/>
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" required className="form-control" name="pwd" placeholder="Password" value={user?.pwd} onChange={handleInput} />
                                </div>                                
                                <button style={{borderRaidus:"1.25rem !important",width:"120px"}} className="btn btn-primary float-right">Login</button>
                            </div>                            
                            <div className="card-footer text-right">
                                <Link to="/register">Create Account</Link>
                            </div>                        
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default LoginPage;