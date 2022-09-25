import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {toast} from "react-toastify";
import Sidebar from "../components/Sidebar";

function Expenses(){
    const cid=sessionStorage.getItem("id")
    const location=useLocation()
    const groupid=location.state
    const [data,setData]=useState()
    const [info,setinfo]=useState({
        totalExp:'',
        date:'',
        descr:'',
    })
    const [users,setusers]=useState([])
    const [expenses,setexpenses]=useState([])
    const [selectedPhoto,setSelectedPhoto]=useState(null)
    const [file,setFile]=useState(null)
    const [groupexp,setgroupexp]=useState([])

    const handleInput=(e)=>{
        setinfo({...info,[e.target.name]:e.target.value})
    }

    const handleFileInput=e=>{
        setSelectedPhoto(e.target.files[0])
        setFile(URL.createObjectURL(e.target.files[0]))    
        handleInput(e)    
    }

    const loadGroups=()=>{
        axios.get('http://localhost:8080/api/expenses/'+groupid)
        .then(resp=>setgroupexp(resp.data))
        .catch(err=>toast.error('Failed'))
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(selectedPhoto)
        if(info.totalExp=='' || info.date==='' || info.descr==='' || selectedPhoto===null){
            toast.error('Please fill all required fields')
            return
        }
        let fd=new FormData() 
        fd.append('exps',JSON.stringify(users))     
        fd.append('group',groupid)
        fd.append('pic',selectedPhoto)
        fd.append('date',info?.date)
        fd.append('totalExp',info?.totalExp)
        fd.append('descr',info?.descr)
        axios.post('http://localhost:8080/api/expenses',fd)
        .then(resp=>{
            toast.success(resp.data.message)
            setinfo({
                totalExp:'',
                date:'',
                descr:'',
            })
            loadUsers()
        })
        .catch(err=>toast.error('Failed'))
    }

    const saveExp=(index,amt)=>{
        const uinfo=users[index]
        uinfo.amount=parseInt(amt)
        users[index]=uinfo
    }

    const loadUsers=()=>{
        if(groupid>0){
            axios.get('http://localhost:8080/api/groups/'+groupid)
            .then(resp=>{
                setData(resp.data)  
                if(expenses.length==0){              
                    resp.data.groupUsers.map(x=>{
                        expenses.push({uid:x.user.uid,amount:0,fname:x.user.fname,lname:x.user.lname})
                    })
                    setusers(expenses)  
                }
            })

            loadGroups()
        }
    }

    useEffect(()=>{
        loadUsers()
    },[])
    return (
        <>  
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-2 bg-transparent p-0 border-right border-primary" style={{height:"calc(100vh - 80px)"}}>
                    <Sidebar />
                </div>
                               
                <div className="col-sm-5 p-3">
                    <div className="card shadow">
                        <div className="card-body">
                            <h5>Expenses - Group: {data?.name}</h5>
                            <form onSubmit={handleSubmit}>                                
                                <div className="form-group">
                                    <label>Amount</label>
                                    <input type="number" name="totalExp" value={info?.totalExp} onChange={handleInput} className="form-control form-control-sm" />
                                </div>
                                <div className="form-group">
                                    <label>Description</label>
                                    <input type="text" name="descr" value={info?.descr} onChange={handleInput} className="form-control form-control-sm" />
                                </div>
                                <div className="form-group">
                                    <label>Date</label>
                                    <input type="date" name="date" value={info?.date} onChange={handleInput} className="form-control form-control-sm" />
                                </div>
                                <div className="form-group">
                                    <label>Bill Image</label>
                                    <input type="file" value={info?.bill} accept=".png,.jpg" onChange={handleFileInput} name="bill" className="form-control form-control-sm" />
                                </div>
                                {users.length>0 ? (
                                    <table className="table">
                                        <tbody>
                                            {expenses.map((x,index)=>(
                                                <tr key={index}>
                                                    <td>{x.fname} {x.lname}</td>
                                                    <td><input type="number" onChange={e=>saveExp(index,e.target.value)} htmlinput="0" name="exps" className="form-control form-control-sm" /></td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                ):null}
                                <button className="btn btn-primary btn-sm float-right">Save Expense</button>
                            </form>                                              
                        </div>
                    </div>
                </div>   

                <div className="col-sm-5 p-3">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Description</th>
                                <th>Total Exp</th>
                                <th>Paid By</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {groupexp.map(x=>(
                                <tr>
                                    <td>{x.date}</td>
                                    <td>{x.descr}</td>
                                    <td>{x.totalExp}</td>
                                    <td>{x.paidBy?.fname}</td>
                                    <td>{x.amount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>             
            </div>
        </div>
        </>
    )}

export default Expenses;