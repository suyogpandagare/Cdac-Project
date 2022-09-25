import axios from "axios";
import { useEffect, useState } from "react";
import {toast} from "react-toastify";
import Sidebar from "../components/Sidebar";

function History(){
    const cid=sessionStorage.getItem("id")
    const [data,setData]=useState()

    return (
        <>  
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-2 bg-transparent p-0 border-right border-primary" style={{height:"calc(100vh - 80px)"}}>
                    <Sidebar />
                </div>
                               
                <div className="col-sm-10 p-3">
                    <div className="card shadow">
                        <div className="card-body">
                           <h4>History</h4>                                              
                        </div>
                    </div>
                </div>                
            </div>
        </div>
        </>
    )}

export default History;