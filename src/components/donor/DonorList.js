import React, { useState, useEffect } from "react";
import DonorService from './../../services/donorService';
import Helper from '../../helper/Helper.js';

const FirstPage = 1;
const PreviousPage = 2;
const NextPage = 3;
const LastPage = 4;
function DonorList() {
    const [donorsTop20, setDonorsTop20] = useState([])
    const [donors, setDonors] = useState([])
    const [pagination, setPagination] = useState({
        totalPage: 0,
        limit: 15
    })
    const [page, setPage] = useState(1);
    const [pageActive, setPageActive] = useState(FirstPage)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        try {
            setLoading(true)
            async function fetchData() {
                let donorsRes = await DonorService.getDonors();
                donorsRes.sort((donor1, donor2) => donor2.id - donor1.id);
                setPagination({
                    ...pagination,
                    totalPage: Math.ceil(donorsRes.length / pagination.limit)
                })
                setDonors(donorsRes.slice((page - 1) * pagination.limit, page * pagination.limit));
                setLoading(false);
            }
            fetchData()
        } catch (error) {

        }
    }, [page])
    useEffect(() => {
        try {
            async function fetchData() {
                let donorsRes = await DonorService.getDonors();
                donorsRes.sort((donor1, donor2) => donor2.id - donor1.id);
                setDonorsTop20(donorsRes.slice(0, 15))
            }
            fetchData()
        } catch (error) {

        }
    }, [])

    const handleClickFirst = (e) => {
        e.preventDefault();
        setPage(1);
        setPageActive(1)
    }

    const handleClickLast = (e) => {
        e.preventDefault();
        setPage(pagination.totalPage);
        setPageActive(4)
    }

    const handleClickNext = (e) => {
        e.preventDefault();
        if (page < pagination.totalPage) {
            setPage(page + 1);
            setPageActive(3)
        }

    }

    const handleClickPrevious = (e) => {
        e.preventDefault();
        if (page > 0) {
            setPage(page - 1);
            setPageActive(2)
        }

    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6">
                    <h3 className="text-warning">DANH SÁCH CON CHÁU VỪA PHỤNG CÚNG</h3>
                    <table className="table table-warning table-striped">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Họ và tên</th>
                                <th>Phái</th>
                                <th>Số tiền</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                donorsTop20.map((donor) => (
                                    <tr key={donor.id}>
                                        <td>{donor.id}</td>
                                        <td>{donor.fullname}</td>
                                        <td>{donor.branchId}</td>
                                        <td className="text-end">{Helper.formatCurrency(donor.amount)}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <div className="col-md-6">
                    <h3 className="text-success">DANH SÁCH CON CHÁU PHỤNG CÚNG</h3>
                    {
                        loading ? <p>Đang tải dữ liệu...</p> : (
                            <table className="table table-success table-striped">
                                <thead>
                                    <tr>
                                        <th>STT</th>
                                        <th>Họ và tên</th>
                                        <th>Phái</th>
                                        <th className="text-end">Số tiền</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        donors.map((donor) => (
                                            <tr key={donor.id}>
                                                <td>{donor.id}</td>
                                                <td>{donor.fullname}</td>
                                                <td>{donor.branchId}</td>
                                                <td className="text-end">{Helper.formatCurrency(donor.amount)}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        )
                    }
                    <div>
                        <nav>
                            <ul className="pagination">
                                <li className={page <= 1 ? "page-item disabled" : "page-item"}>
                                    <button className={pageActive == FirstPage ? "page-link active" : "page-link"} onClick={handleClickFirst}>Đầu</button>
                                </li>
                                <li className={page <= 1 ? "page-item disabled" : "page-item"}>
                                    <button className={pageActive == PreviousPage ? "page-link active" : "page-link"} onClick={handleClickPrevious}>Trước</button>
                                </li>
                                <li className={page >= pagination.totalPage ? "page-item disabled" : "page-item"}>
                                    <button className={pageActive == NextPage ? "page-link active" : "page-link"} onClick={handleClickNext}>Sau</button>
                                </li>
                                <li className={page >= pagination.totalPage ? "page-item disabled" : "page-item"}>
                                    <button className={pageActive == LastPage ? "page-link active" : "page-link"} onClick={handleClickLast}>Cuối</button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DonorList;