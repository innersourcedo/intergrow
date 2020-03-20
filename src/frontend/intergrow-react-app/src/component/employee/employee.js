import axios from 'axios';
import { MDBBtn, MDBContainer } from 'mdbreact';
import React from "react";
import { COURSE_API_URL, TITLE_COLOR } from '../../constants/utill';
import EmployeeCardView from './sections/employeeCardView';
import { Redirect } from 'react-router';


class EmployeeView extends React.Component {
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

        this._refreshProject();
    }

    _refreshProject()
    {
        axios.get(COURSE_API_URL + 'empoyees/').then((response) =>
        {
            this.setState({
                employees: response.data
            })
            console.log(this.state.employees);
        });

    }
// End

    render()
    {        
        if(this.state.redirect){
            return(<Redirect to={'/login'}/>)
        }

    let employeeRaw = this.state.employees.map((employee) =>
        {    
            return (
                <tr key={employee.employee_id}>
                    {/* contenteditable="true" */}
                    <td className="pt-3-half" >{employee.employee_id}</td>
                    <td className="pt-3-half" >{employee.first_name}</td>
                    <td className="pt-3-half" >{employee.email}</td>
                    <td className="pt-3-half" >{employee.phone_number}</td>
                    <td className="pt-3-half">
                        {/* <span className="table-remove"><button type="button"
                            className="btn btn-warning btn-rounded btn-sm my-0" onClick={this.editProject.bind(this, project.projectId, project.projectName, project.start_date, project.end_date, project.discription)}>Edit</button></span> */}
                    <span className="table-remove"><button type="button"
                            className="btn btn-warning btn-rounded btn-sm my-0">Edit</button></span>
                    </td>
                    <td>
                        <span className="table-remove"><button type="button"
                            className="btn btn-danger btn-rounded btn-sm my-0">Remove</button></span>
                    </td>
                </tr>
            )
        });
    

        return (
            

            <div className="">
                <section className={"card wow fadeIn text-uppercase "+ TITLE_COLOR}>
                {/* <!-- Content --> */}
                <div class="card-body text-white text-center py-1 px-8 my-3">
                    <h1 class="mb-4">
                        <strong>Emloyees</strong>
                    </h1>
                    <p>
                        <strong>Join with intergrow activities</strong>
                    </p>
                </div>
                {/* <!-- Content --> */}
                </section>
                <section>
                    <div className="card mb-2 mt-2 pt-2 pb-2 wow fadeIn">

                        <MDBContainer>
                        <MDBBtn rounded href="/employeelist" className={'btn btn-info'} style = {{'background-color':'blue'}}><i class="fas fa-list mr-2" ></i>Employee List</MDBBtn>
                        {/* <MDBBtn rounded href="/employeelist" className={'btn btn-info'} style = {{'background-color':'blue'}}><i class="fas fa-list mr-2 " ></i>Employee List</MDBBtn> */}
                        
                        </MDBContainer>
                    </div>
                </section>
                    <section >
                        <div class="card px-5 align-items-center">
                            <EmployeeCardView/>
                        </div>
                    </section>
                </div>

        );
    }
}
export default EmployeeView;



