import React, { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import DonorService from "../../services/donorService";

function EditDonor(props) {
    const { donor, setDonor } = props;
    const [updateDonor, setUpdateDonor] = useState({})

    useEffect(() => {
        setUpdateDonor(donor)
    }, [donor])

    const handleInput = (e) => {
        setUpdateDonor({
            ...updateDonor,
            [e.target.name]: e.target.value
        })
    }
    const handleSaveData = async (e) => {
        e.preventDefault();
        console.log(updateDonor);
        try {
            let updateRes = await DonorService.updateDonor(updateDonor, updateDonor?.id);
            if (updateRes) {
                toast.success('Thông tin phụng cúng đã được cập nhật!');
                setUpdateDonor({});
                setDonor(updateRes)
            }
            else {
                toast.error('Đã có lỗi, cần thao tác lại!')
            }
        } catch (error) {
            toast.error('Đã có lỗi, cần thao tác lại!')
        }
    }

    const { fullname, unitId, branchId, items, address, noted, amount } = updateDonor
    return (
        <div className={`'container p-4' ${Object.keys(updateDonor).length ? 'd-block' : 'd-none'}`}>
            <h3 className="text-warning">CẬP NHẬT THÔNG TIN PHỤNG CÚNG</h3>
            <form onSubmit={handleSaveData}>
                <div className="row mb-3">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="form-label">Họ và tên <span className="text-danger">(*)</span></label>
                            <input type="text" className="form-control" value={fullname}  name="fullname" onChange={handleInput}/>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Phái (Nhánh)</label>
                            <select className="form-control" value={branchId} name="branchId" onChange={handleInput}>
                                <option value="Phái 1" key="Phái 1">Phái 1</option>
                                <option value="Phái 2" key="Phái 2">Phái 2</option>
                                <option value="Phái 3" key="Phái 3">Phái 3</option>
                                <option value="Phái 4" key="Phái 4">Phái 4</option>
                                <option value="Phái 5" key="Phái 5">Phái 5</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="row">
                            <div className="col-sm-8">
                                <div className="form-group">
                                    <label className="form-label">Số tiền</label>
                                    <input type="number" name="amount" onChange={handleInput} value={amount} className="form-control" style={{ textAlign: "right" }} />
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <label className="form-label">Loại tiền</label>
                                    <select className="form-control" value={unitId} name="unitId" onChange={handleInput}>
                                        <option value="đồng" key="đồng">đồng</option>
                                        <option value="dollar" key="dollar">dollar</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Vật phẩm</label>
                            <input type="text" className="form-control" value={items} name="items" onChange={handleInput} />
                        </div>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="form-group">
                        <label>Địa chỉ</label>
                        <input type="text" className="form-control" value={address} name="address" onChange={handleInput}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="form-group">
                        <label>Ghi chú</label>
                        <textarea className="form-control" value={noted} name="noted" onChange={handleInput}></textarea>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-4 form-group d-grid grid-2">
                        <button type="submit" className="btn btn-primary">
                            <i className="fa fa-save me-2"></i>
                            Lưu
                        </button>
                    </div>
                    <div className="col-sm-4 form-group d-grid grid-2">
                        <button type="button" className="btn btn-dark" onClick={() => setUpdateDonor({})}>
                            <i className="fa fa-cancel me-2"></i>
                            Hủy
                        </button>
                    </div>
                    <div className="col-sm-4 form-group d-grid grid-2">
                        <button type="button" className="btn btn-secondary" onClick={() => setUpdateDonor({})}>
                            <i className="fa fa-eye-slash me-2"></i>
                            Ẩn Khung
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EditDonor;