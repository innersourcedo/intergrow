import React from 'react';
import { MDBBtn, MDBContainer } from 'mdbreact';
import { Badge, Button, FormGroup, Input, InputGroupAddon, InputGroupText, Modal, ModalBody, ModalFooter, ModalHeader, ToastBody, ToastHeader, Collapse, Alert } from 'reactstrap';
import Axios from 'axios';
import { COURSE_API_URL } from '../../../../constants/utill';

// create happen on same page

class CreateIndividualGoal extends React.Component{

    constructor(props){
        super(props);   
        this.state=({
            toggleModal:false,
            individual_goals:[],
            newIndividualGoal:{
                employee:'',
                goal_discription:'',
                start_date:'',
                end_date:'',
            }
        })     
    }
    toggle(){
        this.setState({
            toggleModal:true,
        })
    }
    closeToggle(){
        this.setState({
            toggleModal:false,
        })
    }
    createIndividualGoal(){
        
        Axios.get(COURSE_API_URL + 'users/' + sessionStorage.getItem('username')).then((response) => {
            Axios.get(COURSE_API_URL + 'employee/user/' + response.data.id).then((emp) => {
                console.log(emp.data.id);
                let {newIndividualGoal} = this.state;
                newIndividualGoal.employee = emp.data.id;
                this.setState({newIndividualGoal});

            Axios.post(COURSE_API_URL + 'individual_goal/', this.state.newIndividualGoal).then((response)=>{
                console.log(response.data);
                let {individual_goals} = this.state;
                individual_goals.push(response.data);
                this.setState({
                    toggleModal:false,
                    individual_goals,             
                    newIndividualGoal:{
                        employee:'',
                        goal_discription:'',
                        start_date:'',
                        end_date:'',
                    }
                })
            })            
        })


})

    }
    render(){
        
        return(
            <section>
                {/* <div className=" mb-2 mt-2 pt-2 pb-2  wow fadeIn"> */}
                <MDBContainer className="card p-1 mt-1" style={{
                    display: "flex",
                    // justifyContent: "left",
                    alignItems: "left",
                    backgroundColor:"rgb(175, 200, 209)"
                    }}>
                        

                    <span className="pull-right">
                    <div className='mt-3 ml-3 mr-2 float-right'><strong>Complete</strong><div className='p-1 #76ff03 light-green accent-3'></div></div>
                    <div className='mt-3 float-right'><strong>In Progress</strong><div className='p-1 #ffff00 yellow accent-2'></div></div>
                    <MDBBtn 
                    color = 'primary'                        
                    className={'btn btn-info'}
                    onClick={this.toggle.bind(this)}
                    rounded 
                    >
                        <i className="fas fa-plus mr-2" ></i>Add Goal</MDBBtn>
                    </span>

                    <Modal isOpen={this.state.toggleModal} toggle={this.toggle.bind(this)}>    
                        <ModalHeader toggle={this.closeToggle.bind(this)}>Create Individual Goal</ModalHeader>
                        <ModalBody>
                            <FormGroup>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText><i className="fas fa-lightbulb mr-2" ></i></InputGroupText>
                                    <Input type='textarea' placeholder="Goal description"
                                    name='goal_discription'
                                    value={this.state.newIndividualGoal.goal_discription}
                                    onChange={((e)=>{
                                        let {newIndividualGoal} = this.state;
                                        newIndividualGoal.goal_discription = e.target.value;
                                        this.setState({newIndividualGoal});
                                    })}
                                    />
                                </InputGroupAddon>
                            </FormGroup> 
                            <FormGroup>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText><i className="fas fa-calendar-alt mr-2" ></i></InputGroupText>
                                    <InputGroupText>Start Date</InputGroupText>
                                    <Input type='date' placeholder="start date" 
                                        name='start_date'
                                        value={this.state.newIndividualGoal.start_date}
                                        onChange={((e)=>{
                                            let {newIndividualGoal} = this.state;
                                            newIndividualGoal.start_date = e.target.value;
                                            this.setState({newIndividualGoal});
                                        })}
                                    />
                                </InputGroupAddon>
                            </FormGroup>  
                            <FormGroup>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText><i className="fas fa-calendar-check mr-2" ></i></InputGroupText>
                                    <InputGroupText>End Date</InputGroupText>
                                    <Input type='date' placeholder="End date" 
                                        name='end_date'
                                        value={this.state.newIndividualGoal.end_date}
                                        onChange={((e)=>{
                                            let {newIndividualGoal} = this.state;
                                            newIndividualGoal.end_date = e.target.value;
                                            this.setState({newIndividualGoal});
                                        })}
                                        />
                                </InputGroupAddon>
                            </FormGroup>                                      
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.createIndividualGoal.bind(this)}>Set</Button>
                            <Button color="danger" onClick={this.closeToggle.bind(this)}>Cancel</Button>
                        </ModalFooter>
                    </Modal> 

                </MDBContainer>
            </section>
        )
    }
}
export default CreateIndividualGoal;