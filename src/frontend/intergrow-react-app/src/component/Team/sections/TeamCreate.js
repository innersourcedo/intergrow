import React from 'react';
import { MDBBtn, MDBContainer } from 'mdbreact';
import { Badge, Button, FormGroup, Input, InputGroupAddon, InputGroupText, Modal, ModalBody, ModalFooter, ModalHeader, ToastBody, ToastHeader, Collapse, Alert } from 'reactstrap';
import Axios from 'axios';
import { COURSE_API_URL } from '../../../constants/utill';



class CreateTeam extends React.Component{

    constructor(props){
        super(props);
        console.log(this.props.employees);
        this.state = {
            teams : [],
            today:"02/13/2020",
            newTeamData :{
                team_id:'',
                team_name:'',
                leader:'',
                start_date:''
            },
            
            newEmployeeData:{
                team_id:'',
                employee_id:''
            },
            members:2,
            
            isOpen : false,
            newTeamToggleModal : false,        
        }

    }
    
    // componentWillMount(){
    //     this.getEmployee();
    // }
    // getEmployee(){
    //     Axios.get(COURSE_API_URL + `employee/`).then((response) =>{
    //         // console.log(response.data);
    //         this.state({
    //             employees : response.data,
    //         })
    //     })
    // }

    getLeader(id){
        Axios.get(COURSE_API_URL + `employee/${id}`).then((response) =>{
            // console.log(response.data);
            this.state({
                leader : response.data,
            })
        })
    }
    
    newTeamToggle(){
        this.setState({
            newTeamToggleModal:true,
        });
    }

    closeTeamToggle(){
        this.setState({
            newTeamToggleModal:false,
        });
    }   
    createTeam(){
        Axios.post(COURSE_API_URL + 'teams/', this.state.newTeamData).then((response) => {
                console.log(response.date);
                let {teams} = this.state;
                teams.push(response.data);

                // this.successfullyCreated();

                this.setState({
                    teams,
                    newTeamData:false,
                    
                    team_id:'',
                    team_name:'',
                    leader:'',
                    start_date:'',
                    newTeamToggleModal : false,
                })
            });    
        Axios.post(COURSE_API_URL + 'teamEmployees/', this.state.newEmployeeData).then((response)=>{
            
        })
    }

    createEmpForms = () =>{
        let frms = []
            for (let i = 0; i < this.state.members; i++) {
                frms.push(
                <FormGroup>
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText><i className="fas fa-hiking mr-2" ></i></InputGroupText>
                        <Input type="select" name="member" placeholder='Member '
                        //  value={this.state.newTeamData.member} onChange = {(e) =>
                        //     {
                        //         let { newTeamData } = this.state;        
                        //         // newTeamData.member = e.target.value;        
                        //         this.setState({ newTeamData });        
                        //     }}
                        >
                            <option>Member {i+1}</option>
                                {/* {
                                    this.state.employees.map((employee) =>{
                                        return(
                                            <option value={employee.id}>{employee.first_name}</option>
                                        )
                                    })
                                } */}
                        </Input>
                    </InputGroupAddon>
                </FormGroup>   
                )
            }
            return frms;
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
                    <MDBBtn 
                    color = 'primary'                        
                    className={'btn btn-info'}
                    onClick = {this.newTeamToggle.bind(this)}
                    rounded 
                    >
                        <i className="fas fa-plus mr-2" ></i>Create Team</MDBBtn>
                    </span>
                    <Modal isOpen={this.state.newTeamToggleModal} toggle={this.newTeamToggle.bind(this)}>
                        <ModalHeader onClick = {this.newTeamToggle.bind(this)}>Create Team</ModalHeader>
                        <ModalBody>
                        <FormGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText><i className="fas fa-id-card-alt mr-2" ></i></InputGroupText>
                                <Input placeholder="Team Id" value={this.state.newTeamData.team_id} onChange={(e) =>
                                {
                                    let { newTeamData } = this.state;
    
                                    newTeamData.team_id = e.target.value;
    
                                    this.setState({ newTeamData });
    
                                }} />
                                <InputGroupText>TM00X</InputGroupText>
                            </InputGroupAddon>
                        </FormGroup>   
                        <FormGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText><i className="fas fa-users mr-2" ></i></InputGroupText>
                                <Input placeholder="Team Name" value={this.state.newTeamData.team_name} onChange={(e) =>
                                {
                                    let { newTeamData } = this.state;
    
                                    newTeamData.team_name = e.target.value;
    
                                    this.setState({ newTeamData });
    
                                }} />
                            </InputGroupAddon>
                        </FormGroup>   
                        <FormGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText><i className="fas fa-hiking mr-2" ></i></InputGroupText>
                                <Input type="select" name="leader" value={this.state.newTeamData.leader} onChange = {(e) =>
                                    {
                                        let { newTeamData } = this.state;        
                                        newTeamData.leader = e.target.value;        
                                        this.setState({ newTeamData });        
                                    }}
                                >
                                    <option>Leader</option>
                                    {
                                       
                                        this.props.employees.map((employee) =>{
                                            return(
                                                <option value={employee.id}>{employee.first_name}</option>
                                            )
                                        })
                                        
                                    }
                                </Input>
                            </InputGroupAddon>
                        </FormGroup>  
                        <FormGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText><i className="fas fa-calendar-alt mr-2" ></i></InputGroupText>
                                <Input type = 'date' placeholder="Date" value={this.state.newTeamData.start_date} onChange={(e) =>
                                {
                                    let { newTeamData } = this.state;
    
                                    newTeamData.start_date = e.target.value;
    
                                    this.setState({ newTeamData });
                                }} />
                            </InputGroupAddon>
                        </FormGroup>   
                    </ModalBody>
                    <ModalFooter>
                    <Button color="primary" rounded='true' onClick = {this.createTeam.bind(this)}>Create</Button>
                    <Button color="danger" rounded='true'  onClick = {this.closeTeamToggle.bind(this)} >Cancel</Button>
                    </ModalFooter>
                </Modal>
                </MDBContainer>
            </section>
        )
    }
}
export default CreateTeam;