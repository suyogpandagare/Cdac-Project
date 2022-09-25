import { Link } from "react-router-dom";

export default function Header(){
    return (
        <div className="container border-bottom text-center" style={{height:"70px"}}>
            <div className="card float-right" style={{width:"100px"}}>
                <Link to="/login" className="btn btn-sm btn-primary mb-1">Login</Link>
                <Link to="/register" className="btn btn-sm btn-success">Register</Link>
            </div>
            <h4 className="mt-2">Expense Spliter</h4>
        </div>
    )
}