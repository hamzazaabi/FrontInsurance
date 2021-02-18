import React, { Component } from 'react'
import ApiService from './ApiService'

class Insurance extends Component{

    constructor(props){
        super(props);
        this.state ={
            name:'',
                type:''
        };


        this.saveUser = this.saveUser.bind(this);
    }
    iniins ={name:'',type:''};

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    saveUser = (e) => {
        e.preventDefault();
        ApiService.addInsurance(this.state)
            .then(res => {
                console.log(res.data)
                this.setState({message : 'User added successfully.'});

            });
    }



    render() {
    const  ins ={name:'',type:''}
        return(
            <div>
                <h2 className="text-center">ADD INSURANCE</h2>
                <form>
                    <div className="form-group">
                        <label>Name:</label>
                        <input type="text" placeholder="name" name="name" className="form-control" value={this.state.name}     onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label>Type:</label>
                        <input   placeholder="type" name="type" className="form-control"  value={this.state.type}      onChange={this.onChange} />
                    </div>

                    <button className="btn btn-success" onClick={this.saveUser}>Save</button>
                </form>

            </div>
        );
    }
}

export default Insurance;
