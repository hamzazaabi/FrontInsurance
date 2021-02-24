import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Insurance from "./Insurance";
import Company from "./Company";
import ListCompany from "./ListCompany";
import UpCompany from "./UpdateCompanies";

 function UpdateCompany() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">ListCompany</Link>
                        </li>
                        <li>
                            <Link to="/about" >ADD Company</Link>
                        </li>


                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path='/about/:CompanyID'>
                        <UpCompany   />
                    </Route>
                    <Route path="/about">
                        <Company />
                    </Route>

                    <Route path="/">
                        <ListCompany />
                    </Route>

                </Switch>
            </div>
        </Router>
    );
}
export default UpdateCompany;
