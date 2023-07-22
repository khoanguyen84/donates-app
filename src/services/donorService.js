import axiosClient from "./axios-client";
class DonorService
{
    static getDonors(){
        return axiosClient.get('donors');
    }

    static createDonor(donor){
        return axiosClient.post('donors', donor)
    }

    static updateDonor(donor, donorId){
        return axiosClient.put(`donors/${donorId}`, donor)
    }
}

export default DonorService;