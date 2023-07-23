import React, { useState } from "react";
import SummaryDonor from "./SummaryDonor";
import { Link } from "react-router-dom";
import DonorList from './DonorList';
import EditDonor from "./EditDonor";

function Dashboard() {
    const [donor, setDonor] = useState({})
    const [removeId, setRemoveId] = useState(0)
    return (
        <div className="container bg-light p-4">
            <div className="d-flex align-items-center justify-content-between">
                <h1 className="text-primary">QUẢN LÝ THÔNG TIN PHỤNG CÚNG</h1>
                <Link to={'/create-donor'} className="btn btn-danger">
                    <i className="fa fa-plus me-2"></i>
                    THÊM THÔNG TIN PHỤNG CÚNG
                </Link>
            </div>
            <section className="summary mb-3">
                <SummaryDonor removeId={removeId} />
            </section>
            <section className="donor-list mb-3">
                <div className="row">
                    <EditDonor donor={donor} setDonor={setDonor} />
                </div>
                <div className="row">
                    <DonorList
                        donor={donor}
                        setDonor={setDonor}
                        setRemoveId={setRemoveId}
                        removeId={removeId}
                    />
                </div>
            </section>
        </div>
    )
}

export default Dashboard;