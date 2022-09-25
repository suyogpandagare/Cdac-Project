import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import uservalidation from "../validations/uservalidation"

function RegisterPage(){
    const [user,setUser]=useState(null)
    const [selectedPhoto,setSelectedPhoto]=useState(null)
    const [file,setFile]=useState(null)
    const [errors,setErrors]=useState({})    
    const [emailerr,setEmailErr]=useState(null)
    const navigate=useNavigate()
 
    const handleInput=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    const handleFileInput=(e)=>{
        setSelectedPhoto(e.target.files[0])
        setFile(URL.createObjectURL(e.target.files[0]))    
        handleInput(e)    
    }

    const handleVerify = e=>{
        axios.get("http://localhost:8080/api/users/verify?email="+e.target.value)
        .then(resp=>{
            console.log("response",resp.data)
            if(!resp.data){
                setEmailErr("User Id already exists")
            }else{
                setEmailErr(null)
            }
            
        })
        .catch(err=>{
            console.log(err)
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        setErrors(uservalidation(user)) 
        console.log("Error count",Object.keys(errors).length);
        console.log(selectedPhoto)
        if(Object.keys(errors).length===0 && selectedPhoto){
            console.log(user)
            const formData=new FormData()
            formData.append("profilepic",selectedPhoto)
            formData.append("fname",user.fname)
            formData.append("lname",user.lname)
            formData.append("gender",user.gender)
            formData.append("address",user.address)
            formData.append("gender",user.gender)
            formData.append("contact",user.phone)
            formData.append("email",user.email)
            formData.append("userid",user.userid)
            formData.append("upiId",user.upiId)
            formData.append("password",user.pwd)

            console.log(user)
            axios.post("http://localhost:8080/api/users",formData)
            .then(resp=>{
                console.log(resp)
                setUser(null)
                setSelectedPhoto(null)
                e.target.reset()
                toast.success("User registered successfully")
                navigate("/")
            })
            .catch(error=>toast.error("Error",error))            
        }    
    }

    useEffect(()=>{        
        console.log(errors)  
    },[])
    return(
        <>        
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-9 mx-auto mt-3">
            <div className="card shadow mx-auto mt-3">
            <div className="card-body">
            <h4 className="text-center p-2">
                Registration Form
            </h4>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-sm-2 offset-1">
                        <h5 className="p-2">Profile Photo</h5>
                        {selectedPhoto ? <img className="img-thumbnail" src={file} alt="Photo" /> : 
                        <img className="img-thumbnail" src={'images/image.png'} alt="Photo" />} 
                        <input type="file" value={user?.profilepic} name="profilepic" onChange={handleFileInput} className="form-control-file" accept=".jpg,.png" />
                        {errors?.profilepic && <small className="text-danger float-right">{errors?.profilepic}</small>}                        
                    </div>
                    <div className="col-sm-6 offset-1">
                        <div className="form-group form-row">
                            <label className="col-sm-4 form-control-label">First Name</label>
                            <div className="col-sm-8">
                                <input type="text" name="fname" value={user?.fname} onChange={handleInput} className="form-control form-control-sm" />
                                {errors?.fname && <small className="text-danger float-right">{errors?.fname}</small>}                            
                            </div>
                            
                        </div>
                        <div className="form-group form-row">
                            <label className="col-sm-4 form-control-label">Last Name</label>
                            <div className="col-sm-8">
                                <input type="text" name="lname" value={user?.lname} onChange={handleInput} className="form-control form-control-sm" />
                                {errors?.lname && <small className="text-danger float-right">{errors?.lname}</small>}                            
                            </div>
                            
                        </div>
                        <div className="form-group form-row">
                            <label className="col-sm-4 form-control-label">Address</label>
                            <div className="col-sm-8">
                                <input type="text" name="address" value={user?.address} onChange={handleInput} className="form-control form-control-sm" />
                                {errors?.address && <small className="text-danger float-right">{errors?.address}</small>}
                            </div>                        
                        </div>
                        {/* <div className="form-group form-row">
                            <label className="col-sm-4 form-control-label">Gender</label>
                            <div className="col-sm-8">
                                <select name="gender" value={user?.gender} onChange={handleInput} className="form-control form-control-sm">
                                    <option value="">Select Gender</option>
                                    <option>Male</option>     
                                    <option>Female</option>     
                                </select> 
                                {errors?.gender && <small className="text-danger float-right">{errors?.gender}</small>}                      
                            </div>                        
                        </div> */}
                        <div className="form-group form-row">
                            <label className="col-sm-4 form-control-label">Email Id</label>
                            <div className="col-sm-8">
                                <input type="email" name="email" value={user?.email} onBlur={handleVerify} onChange={handleInput} className="form-control form-control-sm" />
                                {errors?.email && <small className="text-danger float-right">{errors?.email}</small>}
                                {emailerr && <small className="text-danger float-right">{emailerr}</small>}
                            </div>                         
                        </div>
                        <div className="form-group form-row">
                            <label className="col-sm-4 form-control-label">UPI Id</label>
                            <div className="col-sm-8">
                                <input type="text" name="upiId" value={user?.upiId} onChange={handleInput} className="form-control form-control-sm" />
                                {errors?.upiId && <small className="text-danger float-right">{errors?.upiId}</small>}
                            </div>
                            
                        </div>
                        <div className="form-group form-row">
                            <label className="col-sm-4 form-control-label">Phone</label>
                            <div className="col-sm-8">
                                <input type="text" maxLength="10" name="phone" value={user?.phone} onChange={handleInput} className="form-control form-control-sm" />
                                {errors?.phone && <small className="text-danger float-right">{errors?.phone}</small>}
                            </div>                            
                        </div>
                        <div className="form-group form-row">
                            <label className="col-sm-4 form-control-label">User Id</label>
                            <div className="col-sm-8">
                                <input type="text" name="userid" value={user?.userid} onBlur={handleVerify} onChange={handleInput} className="form-control form-control-sm" />
                                {errors?.userid && <small className="text-danger float-right">{errors?.userid}</small>}                                
                            </div>                         
                        </div>
                        <div className="form-group form-row">
                            <label className="col-sm-4 form-control-label">Password</label>
                            <div className="col-sm-8">
                                <input type="password" name="pwd" value={user?.pwd} onChange={handleInput} className="form-control form-control-sm" />
                                {errors?.pwd && <small className="text-danger float-right">{errors?.pwd}</small>}
                            </div>
                        </div>                        
                        <button className="btn btn-primary btn-sm float-right">Register Now</button>
                    </div>
                    </div>
                    </form>
                </div>
            </div>
            </div>
            </div>
            </div>
            </>
    )
}

export default RegisterPage;