import axiosClient from "./axios-client";
class BranchService
{
    static getBranches(){
        return axiosClient.get('branches');
    }
}

export default BranchService;