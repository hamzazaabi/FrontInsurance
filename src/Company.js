 import React,{useState} from 'react'
import ApiService from "./ApiService";
 import TextField from '@material-ui/core/TextField';

 import {
    Button,
    Card,
    Label,
    CardHeader,
    CardBody,
    CardFooter,
    CardText,
    FormGroup,
    Form,
    Input,
    Row,
    Col,
} from "reactstrap";
 const Company = ()=>{

       const [companyState , setCompanyState] = useState({

                     name :'',
                     reference_number : ' ',
                     email: '',
                     country: '',
                     typeInsurance: '',
                     dateCreation: null,
                     numberEmp:88,


     });


     const handheld = e =>{

           setCompanyState({ ...companyState, [e.target.name] : e.target.value})   ;
     }
      let save = (e) =>     {

          e.preventDefault();

         ApiService.addCompany(companyState).then( res=>{
             console.log(res.data);
             console.log("1");
             }

         );
     }

    return <div>


                <Col md="8">
                    <Card>
                        <CardHeader>
                            <h5 className="title">Add company</h5>
                        </CardHeader>
                        <CardBody>
                            <Form>
                                <Row>
                                    <Col className="pr-md-1" md="5">
                                        <FormGroup>
                                            <label>Reference number</label>
                                            <Input
                                                name={"reference_number"}
                                                value={companyState.reference_number}
                                                onChange={handheld}

                                                placeholder="Reference number"
                                                type="text"

                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col className="px-md-1" md="3">
                                        <FormGroup>
                                            <label>Company Name</label>
                                            <Input
                                                name={"name"}
                                                value={companyState.name}
                                                onChange={handheld}
                                                placeholder="Company name"
                                                type="text"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col className="pl-md-1" md="4">
                                        <FormGroup>
                                            <label htmlFor="exampleInputEmail1">
                                                Email address
                                            </label>
                                            <Input name={"email"}
                                                   value={companyState.email}
                                                   onChange={handheld}
                                                placeholder="Company@email.com" type="email" />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="pr-md-1" md="6">
                                        <FormGroup>
                                            <label>Number of employees</label>
                                            <Input
                                                name={"numberEmp"}
                                                value={companyState.numberEmp}
                                                onChange={handheld}
                                                 placeholder="Number of employees"
                                                type="number"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col className="pl-md-1" md="6">
                                        <FormGroup>

                                            <Label for="exampleSelect">Type Insurance</Label>
                                            <Input
                                                name={"typeInsurance"}
                                                value={companyState.typeInsurance}
                                                onChange={handheld}
                                                type="select"  id="exampleSelect">
                                                <option>Type 1</option>
                                                <option>Type 2</option>
                                                <option>Type 3</option>
                                                <option>Type 4</option>

                                            </Input>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="pr-md-1" md="6">
                                        <FormGroup>
                                            <label>Address</label>
                                            <Input
                                                name={"country"}
                                                value={companyState.country}
                                                onChange={handheld}
                                                 placeholder="Home Address"
                                                type="text"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col className="pr-md-1" md="6">
                                        <TextField
                                            name={"dateCreation"}
                                            value={companyState.dateCreation}
                                            onChange={handheld}
                                            id="date"
                                            label="Date Creation"
                                            type="date"

                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="pr-md-1" md="4">
                                        <FormGroup>
                                            <label>City</label>
                                            <Input
                                                 placeholder="City"
                                                type="text"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col className="px-md-1" md="4">
                                        <FormGroup>
                                            <label>Country</label>
                                            <Input
                                                 placeholder="Country"
                                                type="text"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col className="pl-md-1" md="4">
                                        <FormGroup>
                                            <label>Postal Code</label>
                                            <Input placeholder="ZIP Code" type="number" />
                                        </FormGroup>
                                    </Col>
                                </Row>

                            </Form>
                        </CardBody>
                        <CardFooter>
                            <Button   onClick={save}  className="btn-fill" color="primary" type="submit">
                                Save
                            </Button>
                        </CardFooter>
                    </Card>
                </Col>

        <div id="LIST_COMPANY"></div>

    </div>
}
export default Company;
