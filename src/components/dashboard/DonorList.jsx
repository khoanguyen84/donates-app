import React, { useState, useEffect } from "react";
import DonorService from '../../services/donorService';
import Helper from '../../helper/Helper.js';
import { toast } from "react-toastify";
import Spinner from "../layout/Spinner";

const FirstPage = 1;
const PreviousPage = 2;
const NextPage = 3;
const LastPage = 4;


function DonorList(props) {
    const { donor, setDonor, removeId, setRemoveId } = props

    const [donors, setDonors] = useState([])
    const [pagination, setPagination] = useState({
        totalPage: 0,
        limit: 10
    })
    const [page, setPage] = useState(1);
    const [pageActive, setPageActive] = useState(FirstPage)
    const [loading, setLoading] = useState(false)
    const [keyword, setKeyword] = useState()
    
    useEffect(() => {
        try {
            setLoading(true)
            async function fetchData() {
                let donorsRes = await DonorService.getDonors();
                donorsRes.sort((donor1, donor2) => donor2.id - donor1.id);
                if (keyword) {
                    donorsRes = donorsRes.filter((item) => item.fullname?.toLowerCase().includes(keyword.toLowerCase()))
                }
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
    }, [page, donor, keyword, removeId])

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

    const handleSearch = (e) => {
        e.preventDefault();
        setKeyword(keyword)
    }

    const removeDonor = async (donor) => {
        let confirm = window.confirm('Bạn có chắc muốn xóa thông tin phụng cúng này không?')
        try {
            setLoading(true)
            if(confirm){
                let delRes = await DonorService.removeDonor(donor.id)
                if(delRes){
                    toast.info('Thông tin phụng cúng đã được xóa!')
                    setRemoveId(donor.id)
                    setLoading(false)
                }
            }
        } catch (error) {
            toast.error('Đã có lỗi, cần thao tác lại!')
        }
        
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <h3 className="text-success">DANH SÁCH PHỤNG CÚNG</h3>
                <div className="row">
                    <div className="col-sm-6">
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
                    </div>

                    <form onSubmit={handleSearch} className="col-sm-6">
                        <div className="d-flex align-items-center">
                            <input className="form-control me-1" type="search" placeholder="Tìm kiếm theo tên" onInput={(e) => setKeyword(e.target.value)} />
                            <button className="btn btn-outline-dark w-25">Tìm kiếm</button>
                        </div>
                    </form>
                </div>
                {
                    loading ? <Spinner/> : (
                        <table className="table table-sm table-bordered table-hover table-warning table-striped table-responsive-sm">
                            <thead className="table-danger">
                                <tr>
                                    <th className="align-middle" style={{ width: '10px' }}>STT</th>
                                    <th className="align-middle" style={{ width: '250px' }}>Họ và tên</th>
                                    <th className="align-middle" style={{ width: '100px' }}>Phái</th>
                                    <th className="text-end align-middle">Số tiền</th>
                                    <th className="text-end align-middle" style={{ width: '80px' }}>Loại tiền</th>
                                    <th className="align-middle">Vật phẩm</th>
                                    <th className="align-middle">Địa chỉ</th>
                                    <th className="align-middle">Ghi chú</th>
                                    <th className="align-middle">Thao tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    donors.map((donor) => (
                                        <tr key={donor.id}>
                                            <td>{donor.id}</td>
                                            <td className="text-wrap">{donor.fullname}</td>
                                            <td>{donor.branchId}</td>
                                            <td className="text-end">{Helper.formatCurrency(donor.amount)}</td>
                                            <td className="text-end">{donor.unitId}</td>
                                            <td className="text-wrap">{donor.items}</td>
                                            <td className="text-wrap">{donor.address}</td>
                                            <td className="text-wrap">{donor.noted}</td>
                                            <td className="text-end" style={{ width: '120px' }}>
                                                <div className="d-flex flex-column justify-content-center align-items-center">
                                                    <button className="btn btn-link btn-sm" onClick={() => setDonor(donor)}>
                                                        <i className="fa fa-edit me-2"></i>
                                                        Chỉnh sửa
                                                    </button>
                                                    <button className="btn btn-link btn-sm text-danger" onClick={() => removeDonor(donor)}>
                                                        <i className="fa fa-trash me-2"></i>
                                                        Xóa
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    )
                }

            </div>
        </div>
    )
}

export default DonorList;