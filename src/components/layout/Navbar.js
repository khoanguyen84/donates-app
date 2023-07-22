import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="d-flex align-items-center py-3 px-md-4 mb-3 bg-white border-bottom">
            <Link to={'/'} className="h1 my-0 me-md-auto font-weight-normal text-danger">Nguyễn Hữu Tộc</Link>
        </div>
    )
}

export default Navbar;