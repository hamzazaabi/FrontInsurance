import axios from 'axios';
 class ApiService {
addInsurance(ins)
{
    return axios.post("http://localhost:8080/api/insurance/Insurance/saveAssurance", ins);
}
}
export default new ApiService();
