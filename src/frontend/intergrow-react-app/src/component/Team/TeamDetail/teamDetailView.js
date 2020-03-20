import Axios from 'axios';
import React from 'react';
import { Redirect } from 'react-router';
import { COURSE_API_URL } from '../../../constants/utill';
import { Modal, ModalHeader, ModalFooter } from 'reactstrap';
import { ModalBody, Button } from 'react-bootstrap';

class TeamDetailView extends React.Component{
    
    constructor(props){
        super(props);   
        this.state={
            redirect:false,

            team:[],
            leader:[],

            members:[],
            team_goals:[],

            team_detail:[],

            modalEditToggle:false,

        }
        
    }
    
    
    componentWillMount(){
        if(sessionStorage.getItem('userData')){
            console.log('call user feed');
        }
        else{
            this.setState({redirect:true})
        }
        this.getTeam();
        this.getMember();
        this.getTeamGoals();
        // this.getTeamDetail(); 
    }

    editModalToggle(){
        this.setState({
            modalEditTeam:true,
        })
    }
    editTeamDetails(){
        this.setState({
            modalEditTeam:false,
        })
    }

    getTeam(){
        Axios.get(COURSE_API_URL + 'team/' + this.props.idx).then((response) => {
            // console.log(response.data);
            this.setState({
                team:response.data,
            })
            Axios.get(COURSE_API_URL + `employee/${response.data.leader}`).then((lead) =>{
                // console.log(lead.data.first_name)
                this.setState({
                    leader:lead.data,
                })
            })
        })
    }
    getMember(){
        Axios.get(COURSE_API_URL + 'team_employee_allocation/team/' + this.props.idx).then((response) =>{
            // console.log(response.data);
            this.setState({
                members:response.data,
            })
        })
    }
    getTeamGoals(){
        Axios.get(COURSE_API_URL + 'team_goals/team/' + this.props.idx).then((response) =>{
            // console.log(response.data);
            this.setState({
                team_goals:response.data,
            })
        })
    }   
    render(){
        if(this.state.redirect){
            return(<Redirect to={'/login'}/>)
        }
        return(
            <div className="container w-100 my-5">
                  {/* <div className="container my-5 py-5"> */}


                <section>
                <div className="row">
                    <div className="col-lg-4 col-md-12 mb-4">

                        <div className="media orange lighten-2 text-white z-depth-1 rounded">
                            <i className="fas fa-trophy fa-3x orange z-depth-1 p-4 rounded-left text-white"></i>
                            <div className="media-body">
                            <p className="text-uppercase mt-2 mb-1 ml-3"><small>Team Goal</small></p>
                            <p className="font-weight-bold mb-1 ml-3">{this.state.team_goals.length}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">

                    <div className="media deep-purple lighten-2 text-white z-depth-1 rounded">
                        <i className="fas fa-chart-bar fa-3x deep-purple z-depth-1 p-4 rounded-left text-white"></i>
                        <div className="media-body">
                        <p className="text-uppercase mt-2 mb-1 ml-3"><small>Team Members</small></p>
        <p className="font-weight-bold mb-1 ml-3">{this.state.members.length}</p>
                        </div>
                    </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4">
                    <div className="media pink lighten-2 text-white z-depth-1 rounded">
                        <i className="fas fa-download fa-3x pink z-depth-1 p-4 rounded-left text-white"></i>
                        <div className="media-body">
                        <p className="text-uppercase mt-2 mb-1 ml-3">Responses<small></small></p>
                        <p className="font-weight-bold mb-1 ml-3">12</p>
                        </div>
                    </div>
                    </div>                    
                </div>
                </section>
{/* </div> */}
            <section>
                <div className="row">
                    <div className="col-lg-8 col-md-12 mb-4">
                        <div className="card">
                            <div className="card-header white">
                                <p className="h5-responsive font-weight-bold mb-0"><i className="fas fa-tasks pr-2"></i>Team<i className="fas fa-edit pr-2 float-right" onClick={this.editModalToggle.bind(this)}></i></p>
                                <Modal isOpen={this.state.modalEditToggle}>
                                    <ModalHeader>

                                    </ModalHeader>
                                    <ModalBody>

                                    </ModalBody>
                                    <ModalFooter>
                                        <Button onClick={this.editTeamDetails.bind(this)}>Update</Button>
                                        <Button>Cancel</Button>
                                    </ModalFooter>
                                </Modal>
                            </div>
                            <div className="card-body my-custom-scrollbar">
                                <div className="media">
                                {/* <img className="avatar rounded-circle card-img-64 z-depth-1 d-flex mr-3" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg" alt="Generic placeholder image"/> */}
                                <div className="media-body">
                                    <h6 className="mt-0 pb-3 font-weight-bold text-uppercase"><i className="fas fa-users pr-2"></i>
                                        {this.state.team.team_name} - {this.state.team.team_id}
                                        <span className="small text-muted float-right pr-2">
                                        <i className="far fa-clock pr-1"></i>{this.state.team.start_date}
                                        </span>
                                    </h6>
                                    <tbody>
                                        <tr>
                                            <td className="pr-3 font-weight-light">Leader </td>
                                            <td>: <b className="font-weight-bold">{this.state.leader.first_name + ' ' + this.state.leader.last_name}</b></td>
                                        </tr>
                                        <tr>
                                            <td className="pr-3 font-weight-light">Start Date</td>
                                            <td>: <b className="font-weight-bold">{this.state.team.start_date}</b></td>
                                        </tr>
                                    </tbody>
                                    {/* <p className="mb-0 font-weight-light">Leader : <b className="font-weight-bold"> {this.state.leader.first_name + ' ' + this.state.leader.last_name}</b></p>
                                    <p className="mb-0 font-weight-light">Start Date   : <b className="font-weight-bold">{this.state.team.start_date}</b></p> */}

                                    <div className="media mt-3">
                                    <div className="media-body grey lighten-2 p-3 rounded">
                                    
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 mb-4">
                        <div className="card">
                            <div className="card-header white">
                                <p className="h5-responsive font-weight-bold mb-0"><i className="fas fa-users pr-2"></i>Members</p>
                            </div>
                            <div className="card-body my-custom-scrollbar">
                                <div className="media">
                                {/* <img className="avatar rounded-circle card-img-64 z-depth-1 d-flex mr-3" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg" alt="Generic placeholder image"/> */}
                                <div className="media-body">
                                    {
                                        this.state.members.map((m) =>{
                                            return(
                                                <h6 className="mt-0 font-weight-bold"><i className="fas fa-user pr-2"></i>
                                                {m.member_id.first_name + " " + m.member_id.last_name} 
                                                <span className="small text-muted float-right pr-2">
                                                    <i className="far fa-clock pr-1"></i>5:25 AM</span>
                                                </h6>
                                            )
                                        })
                                    }
                                    <div className="media mt-3">
                                    <div className="media-body grey lighten-2 p-3 rounded">
                                    
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            </div>

            
        )
    }
}
export default TeamDetailView;