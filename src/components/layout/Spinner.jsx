import React from "react";
import logo from '../../asset/images/logo.jpg';
function Spinner(){
    return (
        <div className="spinner">
            <img src={logo} alt="" className="rounded-circle logo-sm" />
        </div>
    )
}

export default Spinner;