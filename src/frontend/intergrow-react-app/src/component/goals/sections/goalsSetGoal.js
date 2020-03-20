import Axios from 'axios';
import { MDBBtn, MDBContainer } from 'mdbreact';
import React from 'react';
import { Button, FormGroup, Input, InputGroupAddon, InputGroupText, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
import { COURSE_API_URL } from '../../../constants/utill';

class GoalsSetGoals extends React.Component{
    // constructor(){
    //     super();
        state = {
            goals:[],
            teams:[],
            employees:[],
            setGoalModal:false,
            // goalOption:'team',
            newGoalData:{
                team:'',
                goal_discription:'',
                start_date:'',
                end_date:''
            },
            goalOption:'team',
        }
        
    // }

    componentWillMount(){
        this.getGoals();
        this.onRadioChanged = this.onRadioChanged.bind(this);
        this.getEmployee();
        this.getTeam();
    }

    createGoal(){
        console.log(this.state.newGoalData);
        Axios.post(COURSE_API_URL + 'team_goals/', this.state.newGoalData).then((response)=>{
            console.log(response.data);
            let {goals} = this.state;
            goals.push(response.data);
            
            this.setState({
                goals,
                newGoalData:{
                team:'',
                goal_discription:'',
                start_date:'',
                end_date:''
                },
                setGoalModal:false,
            });
        });
    }
    getGoals(){
        Axios.get(COURSE_API_URL + 'team_goals/').then((response)=>{  
            this.setState({
                goals:response.data,
            })
        })
    }
    setGoalToggle(){
        this.setState({
            setGoalModal:true,
        })
    }
    closeToggle(){
        this.setState({
            setGoalModal:false,
        })
    }
    getTeam(){
        Axios.get(COURSE_API_URL + 'teams/').then((response)=>{
            console.log(response.data);
            this.setState({
                teams:response.data
            })
        })
    }
    getEmployee(){
        Axios.get(COURSE_API_URL + 'employees/').then((response)=>{
            console.log(response.data);
            this.setState({
                employees:response.data
            })
        })
    }
    onRadioChanged(e){
        console.log(e.target.value);
        this.setState({
            [e.target.name]:e.target.value,
        })
    }

    selectGoalOption(){
        this.setState({
            goalSelectOption:true,
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
                    <div className='b-2'>
                    <div className='mt-3 ml-3 mr-2 float-right'><strong>Complete</strong><div className='p-1 #76ff03 light-green accent-3'></div></div>
                    <div className='mt-3 float-right'><strong>In Progress</strong><div className='p-1 #ffff00 yellow accent-2'></div></div>
                    </div>
                    <MDBBtn 
                    color = 'primary'                                
                    className={'btn btn-info'}
                    onClick = {this.setGoalToggle.bind(this)}
                    >
                        <i className="fas fa-plus mr-2" ></i>Set Goals</MDBBtn>
                        
                    </span>
                    

                    <Modal isOpen={this.state.setGoalModal} toggle={this.setGoalToggle.bind(this)}>    
                    <ModalHeader toggle={this.closeToggle.bind(this)}>Create Goal</ModalHeader>
                    <ModalBody>                        
                        <FormGroup >
                            {/* <InputGroupAddon addonType="prepend"> */}
                                <InputGroupText><i className="fas fa-id-card-alt mr-3" ></i>
                                    <Input type="select" name="teamIn" 
                                    value={this.state.newGoalData.team}
                                    onChange = {((e)=>{
                                        let {newGoalData} = this.state;
                                        newGoalData.team = e.target.value;
                                        this.setState({newGoalData});
                                    })}
                                >
                                    <option>Team</option>
                                    {
                                        this.state.teams.map((team) =>{
                                            return(
                                                <option value={team.id}>{team.team_name}</option>
                                            )
                                        })
                                    }
                                </Input></InputGroupText>
                                {/* </InputGroupAddon> */}
                            </FormGroup> 
                        <FormGroup>
                            {/* <InputGroupAddon addonType="prepend"> */}
                                <InputGroupText><i className="fas fa-lightbulb mr-2" ></i>
                                <Input type='textarea' placeholder="Goal description"
                                name='goal_discription'
                                value={this.state.newGoalData.goal_discription}
                                onChange={((e)=>{
                                    let {newGoalData} = this.state;
                                    newGoalData.goal_discription = e.target.value;
                                    this.setState({newGoalData});
                                })}
                                 /></InputGroupText>
                            {/* </InputGroupAddon> */}
                        </FormGroup> 
                        <FormGroup>
                            {/* <InputGroupAddon addonType="prepend"> */}
                                <InputGroupText><i className="fas fa-calendar-alt mr-2" ></i>
                                <Input type='date' placeholder="start date" 
                                    name='start_date'
                                    value={this.state.newGoalData.start_date}
                                    onChange={((e)=>{
                                        let {newGoalData} = this.state;
                                        newGoalData.start_date = e.target.value;
                                        this.setState({newGoalData});
                                    })}
                                />
                                <InputGroupText>Start Date</InputGroupText>
                                </InputGroupText>
                            {/* </InputGroupAddon> */}
                        </FormGroup>  
                        <FormGroup>
                            {/* <InputGroupAddon addonType="prepend"> */}
                                <InputGroupText><i className="fas fa-calendar-check mr-2" ></i>
                                <Input type='date' placeholder="End date" 
                                    name='end_date'
                                    value={this.state.newGoalData.end_date}
                                    onChange={((e)=>{
                                        let {newGoalData} = this.state;
                                        newGoalData.end_date = e.target.value;
                                        this.setState({newGoalData});
                                    })}
                                     />
                                     <InputGroupText>End Date</InputGroupText></InputGroupText>
                            {/* </InputGroupAddon> */}
                        </FormGroup>                                      
                    </ModalBody>
                    <ModalFooter>
                        <Button color={'danger'} className={'btn-sm'} onClick={this.closeToggle.bind(this)}>Cancel</Button>
                        <Button color={'primary'} className={'btn-sm'} onClick={this.createGoal.bind(this)}>Set</Button>
                    </ModalFooter>
                </Modal> 

                </MDBContainer>
            </section>    
        )
    }
}
export default GoalsSetGoals;