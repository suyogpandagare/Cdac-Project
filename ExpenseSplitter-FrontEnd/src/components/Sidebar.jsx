import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
var classNames = require('classnames');

export default function Sidebar(){
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const logout=()=>{
        dispatch({type:'LogOut'})
        sessionStorage.clear();
        navigate("/");
    }
    const navclass="list-group-item list-group-item-action p-2 text-left";
    return (
        <>
        <h4 className="p-2 text-center">Hi! {sessionStorage.getItem('uname')}</h4>
        <div className="list-group list-group-flush">
            <NavLink to="/dashboard" className={classNames(navclass,({isActive})=> isActive ? "active":"")}>Dashboard</NavLink>                                                                                                
            <NavLink to="/groups" className={classNames(navclass,({isActive})=> isActive ? "active":"")}>Groups</NavLink>
            <button onClick={e=>logout()} className={classNames(navclass,({isActive})=> isActive ? "active":"")}>Logout</button>            
        </div>
        </>
    )
}