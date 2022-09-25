import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {toast} from "react-toastify";
import Sidebar from "../components/Sidebar";

function AddUserToGroup(){
    const cid=sessionStorage.getItem("id")
    const [data,setData]=useState()
    const [search,setsearch]=useState()
    const [users,setusers]=useState([])
    const location=useLocation()
    const groupid=location.state

    const loaddata=()=>{
        axios.get('http://localhost:8080/api/groups/'+groupid)
        .then(resp=>{
            setData(resp.data)
        })
    }

    const makeMember=uid=>{
        axios.post('http://localhost:8080/api/groups/users',{group:groupid,user:uid})
        .then(resp=>{
            toast.success('Member added')
            loaddata()
        })
        .catch(err=>{
            console.log(err.response)
            toast.error(err.response.data.message)
        })
    }

    const deleteUser=id=>{
        axios.delete('http://localhost:8080/api/groups/users/'+id)
        .then(resp=>{
            toast.success('Member deleted')
            loaddata()
        })
        .catch(err=>{
            toast.error('Failed to delete')
        })
    }

    const searchUsers=()=>{
        if(search===undefined){
            return
        }
        axios.get('http://localhost:8080/api/users/search?search='+search)
        .then(resp=>{
            setusers(resp.data)
        })
    }

    useEffect(()=>{
        loaddata()
    },[])

    return (
        <>  
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-2 bg-transparent p-0 border-right border-primary" style={{height:"calc(100vh - 80px)"}}>
                    <Sidebar />
                </div>
                               
                <div className="col-sm-6 p-3">
                    <div className="card shadow">
                        <div className="card-header">
                            <h6>Group: {data?.name} ({data?.descr})</h6>
                        </div>
                        <div className="card-body">                            
                           <h5>Group Users</h5>
                           <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>User Name</th>
                                        <th>Phone</th>
                                        <th>Email</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data?.groupUsers?.map(x=>(
                                        <tr>
                                            <td>{x.user.fname} {x.user.lname}</td>
                                            <td>{x.user.contact}</td>
                                            <td>{x.user.email}</td>
                                            <td><button onClick={e=>deleteUser(x.id)} className="btn btn-sm btn-danger">Delete</button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>                                              
                        </div>
                    </div>
                </div>   

                <div className="col-sm-4 p-3">
                    <div className="card shadow">
                        <div className="card-header">
                            <h6>Search User</h6>
                        </div>
                        <div className="card-body">
                            
                            <div className="form-inline">
                                <input type="search" style={{width:"80%"}} placeholder="Enter name to search" 
                                onChange={e=>setsearch(e.target.value)} className="form-control form-control-sm" />
                                <button onClick={e=>searchUsers()} className="btn btn-success btn-sm ml-2">Search</button>
                            </div>
                            {users.length>0 ? (
                                <table className="table table-bordered table-sm">
                                <thead>
                                    <tr>
                                        <th>User Details</th>                                        
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users?.filter(x=>x.uid!=cid).map(x=>(
                                        <tr>
                                            <td>{x.fname} {x.lname}<br/>
                                            Phone: {x.contact}<br/>
                                            Email: {x.email}</td>
                                            <td><button onClick={e=>makeMember(x.uid)} className="btn btn-primary btn-sm">Select</button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table> 
                            ):null}
                        </div>
                    </div>
                </div>               
            </div>
        </div>
        </>
    )}

export default AddUserToGroup;