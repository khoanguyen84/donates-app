import React from "react";
import { Link } from "react-router-dom";
import logo from '../../asset/images/logo.jpg'

function Navbar() {
    return (
        // <div className="d-flex align-items-center py-3 px-md-4 mb-3 bg-white border-bottom">
        //     <Link to={'/'} className="h1 my-0 me-md-auto font-weight-normal text-danger">HỌ NGUYỄN HỮU</Link>
        // </div>
        <nav className="navbar navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand fw-bolder text-danger d-flex align-items-center" to={'/'} >
                    <img src={logo} alt=""className="rounded-circle logo-xs me-1" />
                    HỌ NGUYỄN HỮU
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;