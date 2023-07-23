import React, { useEffect, useState } from "react";
import DonorService from "../../services/donorService";
import Helper from "../../helper/Helper";

function SummaryDonor(props) {
    const { removeId } = props;
    const [summary, setSummary] = useState({})
    useEffect(() => {
        async function getSummary() {
            let dataRes = await DonorService.getSummary();
            setSummary(dataRes)
        }
        getSummary()
    }, [removeId])

    const { totalAmountVn, totalAmountOther, totalDonors } = summary;
    return (
        <div className="row d-flex align-items-center justify-content-between">
            <div className="col-sm-3 card text-white bg-primary">
                <div className="card-header text-center">TỔNG TIỀN VIỆT</div>
                <div className="card-body">
                    <h5 className="card-title text-center">{Helper.formatCurrency(totalAmountVn)}</h5>
                </div>
            </div>
            <div className="col-sm-3 card text-white bg-success">
                <div className="card-header text-center">TỔNG NGOẠI TỆ</div>
                <div className="card-body">
                    <h5 className="card-title text-center">{Helper.formatCurrency(totalAmountOther)}</h5>
                </div>
            </div>
            <div className="col-sm-3 card text-white bg-warning">
                <div className="card-header text-center">TỔNG SỐ LƯỢT</div>
                <div className="card-body">
                    <h5 className="card-title text-center">{Helper.formatCurrency(totalDonors)}</h5>
                </div>
            </div>
            {/* <div className="col-sm-3 card text-white bg-secondary">
                <div className="card-header text-center">Tổng số lượt cúng</div>
                <div className="card-body">
                    <h5 className="card-title text-center">Primary card title</h5>
                </div>
            </div> */}
        </div>
    )
}

export default SummaryDonor;