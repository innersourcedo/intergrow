
import React from 'react';
import { COURSE_API_URL } from '../../../../constants/utill';
import Axios from 'axios';

class GroupView extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            role_id:1,      
            role_employee:[],      
        }
    }
    componentDidMount(){
        this.getEmpRole();
    }
    getEmpRole(){
        Axios.get(COURSE_API_URL + `role_employee/${1}`).then((resRolEmp)=>{
            console.log(resRolEmp.data);
            this.setState({
                role_employee:resRolEmp.data,
            })
        })
    }
    render(){
        return(
                <div className="card">
                    <div className="card-header white">
                        <p className="h5-responsive font-weight-bold mb-0"><i className="fas fa-users pr-2"></i>Role & Permissions<div className="float-right"><i className="fas fa-edit pr-2"></i></div></p>
                    </div>
                    <div className="card-body my-custom-scrollbar">
                        <div className="media">
                        {/* <img className="avatar rounded-circle card-img-64 z-depth-1 d-flex mr-3" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg" alt="Generic placeholder image"/> */}
                        <div className="media-body">
                            <h6 className="mt-0 pb-3 font-weight-bold text-uppercase">
                                {/* <i className="fas fa-users pr-2"></i> */}
                                {/* {this.state.team.team_name} - {this.state.team.team_id} */}
                                <span className="small text-muted float-right pr-2">
                                <i className="far fa-clock pr-1"></i>last update
                                {/* {this.state.team.start_date} */}
                                </span>
                            </h6>
                            <tbody>
                                <tr>
                                    <td className="pr-3 font-weight-light">Role </td>
                                    <td>: {this.state.role_employee.role_discription}<b className="font-weight-bold">
                                        {/* {this.state.leader.first_name + ' ' + this.state.leader.last_name} */}
                                        </b></td>
                                </tr>
                                {/* <tr>
                                    <td className="pr-3 font-weight-light">Permissions</td>
                                    <td>: <b className="font-weight-bold">
                                        </b></td>
                                </tr> */}
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
        )
    }

}
export default GroupView;
