// import { React } from 'react';
// import EmployeeView from './subEmployeeView';



// const ProfileView = () =>{
//     return(
//         <section>
//             <div className="row mr-4 ml-4 mb-2 text-align-center pt-4">
//                 <div className='col-lg-12 col-md-12 col-sm-12 mr-0'>
//                     {/* <TopAskers/> */}
//                     {/* <EmployeeView/> */}
//                 </div>
//                 <div className='col-lg-6 col-md-6 col-sm-12 mr-0'>
//                     {/* <TopResponsers/> */}
//                 </div>
//                 <div className='col-lg-6 col-md-6 col-sm-12 mr-0'>
//                     {/* <TopBestQ/> */}
//                 </div>
//                 <div className='col-lg-6 col-md-6 col-sm-12 mr-0'>
//                     {/* <TopBestA/> */}
//                 </div>                
//             </div>
//         </section>    
//     )

// }
// export default ProfileView;


import React from 'react';
import EmployeeView from './subEmployeeView';
import UserView from './subUserView';
import GroupView from './subGoupView';
import { COURSE_API_URL } from '../../../../constants/utill';
import Axios from 'axios';
import { Redirect } from 'react-router';

class ProfileView extends React.Component {
    constructor(props){
        super(props);
        this.state={
            username:sessionStorage.getItem('username'),
            employee:[],
            user:[],
            goal:[],
            teamAllocation:[],
            redirect:false,
        }
    }

    componentDidMount(){
        if(sessionStorage.getItem('userData')){
            console.log('call user feed');
          }
          else{
            this.setState({redirect:true})
          }

        this.getEmployee();        
    }
    getEmployee(){
        console.log("individual "+sessionStorage.getItem('username'));
        Axios.get(COURSE_API_URL + 'users/name/' + sessionStorage.getItem('username')).then((response) => {
            // console.log(response.data.id);  
            this.setState({
                user:response.data,
            })
            // find employee by userID
            Axios.get(COURSE_API_URL + 'employee/user/' + response.data.id).then((emp) => {
                // console.log(emp.data);
                this.setState({
                    employee:emp.data,
                })

                    Axios.get(COURSE_API_URL + 'individual_goal/employee/' + emp.data.id).then((indGoal) => {
                        // console.log(emp.data);
                        this.setState({
                            goal:indGoal.data,
                        })
                    })
                    // team_employee_allocation/team/emp
                    Axios.get(COURSE_API_URL + 'team_employee_allocation/team/emp/' + emp.data.id).then((teamAllocation) => {
                        // console.log(emp.data);
                        this.setState({
                            teamAllocation:teamAllocation.data,
                            // allocation for different teams
                        })
                    })
            })

        })
    }
    
    
    render(){
        if(this.state.redirect){
        return(<Redirect to={'/login'}/>)
    }
    return(
        <section>
            <div className="row mr-4 ml-4 mb-2 text-align-center pt-4">
                <div className='col-lg-12 col-md-12 col-sm-12 mr-0'>
                <EmployeeView employee={this.state.employee} goal={this.state.goal} teamAllocation={this.state.teamAllocation}/>
                </div>
            </div>
            <div className="row mr-4 ml-4 mb-2 text-align-center pt-4">
                <div className='col-lg-8 col-md-12 col-sm-12 mr-0'>
                   <UserView user={this.state.user}/>
                </div>
                <div className='col-lg-4 col-md-12 col-sm-12 mr-0'>
                    <GroupView employee={this.state.employee}/>
                </div>
            </div>
        </section>    
    )
    }
}
export default ProfileView;
