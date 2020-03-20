import Axios from 'axios';
import { MDBContainer, MDBIcon } from 'mdbreact';
import React from 'react';
import { FormGroup } from 'react-bootstrap';
import { Button, Input, InputGroupText, Jumbotron, Modal, ModalBody, ModalFooter, ModalHeader, InputGroupAddon } from 'reactstrap';
import { COURSE_API_URL } from '../../../../constants/utill';
import '../../../../css/team_goal_prog.css';

class GoalProgressView extends React.Component{
    
    constructor(props){
        super(props);   
        this.state={
            goals:[],
            goal_progress:[],
            toggleModal:false,
            modalEdit : false,

            newProgress:{
                goal:this.props.idx,
                progress_description:'',
                progress_date:'',

            },

            editTeamProgress:{
                id:'',
                goal:'',
                progress_description:'',
                progress_date:'',
            }
        }
        
    }
    
    
    componentWillMount(){
        this.getGoal();
        this.getGoalProgress(); 
    }
    getGoal(){
        // console.log(this.props.idx);
        Axios.get(COURSE_API_URL + 'team_goal/'+ this.props.idx).then((response) =>{
            // console.log(response.data);
            this.setState({
                goals:response.data
            })
        })
    }
    editToggle(id){
        Axios.get(COURSE_API_URL + 'goal_progress/' + id).then((response)=>{
            // console.log(response.data);
            this.setState({
                editTeamProgress:{
                    id : response.data.id,
                    goal:response.data.goal,
                    progress_description:response.data.progress_description,
                    progress_date:response.data.progress_date,
                },
                modalEdit:true,
            })
        })

    }
    deleteGoalProgress(id){
        console.log(id);
        Axios.delete(COURSE_API_URL + 'goal_progress/' + id).then((response)=>{
            console.log(response);
            let {goal_progress} = this.state;
            goal_progress.push(response.data);
            this.setState({
                goal_progress
            })
        })

    }
    putTeamGoalProgress(){
        // console.log(this.state.editTeamProgress);
        Axios.put(COURSE_API_URL + 'goal_progress/' + this.state.editTeamProgress.id, this.state.editTeamProgress).then((response) =>{
            // console.log(response.data);
            this.setState({
                modalEdit:false,
            })
        })

    }
    getGoalProgress(){
        Axios.get(COURSE_API_URL + 'goal/goal_progress/' + this.props.idx).then((response)=>{
            console.log(response.data);
            this.setState({
                goal_progress:response.data
            })
        })
    }

    createGoalProgress(){
        // console.log(this.state.newProgress)
        Axios.post(COURSE_API_URL + 'goal_progresses/', this.state.newProgress).then((response)=>{
            console.log(response.data);
            let {goal_progress} = this.state;
            goal_progress.push(response.data);

            this.setState({
                goal_progress,

                // goal:this.props.idx,
                // progress_description:'',
                // progress_date:'',

                newProgress:{
                    goal:this.props.idx,
                    progress_description:'',
                    progress_date:'',    
                },                
                toggleModal:false,
            })
        })
    }

    toggle(){
        this.setState({
            toggleModal:true,
        })
    }
    toggleClose(){
        this.setState({
            toggleModal:false,
            modalEdit:false,
        })
    }
    render(){
        return(
            <div className="container w-100 my-5">
            <section>
                <div className="card">
                <div className="card-header white">
                    <p className="h5-responsive font-weight-bold mb-0"><i className="fas fa-tasks pr-2"></i>Goal : {this.state.goals.goal_discription}

        {this.state.goals.is_complete === true ? <strong className="mb-0 mr-1 ml-1"><MDBIcon icon='check' className='pl-1 pr-1' style={{color:'green'}}/></strong>:<Button className="btn btn-primary btn-sm mb-0 mr-0 float-right" color='primary' onClick={this.toggle.bind(this)}><i className="fas fa-plus p-1"></i></Button> }
        <Button className="btn btn-primary btn-sm mb-0 mr-0 float-right" color='warning' onClick={this.toggle.bind(this)}><i className="fas fa-pen p-1"></i></Button>
                    
                    
                    </p>
                </div>
                <div className="card-body my-custom-scrollbar">
                    <div className="media">
                    {/* <img className="avatar rounded-circle card-img-64 z-depth-1 d-flex mr-3" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg" alt="Generic placeholder image"/> */}
                    <div className="media-body">
                        {/* <h6 className="mt-0 font-weight-bold"><i className="fas fa-trophy pr-2"></i><span className="small text-muted float-right pr-2"><i className="far fa-clock pr-1"></i>5:25 AM</span></h6> */}
                        <p className="mb-0 font-weight-light">Start Date :  {this.state.goals.start_date}</p>
                        <p className="mb-0 font-weight-light">End Date   : {this.state.goals.end_date}</p>

                        <div className="media mt-3">
                        <div className="media-body grey lighten-2 p-3 rounded">
                        { 
                            this.state.goal_progress.map((gp) => {
                                return(
                                <div className='pb-3'>
                                    <h6 className="mt-0 font-weight-bold">
                                        <MDBIcon icon='check' className='pl-2 mr-1'/> 
                                        {gp.progress_description}
                                        <span className="small text-muted float-right pr-2">
                                            <i className="far fa-clock pr-1"></i>
                                            {gp.progress_date}
                                            {/* <Button color='warning' className="btn btn-warning btn-sm mb-0 mr-0">Edit</Button> */}
                                            <Button color='warning' className="btn-sm mb-0 ml-2 m-0 pl-3 pr-3" onClick={()=>{this.editToggle(gp.id)}}><MDBIcon icon={'edit'}/></Button>
                                            <Button color='danger' className="btn-sm mb-0 ml-2 m-0 pl-3 pr-3" onClick={()=>{this.deleteGoalProgress(gp.id).bind(this)}}><MDBIcon icon={'trash-alt'}/></Button>
                                        </span>
                                    </h6>
                                    <hr/>
                                </div>
                                )
                            })
                        }
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="card-footer white py-3">
                    <div className="form-group mb-0">
                    <div className="text-right pt-2">
                        
                        {/* Post */}
                        <Modal isOpen={this.state.toggleModal} toggle={this.toggle.bind(this)}>
                            <ModalHeader toggle={this.toggleClose.bind(this)} >Create Goal</ModalHeader>
                            <ModalBody>
                                <FormGroup>
                                    {/* <InputGroupAddon addonType="prepend"> */}
                                    <InputGroupText><i className="fas fa-pen mr-2" ></i>
                                    <Input placeholder='Progress Description'
                                    value = {this.state.progress_description}
                                    onChange = {(e)=>{
                                        let {newProgress} = this.state;
                                        newProgress.progress_description = e.target.value;
                                        this.setState({newProgress});
                                    }}
                                    
                                    /></InputGroupText>
                                    {/* </InputGroupAddon> */}
                                </FormGroup>
                                <FormGroup>
                                    {/* <InputGroupAddon addonType="prepend"> */}
                                    <InputGroupText><i className="fas fa-calendar-alt mr-2" ></i>
                                    <Input type='date'
                                        value = {this.state.progress_date}
                                        onChange = {(e)=>{
                                            let {newProgress} = this.state;
                                            newProgress.progress_date = e.target.value;
                                            this.setState({newProgress});
                                        }}
                                    /></InputGroupText>
                                    {/* </InputGroupAddon> */}
                                </FormGroup>
                            </ModalBody>
                            <ModalFooter>
                                <Button color={'danger'} className={'btn-sm'} onClick={this.toggleClose.bind(this)}>Cancel</Button>
                                <Button color={'primary'} className={'btn-sm'} onClick={this.createGoalProgress.bind(this)}>Set</Button>
                            </ModalFooter>
                        </Modal>  
                        
                        {/* Put */}
                        <Modal isOpen={this.state.modalEdit} toggle={this.editToggle.bind(this)}>
                            <ModalHeader toggle={this.toggleClose.bind(this)} >Create Goal</ModalHeader>
                            <ModalBody>
                                <FormGroup>
                                    <InputGroupAddon addonType="prepend">
                                    <InputGroupText><i className="fas fa-pen mr-2" ></i></InputGroupText>
                                    <Input placeholder='Progress Description'
                                    value = {this.state.editTeamProgress.progress_description}
                                    onChange = {(e)=>{
                                        let {editTeamProgress} = this.state;
                                        editTeamProgress.progress_description = e.target.value;
                                        this.setState({editTeamProgress});
                                    }}
                                    
                                    />
                                    </InputGroupAddon>
                                </FormGroup>
                                <FormGroup>
                                    <InputGroupAddon addonType="prepend">
                                    <InputGroupText><i className="fas fa-calendar-alt mr-2" ></i></InputGroupText>
                                    <Input type='date'
                                        value = {this.state.editTeamProgress.progress_date}
                                        onChange = {(e)=>{
                                            let {editTeamProgress} = this.state;
                                            editTeamProgress.progress_date = e.target.value;
                                            this.setState({editTeamProgress});
                                        }}
                                    />
                                    </InputGroupAddon>
                                </FormGroup>
                            </ModalBody>
                            <ModalFooter>
                                <Button color={'danger'} className={'btn-sm'} onClick={this.toggleClose.bind(this)}>Cancel</Button>
                                <Button color={'warning'} className={'btn-sm'} onClick={this.putTeamGoalProgress.bind(this)}>Update</Button>
                            </ModalFooter>
                        </Modal>


                    </div>
                    </div>
                </div>
                </div>

            </section>

            </div>

            
        )
    }
}
export default GoalProgressView;