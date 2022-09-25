import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {toast} from "react-toastify";
import Sidebar from "../components/Sidebar";

function SettleBill(){
    const cid=sessionStorage.getItem("id")
    const [data,setData]=useState()
    const location=useLocation()
    const groupid=location.state
    const [groupexp,setgroupexp]=useState([])
    const [totalexp,settotalexp]=useState(0)
    const [mytotalexp,setmytotalexp]=useState(0)
    const [mypart,setmypart]=useState(0)
    const [settles,setsettles]=useState([])
    const [settlepaid,setsettlepaid]=useState(0)
    const [settlerecd,setsettlerecd]=useState(0)
    const [payload,setpayload]=useState({
        paidTo:'',
        paidBy:cid,
        amount:'',
        date:'',
        paymethod:'',
        remarks:'',
        group:groupid
    })

    const handleInput=(e)=>{
        setpayload({...payload,[e.target.name]:e.target.value})
    }

    const loadGroups=()=>{
        axios.get('http://localhost:8080/api/expenses/report/'+groupid)
        .then(resp=>{
            setgroupexp(resp.data)
            let total=0;
            let mytotal=0;
            resp.data.forEach(x=> total+=x.total)
            resp.data.filter(x=>x.paidBy.uid==cid).forEach(x=>mytotal+=x.total)
            settotalexp(total)
            setmytotalexp(mytotal)
        })
        .catch(err=>toast.error('Failed'))    
    }

    const loadData=()=>{
        axios.get('http://localhost:8080/api/groups/'+groupid)
        .then(resp=>{
            setData(resp.data)                              
        })

        axios.get('http://localhost:8080/api/settlements?groupid='+groupid+'&userid='+cid)
        .then(resp=>
            {
                setsettles(resp.data)
                let amt=0;
                let recd=0;
                resp.data.forEach(x=>{
                    if(x.paidTo.uid==cid)
                        recd+=x.amount
                    if(x.paidBy.uid==cid)
                        amt+=x.amount
                })
                setsettlerecd(recd)
                setsettlepaid(amt)
            })
        .catch(err=>toast.error('Failed'))
    }

    const handleSubmit=e=>{
        e.preventDefault()
        console.log("payload => ",payload)
        axios.post('http://localhost:8080/api/settlements',payload)
        .then(resp=>{
            toast.success(resp.data.message)
            loadData()
        })
        .catch(err=>toast.error('Failed'))
    }

    useEffect(()=>{
        setmypart((totalexp/data?.groupUsers?.length).toFixed(0))
    },[data])

    useEffect(()=>{
        loadGroups()
        loadData()
    },[])

    return (
        <>  
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-2 bg-transparent p-0 border-right border-primary" style={{height:"calc(100vh - 80px)"}}>
                    <Sidebar />
                </div>
                               
                <div className="col-sm-4 p-3">
                    <div className="card shadow">
                        <div className="card-body">
                            <h4>Bill Settlement</h4>                                              
                            <table className="table table-bordered table-sm">
                                <thead>
                                    <tr>
                                        <th>Paid By</th>
                                        <th>Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {groupexp.map((x,index)=>(
                                        <tr key={index}>
                                            <td>{x.paidBy?.fname}</td>
                                            <td>Rs.{x.total}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            <h6>Total Expense Rs.{totalexp}</h6>
                            <h6>I have paid Rs.{mytotalexp}</h6>
                            <h6>Total Group Members {data?.groupUsers.length}</h6>
                            <h6>Per head pay : Rs.{mypart }</h6>
                            {mypart<mytotalexp ? (
                                <h6>Refund Amount: Rs. {mytotalexp-mypart-settlerecd}</h6>
                            ):(
                                <h6>Unpaid Amount: Rs. {mypart-mytotalexp-settlepaid}</h6>
                            )}
                        </div>
                    </div>

                    <div className="card shadow">
                        <div className="card-body">
                            <h6>Settlement</h6>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Paid To</label>
                                    <select onChange={handleInput} name="paidTo" value={payload.paidTo} className="form-control form-control-sm">
                                        <option value=''>Select User</option>
                                        {groupexp?.filter(x=>x.paidBy.uid != cid).map((x,index)=>(
                                            <option key={index} value={x.paidBy.uid}>{x.paidBy.fname} {x.paidBy.lname}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Date</label>
                                    <input type="date" value={payload?.date} onChange={handleInput} name="date" className="form-control form-control-sm" />
                                </div>
                                <div className="form-group">
                                    <label>Amount</label>
                                    <input type="number" value={payload?.amount} onChange={handleInput} name="amount" className="form-control form-control-sm" />
                                </div>
                                <div className="form-group">
                                    <label>Paid Method</label>
                                    <select value={payload?.paymethod} name="paymethod" onChange={handleInput} className="form-control form-control-sm">
                                        <option value=''>Select Paymethod</option>
                                        <option>By Cash</option>
                                        <option>By UPI</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Remarks</label>
                                    <input type="text" name="remarks" value={payload?.remarks} onChange={handleInput} className="form-control form-control-sm" />
                                </div>
                                <button className="btn btn-primary btn-sm float-right">Save Settlement</button>
                            </form>
                        </div>
                    </div>

                </div>  

                <div className="col-sm-6 p-3">
                <div className="card shadow">
                    <div className="card-body">
                        <h5 className="p-1">Settlement Transactions</h5>
                    <table className="table table-sm">
                        <thead>
                            <tr>
                                <th>Date</th>
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
                                    <td>{x.paidBy.fname}</td>
                                    <td>{x.paidTo.fname}</td>
                                    <td>
                                        {x.paymethod}<br/>
                                        ({x.remarks})
                                    </td>
                                    <td>{x.amount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    </div>
                    </div>
                </div>              
            </div>
        </div>
        </>
    )}

export default SettleBill;