import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify";
import Sidebar from "../components/Sidebar";

function Groups(){
    const cid=sessionStorage.getItem("id")
    const [data,setData]=useState()
    const navigate=useNavigate()
    const [group,setgroup]=useState({
        name:'',
        descr:'',
        createdBy:cid
    })

    const loadData=()=>{
        axios.get('http://localhost:8080/api/groups/mygroups/'+cid)
        .then(resp=>setData(resp.data))
        .catch(err=>toast.error('Failed'))
    }

    const handleInput=(e)=>{
        setgroup({...group,[e.target.name]:e.target.value})
    }

    const handleSubmit=e=>{
        e.preventDefault()
        console.log(group)
        if(group.name==='' || group.descr===''){
            toast.error('Please fill all required fields')
            return
        }
        group.createdBy=cid
        axios.post('http://localhost:8080/api/groups',group)
        .then(resp=>{
            toast.success(resp.data.data)
            setgroup({name:'',descr:''})
            loadData()
        })
        .catch(err=>{
            toast.error('Failed saving')
        })
    }

    useEffect(()=>{
        loadData()
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
                        <div className="card-body">
                            <h4>Groups</h4>
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Group Name</th>
                                        <th>Description</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data?.map(x=>(
                                    <tr key={x.id}>
                                        <td>{x.name}</td>
                                        <td>{x.descr}</td>
                                        <td>
                                            <button onClick={e=>navigate('/adduser',{state:x.id})} className="btn btn-primary btn-sm">Users</button>
                                            <button onClick={e=>navigate('/expenses',{state:x.id})} className="btn btn-success btn-sm ml-2">Expenses</button>
                                            <button onClick={e=>navigate('/settle',{state:x.id})} className="btn btn-dark btn-sm ml-2">Settle Bill</button>
                                        </td>
                                    </tr>
                                    ))}
                                </tbody>
                            </table>                                              
                        </div>
                    </div>
                </div> 

                <div className="col-sm-4 p-3">
                    <div className="card shadow">
                        <div className="card-body">
                            <h4>Add Group</h4>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Group Name</label>
                                    <input type="text" value={group?.name} name="name" onChange={handleInput} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Group Description</label>
                                    <input type="text" value={group?.descr} name="descr" onChange={handleInput} className="form-control" />
                                </div>
                                <button className="btn btn-primary float-right">Add Group</button>
                            </form>
                        </div>
                    </div>
                </div>               
            </div>
        </div>
        </>
    )}

export default Groups;