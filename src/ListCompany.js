import React, {useEffect, useState} from "react";
import {Input, Table} from 'reactstrap';
 import ApiService from "./ApiService";
import { useHistory } from 'react-router-dom';

import Company from "./Company";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import {
    Button
} from "reactstrap";
import {onHidden} from "web-vitals/dist/modules/lib/onHidden";
const List = () => {

    const [Companies , setCompanies] = useState([]);

 const gettAllCompany = () =>
    {
        ApiService.allCompany().then(
            res=>{

                setCompanies(res.data);

            }
        );
    }
    useEffect(()=>{gettAllCompany();},[]);

  const deleteCompany = ( id) =>{
     ApiService.deleteCompany( id).then(
         res=>{
              console.log(res.data)
              gettAllCompany()

         }
     )
 }
    let history = useHistory();
 const redirect = (c) => {
        history.push("/about/"+c)
    }
return   Companies.map((Companies,index) => {
     let update =false;
    const up = ()=>{
        update = !update;
        console.log(update)
    }
    return <div>
        <Table>
            <thead>
            <tr>
                <th>#</th>
                <th>Reference number</th>
                <th>Company Name</th>
                <th>Type Insurance</th>
                <th>Date Creation</th>
                <th>Update</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>

                <tr >
                    <th scope="row">{index}</th>
                    <td>{Companies.reference_number}</td>
                    <td>{Companies.name}</td>
                    <td>{Companies.typeInsurance}</td>
                    <td>{Companies.dateCreation}</td>


                    <td><Button onClick={redirect.bind(redirect,Companies.id)}  > Update  </Button></td>
                    <td><Button onClick={deleteCompany.bind(deleteCompany, Companies.id)}>Delete</Button></td>

                </tr>






            </tbody>
        </Table>

    </div>
});
}
    function ListCompany() {
        return (
            <div className="App">
                <List />

            </div>
        );

}
export default ListCompany;
