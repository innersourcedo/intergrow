import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, InputGroupText, InputGroupAddon, Input, FormGroup  } from 'reactstrap';

import {COURSE_AUTH_USERS_URL} from '../../constants/utill';

class RegisterUser extends React.Component{

    state = {
        registerToggleModal:false,
        credencials: {first_name:'', last_name:'', username: '', password: ''},

    }

    register = () =>{
        // use BE api to login
    
        // API from Backend
        fetch(COURSE_AUTH_USERS_URL, {
          method : 'POST',
          headers : {'Content-Type' : 'application/json'},
          body : JSON.stringify(this.state.credencials)
        })
        // 1st get the data as json
        .then(data => data.json())
        // use json data 'use token as authendication'
        .then(data => {
          if(data.token == null){        
            console.error("Register faild!");  
            this.closeToggle();
          }
          else{
            console.log("Registration success");
            console.log(data.token);
            this.closeToggle();
          }
        })
    }

    inputChange = e =>{
        const cred = this.state.credencials;
        // target will set at onChange and find by name 
        cred[e.target.name] = e.target.value;
        this.setState({
          credencials:cred,
        })
      }

    registerToggle(){
        this.setState({
            registerToggleModal:true
        })
    }

    closeToggle(){
        this.setState({
            registerToggleModal:false
        })
    }



    render(){
        return (
            <div className="">
            <Button onClick={this.registerToggle.bind(this)}>Register</Button>
            <Modal isOpen={this.state.registerToggleModal} toggle={this.registerToggle.bind(this)}>
                <ModalHeader onClick = {this.registerToggle.bind(this)}>Register User</ModalHeader>
                <ModalBody>  
                <FormGroup>
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText><i className="fas fa-id-card-alt mr-2" ></i></InputGroupText>
                        <Input placeholder="fist Name"
                        name='first_name'
                        value={this.state.credencials.first_name}
                        onChange={this.inputChange}
                        />
                    </InputGroupAddon>
                </FormGroup>      
                <FormGroup>
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText><i className="fas fa-users mr-2" ></i></InputGroupText>
                        <Input placeholder="last_name" 
                        name = 'last_name'
                        value={this.state.credencials.last_name}
                        onChange={this.inputChange}
                        />
                    </InputGroupAddon>
                </FormGroup>   
                <FormGroup>
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText><i className="fas fa-id-card-alt mr-2" ></i></InputGroupText>
                        <Input placeholder="User Name"
                        name='username'
                        value={this.state.credencials.username}
                        onChange={this.inputChange}
                        />
                    </InputGroupAddon>
                </FormGroup>
                <FormGroup>
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText><i className="fas fa-id-card-alt mr-2" ></i></InputGroupText>
                        <Input type='password' placeholder="Password"
                        name='password'
                        value={this.state.credencials.password}
                        onChange={this.inputChange}
                        />
                    </InputGroupAddon>
                </FormGroup> 
                </ModalBody>
                <ModalFooter>
                <Button color="primary" rounded='true' onClick = {this.register}>Register</Button>
                <Button color="danger" rounded='true'  onClick = {this.closeToggle.bind(this)} >Cancel</Button>
                </ModalFooter>
            </Modal>   
            </div>
        );
    }
}
export default RegisterUser;