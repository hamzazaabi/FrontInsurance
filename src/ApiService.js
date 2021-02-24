import axios from 'axios';
 class ApiService {
addInsurance(ins)
{
    return axios.post("http://localhost:8080/api/insurance/Insurance/saveAssurance", ins);
}


addCompany(company){
    return axios.post("http://localhost:8080/api/insurance/Company", company);
}

     allCompany(){
         return axios.get("http://localhost:8080/api/insurance/Company/All");
     }
     deleteCompany(id){
         return axios.delete("http://localhost:8080/api/insurance/Company/"+id);
     }
     UpdateCompany(id,company){
         return axios.put("http://localhost:8080/api/insurance/Company/update/"+id,company);
     }
     getCompany(id,company){
         return axios.get("http://localhost:8080/api/insurance/Company/"+id,company);
     }



}
export default new ApiService();
