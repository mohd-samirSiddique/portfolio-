import { NavLink } from "react-router-dom";

export default function Sidebar(){
    return(
        <>
            <div className="sidebar">
                <div className="logo">Samir</div>
                <div className="sidebar_main_cont">
                    <ul>
                        <li className="active"><NavLink to={'/'}><i className="fa fa-home"></i>Home</NavLink></li>
                        <li><NavLink to={'/about'}><i className="fa fa-user"></i>About</NavLink></li>
                        <li><NavLink to={'/service'}><i className="fa fa-list"></i>Services</NavLink></li>
                        <li><NavLink to={'/portfolio'}><i className="fa fa-briefcase"></i>Portfolio</NavLink></li>
                        <li><NavLink to={'/contact'}><i className="fa fa-comments"></i>Contact </NavLink></li>
                    </ul>
                </div>
            </div>
        </>
    )
}