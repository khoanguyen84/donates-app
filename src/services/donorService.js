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

    static getSummary(){
        return axiosClient.get('donors/summary')
    }

    static removeDonor(donorId){
        return axiosClient.delete(`donors/${donorId}`)
    }
}

export default DonorService;