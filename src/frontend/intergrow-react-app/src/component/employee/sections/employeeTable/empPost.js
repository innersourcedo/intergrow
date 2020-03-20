import React from 'react';
import Axios from 'axios';
import { COURSE_API_URL } from '../../../../constants/utill';
import { ModalFooter, Button, Modal, ModalBody, FormGroup, InputGroup, Input, InputGroupAddon, ModalHeader, InputGroupText, Spinner } from 'reactstrap';
import { MDBIcon } from 'mdbreact';
// import { Modal } from 'react-bootstrap';
 


class EmpPosts extends React.Component{
    constructor(props){
        super(props);
        this.state={
            editEmployee:{
                employee_id: '',
                full_name:'',
                first_name:'',
                last_name:'',
                email:'',
                phone_number:'',
                address:'',
            },
            toggleEditModal:false,
        }
    }
    toggleOpen(){
        this.setState({
            toggleEditModal:true,
        })
    }
    editToggleOpen(id){
        console.log(id);
        this.setState({
            toggleEditModal:true,
        })
        Axios.get(COURSE_API_URL + `employee/${id}`).then((response) => {
            // console.log(response.data);
            this.setState({
                editEmployee:{
                    id          : response.data.id,
                    employee_id : response.data.employee_id,
                    full_name   : response.data.full_name,
                    first_name  : response.data.first_name,
                    last_name   : response.data.last_name,
                    email       : response.data.email,
                    phone_number: response.data.phone_number,
                    address     : response.data.address,
                    // user        : response.data.user,
                }
            });
        window.location.reload();
        });
    }
    deleteEmployee(id){
        console.log(id);
        Axios.get(COURSE_API_URL + `employee/${id}`).then((response) => {
            console.log(response.data.user)
            Axios.get(COURSE_API_URL + 'users/' + response.data.user).then((response)=>{
                console.log(response.data);
            })
            Axios.delete(COURSE_API_URL + 'users/' + response.data.user).then((response)=>{
                console.log(response);
            })
            Axios.delete(COURSE_API_URL + 'employee/' + id).then((response) => {
                console.log(response)
                window.location.reload();  
            })
        });
              
    }
    updateEmployee(){
        // console.log(this.state.editEmployee);
        const obj = JSON.stringify(this.state.editEmployee);
        fetch(COURSE_API_URL + `employee/${this.state.editEmployee.id}`, {
			method: 'PUT',
			body: obj,
			headers: {
			  "Content-type": "application/json; charset=UTF-8"
			}
		}).then(response => {
            return response.json()
		}).then(json => {
			console.log(json)
			this.setState({
                toggleEditModal:false,
			});
        })  
    }
    closeToggle(){
        this.setState({
            toggleEditModal:false,
        })
    }

    render(){
        if (this.props.loading ) {
            return(
                <h2>Loading...
                    <div>
                        <Spinner type="grow" color="light" />
                        <Spinner type="grow" color="info" />
                        <Spinner type="grow" color="primary" />
                        <Spinner type="grow" color="dark" />
                    </div>
                </h2>
            )
        }
        return(
            <tbody>
                {this.props.posts.map(employee => (
                    // <li key={post.id} className='list-group-item'>{post.first_name}</li>
                    <tr key={employee.id} className='cursor'>
                        {/* contenteditable="true" */}
                        <td className="pt-3-half" >{employee.employee_id}</td>
                        <td className="pt-3-half" >{employee.first_name}</td>
                        <td className="pt-3-half" >{employee.email}</td>
                        <td className="pt-3-half" >{employee.phone_number}</td>
                        <td className="pt-3-half">
                            <span className="table-edit"><MDBIcon icon={'eye'} style={{color:'blue'}}/></span>
                        </td>
                        <td className="pt-3-half">
                            <span className="table-edit"><Button type="button" color={'warning'}
                                className={"btn btn-warning btn-rounded btn-sm my-0"} onClick={() => {this.editToggleOpen(employee.id)}}><MDBIcon icon={'edit'}/></Button></span>
                        </td>
                        <td>
                            <span className="table-remove"><Button type="button" color={'danger'}
                                className={"btn btn-danger btn-rounded btn-sm my-0"} onClick={() => {this.deleteEmployee(employee.id)}}><MDBIcon icon={'trash-alt'}/></Button></span>
                        </td>
                    </tr>
                ))}
                <Modal isOpen={this.state.toggleEditModal} toggle={this.toggleOpen.bind(this)}>                                            
                        <ModalHeader>Edit Employee Profile</ModalHeader>
                        {/* <div className='row mr-2 ml-2 '> */}
                            <ModalBody className='col-lg-12 col-md-12 col-sm-12 mr-0'>
                                <FormGroup>
                                    {/* <InputGroupAddon addonType="prepend"> */}
                                        <InputGroupText><i className="fas fa-id-card-alt mr-2" ></i>
                                        <Input placeholder="Employee Id" 
                                        value={this.state.editEmployee.employee_id} 
                                        onChange={(e) =>
                                        {
                                            let {editEmployee} = this.state;
                                            editEmployee.employee_id = e.target.value;
                                            this.setState({editEmployee});
                                        }}
                                         required/></InputGroupText>
                                    {/* </InputGroupAddon> */}
                                </FormGroup>
                                <FormGroup>
                                    {/* <InputGroupAddon addonType="prepend"> */}
                                        <InputGroupText><i className="fas fa-id-card-alt mr-2" ></i>
                                        <Input placeholder="Full Name" 
                                        value={this.state.editEmployee.full_name} 
                                        onChange={(e) =>
                                        {
                                            let {editEmployee} = this.state;
                                            editEmployee.full_name = e.target.value;
                                            this.setState({editEmployee});
                                        }}
                                         required/></InputGroupText>
                                    {/* </InputGroupAddon> */}
                                </FormGroup>
                                <FormGroup>
                                    {/* <InputGroupAddon addonType="prepend"> */}
                                        <InputGroupText><i className="fas fa-id-card-alt mr-2" ></i>
                                        <Input placeholder="First Name" 
                                        value={this.state.editEmployee.first_name} 
                                        onChange={(e) =>
                                        {
                                            let {editEmployee} = this.state;
                                            editEmployee.first_name = e.target.value;
                                            this.setState({editEmployee});
                                        }}
                                         required/></InputGroupText>
                                    {/* </InputGroupAddon> */}
                                </FormGroup>
                                <FormGroup>
                                    {/* <InputGroupAddon addonType="prepend"> */}
                                        <InputGroupText><i className="fas fa-id-card-alt mr-2" ></i>
                                        <Input placeholder="Last Name" 
                                        value={this.state.editEmployee.last_name} 
                                        onChange={(e) =>
                                        {
                                            let {editEmployee} = this.state;
                                            editEmployee.last_name = e.target.value;
                                            this.setState({editEmployee});
                                        }}
                                         required/></InputGroupText>
                                    {/* </InputGroupAddon> */}
                                </FormGroup>
                                <FormGroup>
                                    {/* <InputGroupAddon addonType="prepend"> */}
                                        <InputGroupText><i className="fas fa-envelope mr-2" ></i>
                                        <Input placeholder="Email" 
                                        value={this.state.editEmployee.email} 
                                        onChange={(e) =>
                                        {
                                            let {editEmployee} = this.state;
                                            editEmployee.email = e.target.value;
                                            this.setState({editEmployee});
                                        }}
                                         required/></InputGroupText>
                                    {/* </InputGroupAddon> */}
                                </FormGroup>
                                <FormGroup>
                                    {/* <InputGroupAddon addonType="prepend"> */}
                                        <InputGroupText><i className="fas fa-map-marker-alt mr-2" ></i>
                                        <Input placeholder="Address" 
                                        value={this.state.editEmployee.address} 
                                        onChange={(e) =>
                                        {
                                            let {editEmployee} = this.state;
                                            editEmployee.address = e.target.value;
                                            this.setState({editEmployee});
                                        }}
                                         required/></InputGroupText>
                                    {/* </InputGroupAddon> */}
                                </FormGroup> 
                                <FormGroup>
                                    {/* <InputGroupAddon addonType="prepend"> */}
                                        <InputGroupText><i className="fas fa-phone-square-alt mr-2" ></i>
                                        <Input placeholder="Phone No" 
                                        value={this.state.editEmployee.phone_number} 
                                        onChange={(e) =>
                                        {
                                            let {editEmployee} = this.state;
                                            editEmployee.phone_number = e.target.value;
                                            this.setState({editEmployee});
                                        }}
                                         required/></InputGroupText>
                                    {/* </InputGroupAddon> */}
                                </FormGroup>                               
                            </ModalBody>
                        {/* </div> */}
                        <ModalFooter>
                            <Button color="danger" className={'btn btn-sm'} onClick={this.closeToggle.bind(this)}>Cancel</Button>
                            <Button color="primary" className={'btn btn-sm'} onClick={() => {this.updateEmployee()}}>save changes</Button>
                        </ModalFooter>
                </Modal> 
            </tbody>
        )

    }
    
}
export default EmpPosts;
