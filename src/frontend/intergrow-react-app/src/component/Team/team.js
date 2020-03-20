import React from 'react';
import CreateTeam from './sections/TeamCreate';
import Header from './sections/teamHeader';
import TeamView from './sections/TeamView';
import { COURSE_API_URL } from '../../constants/utill';
import Axios from 'axios';
import { Redirect } from 'react-router';


class ViewTeam extends React.Component{
    state = {
        teams : [],
        employees:[],
        redirect:false,

        employee:[],
        user:[],
    }
    componentWillMount(){
        if(sessionStorage.getItem('userData')){
            console.log('call user feed');
        }
        else{
        this.setState({redirect:true})
        }

        this.getEmployee();

        // check permission
        this.getEmployeeData();
    }
    getEmployee(){
        Axios.get(COURSE_API_URL + 'employees/').then((response) =>{
            // console.log(response.data);
            this.setState({
                employees : response.data,
            })
        })
    }

    getEmployeeData(){
        console.log("individual "+sessionStorage.getItem('username'));
        Axios.get(COURSE_API_URL + 'users/name/' + sessionStorage.getItem('username')).then((response) => {
            console.log(response.data.id);  
            this.setState({
                user:response.data,
            })
            // find employee by userID
            Axios.get(COURSE_API_URL + 'employee/user/' + response.data.id).then((emp) => {
                console.log(emp.data);
                this.setState({
                    employee:emp.data,
                })
                console.log(emp.role_employee)
                    // Axios.get(COURSE_API_URL + 'individual_goal/employee/' + emp.data.id).then((indGoal) => {
                    //     // console.log(emp.data);
                    //     this.setState({
                    //         goal:indGoal.data,
                    //     })
                    // })
            })

        })
    }

    todayDate() {
        var tempDate = new Date();
        var date = tempDate.getFullYear() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getDate();
        const currDate =date;
        return (
          <p>{currDate}</p>
        );
      }
    render(){
        
        if(this.state.redirect){
            return(<Redirect to={'/login'}/>)
        }
        return(
            <div>
                <Header/>


                <TeamView/>

                {this.state.employee.role_employee === 2 ? <CreateTeam employees={this.state.employees}/> : ''}
                
            </div>
        );
    }
}
export default ViewTeam;