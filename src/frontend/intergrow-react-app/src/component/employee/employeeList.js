import axios from 'axios';
import React from "react";
import { Redirect } from 'react-router';
import { COURSE_API_URL } from '../../constants/utill';
import CreateEmployee from './sections/createEmployee';
import EmployeeHeader from './sections/employeeHeader';
import EmpTab from './sections/employeeTable/empTab';


// const COURSE_API_URL = 'http://localhost:8000/';

class EmployeeList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            employees: [],  
            redirect:false,
        }
    }

    
// Initial stage
    componentWillMount()
    {
        if(sessionStorage.getItem('userData')){
            console.log('call user feed');
          }
          else{
            this.setState({redirect:true})
          }

        this._refreshEmployee();
    }
    _refreshEmployee()
    {
        axios.get(COURSE_API_URL + 'employees/').then((response) =>
        {
            this.setState({
                employees: response.data
            });
            // console.log(this.state.employees);
        });
    }
// End    
    render()
    {
        if(this.state.redirect){
            return(<Redirect to={'/login'}/>)
        }

        return (

            <div>
                
                <EmployeeHeader/>     
                    
                <div className="container ">
                    {/* <EmployeeTableView employees={this.state.employees}/> */}
                    <EmpTab/>
                    <CreateEmployee/>
                </div>
            </div>

        );
    }
}
export default EmployeeList;



