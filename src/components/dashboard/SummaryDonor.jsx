import React from "react";

function SummaryDonor() {
    return (
        <div className="row d-flex align-items-center justify-content-between">
            <div className="col-sm-3 card text-white bg-primary">
                <div className="card-header text-center">TỔNG TIỀN VIỆT</div>
                <div className="card-body">
                    <h5 className="card-title text-center">5.000.000</h5>
                </div>
            </div>
            <div className="col-sm-3 card text-white bg-success">
                <div className="card-header text-center">TỔNG NGOẠI TỆ</div>
                <div className="card-body">
                    <h5 className="card-title text-center">1.200</h5>
                </div>
            </div>
            <div className="col-sm-3 card text-white bg-warning">
                <div className="card-header text-center">TỔNG SỐ LƯỢT</div>
                <div className="card-body">
                    <h5 className="card-title text-center">512</h5>
                </div>
            </div>
            <div className="col-sm-3 card text-white bg-secondary">
                <div className="card-header text-center">Tổng số lượt cúng</div>
                <div className="card-body">
                    <h5 className="card-title text-center">Primary card title</h5>
                </div>
            </div>
        </div>
    )
}

export default SummaryDonor;