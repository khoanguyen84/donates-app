import React from "react";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";
import { toast } from 'react-toastify';
import DonorService from "../../services/donorService";
import { Link } from "react-router-dom";

const schema = yup.object({
    fullname: yup.string().required('Chưa có thông tin họ và tên!'),
    amount: yup.number().positive('Số tiền không hợp lệ!').typeError('')
})

function CreateDonor() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })
    const handleSubmitData = async (data) => {
        console.log(data);

        try {
            let createRes = await DonorService.createDonor(data);
            if (createRes) {
                toast.success('Thông tin phụng cúng đã được lưu trữ!');
                reset();
            }
            else {
                toast.error('Đã có lỗi, cần thao tác lại!')
            }
        } catch (error) {
            toast.error(error.message)
        }
    }
    return (
        <div className="container bg-light p-4">
            <div className="d-flex align-items-center justify-content-between">
                <h1 className="text-danger">THÔNG TIN PHỤNG CÚNG</h1>
                <Link to={'/dashboard'} className="btn btn-warning">
                    <i className="fa fa-plus me-2"></i>
                    VỀ TRANG QUẢN LÝ
                </Link>
            </div>
            <form onSubmit={handleSubmit(handleSubmitData)}>
                <div className="row mb-3">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="form-label">Họ và tên <span className="text-danger">(*)</span></label>
                            <input type="text" {...register('fullname')} className="form-control" />
                            <span className="text-danger">{errors.fullname?.message}</span>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Phái (Nhánh)</label>
                            <select {...register('branchId')} className="form-control">
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
                                    <input {...register('amount')} type="number" className="form-control" style={{ textAlign: "right" }} />
                                    <span className="text-danger">{errors.amount?.message}</span>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <label className="form-label">Loại tiền</label>
                                    <select {...register('unitId')} className="form-control">
                                        <option value="đồng" key="đồng">đồng</option>
                                        <option value="dollar" key="dollar">dollar</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Vật phẩm</label>
                            <input {...register('items')} type="text" className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="form-group">
                        <label>Địa chỉ</label>
                        <input type="text" {...register('address')} className="form-control" />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="form-group">
                        <label>Ghi chú</label>
                        <textarea {...register('noted')} className="form-control"></textarea>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-6 form-group d-grid grid-2">
                        <button type="submit" className="btn btn-danger">
                            <i className="fa fa-save me-2"></i>
                            Lưu
                        </button>
                    </div>
                    <div className="col-sm-6 form-group d-grid grid-2">
                        <button type="button" className="btn btn-dark" onClick={() => reset()}>
                            <i className="fa fa-cancel me-2"></i>
                            Hủy
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreateDonor;