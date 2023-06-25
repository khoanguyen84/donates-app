import axiosClient from "./axios-client";
class DonorService
{
    static getDonors(){
        return axiosClient.get('donors');
    }
}

export default DonorService;