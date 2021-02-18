 import './App.css';
 import  React ,{useState,useEffect} from 'react'
import './App.css';
import axios from "axios";

const  Insurance = ()=>{
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const  [insurence,setinsurence] =useState([]);
  const  fetchInsurance = ()=>{
    axios.get('http://localhost:8080/api/insurance/Insurance/GetAssurance', {
      headers: {'Content-Type': 'application/json'}}
    ).then(
        res=>{
          console.log(res);
          const  data = res.data;
          setinsurence(res.data);
        }


    );
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(()=>{fetchInsurance();},[]);
  return insurence.map((insurence,index)=>{
    return <div>
      <table>
        <thead>
        <tr>
          <th>NAME</th>
          <th>TYPE</th>
        </tr>
        </thead>

        <tr  >
          <td>{insurence.name}</td>
          <td>{insurence.type}</td>
        </tr>
      </table>

    </div>
  });


}
function App() {
  return (
    <div className="App">
      <Insurance />
    </div>
  );
}

export default App;
