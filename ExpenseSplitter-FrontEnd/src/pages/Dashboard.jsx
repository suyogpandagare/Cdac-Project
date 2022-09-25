import axios from "axios";
import { useEffect, useState } from "react";
import {toast} from "react-toastify";
import Sidebar from "../components/Sidebar";

function Dashboard(){
    const cid=sessionStorage.getItem("id")
    const [data,setData]=useState()
    const [settles,setsettles]=useState([])
    const loadData=()=>{        
        axios.get("http://localhost:8080/api/users/"+cid)
        .then(resp=>{
            console.log("Student Info",resp.data)    
            setData(resp.data)             
        })
        .catch(err=>{
            console.log(err)
        })
        axios.get('http://localhost:8080/api/settlements/dashboard?userid='+cid)
        .then(resp=>setsettles(resp.data))
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
                        <div className="card-header">
                            <h5>Settlement Report</h5>
                        </div>
                        <div className="card-body">
                        <table className="table table-sm">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Group</th>
                                <th>Paid By</th>
                                <th>Paid To</th>
                                <th>Paymethod</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {settles.map(x=>(
                                <tr>
                                    <td>{x.date}</td>
                                    <td>{x.group.name}</td>
                                    <td>{x.paidBy.fname}</td>
                                    <td>{x.paidTo.fname}</td>
                                    <td>
                                        {x.paymethod}<br/>
                                        ({x.remarks})
                                    </td>
                                    <td>Rs.{x.amount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 p-3">
                    <div className="card shadow">
                        <img src={'http://localhost:8080/'+data?.photo} className="mx-auto img-thumbnail" 
                        style={{width:"150px",height:"150px"}}/>
                        <table className="table">
                            <tbody>
                                <tr>
                                    <th>Name</th>
                                    <th>{data?.fname} {data?.lname}</th>
                                </tr>
                                <tr>
                                    <th>Contact</th>
                                    <th>{data?.contact}</th>
                                </tr>
                                <tr>
                                    <th>Email</th>
                                    <th>{data?.email}</th>
                                </tr>
                                <tr>
                                    <th>UPI Id</th>
                                    <th>{data?.upiId}</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        </>
    )}

export default Dashboard;