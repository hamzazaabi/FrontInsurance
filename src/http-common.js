import axios from "axios";
export default axios.create({
    baseURL: "http://localhost:8080/api/insurance/Insurance/",
    headers: {
        "Content-type": "application/json"
    }
});
