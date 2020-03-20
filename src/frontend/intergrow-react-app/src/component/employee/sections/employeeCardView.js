import React from 'react';
import { COURSE_API_URL } from '../../../constants/utill';
import Axios from 'axios';

class EmployeeCardView extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            employees:[],
        }
    }
    componentWillMount(){
        this.getEmployee();
    }
    
    getEmployee(){
        Axios.get(COURSE_API_URL + 'employees/').then((response)=>{
            this.setState({
                employees:response.data,
            })
        })
    }
    render(){
        return(
            
            
                
            <div class="text-center text-uppercase d-flex align-items-center ">
                    <div className='row  pr-lg-5'>
                        {this.state.employees.map((emp)=>{
                            return(
                                <div class="card col-lg-3 col-md-6 col-sm-12 ml-0 mt-4">
                                    <div class="view view-cascade gradient-card-header blue-gradient">
                                        <h2 class="card-header-title mb-3">{emp.first_name}</h2>
                                        <p class="card-header-subtitle mb-0">Deserve for own card</p>
                                    </div>
                                    <div class="card-body card-body-cascade text-center">
                                        <p class="card-text">laboriosam.</p>
                                        <hr/>
                                        <a class="px-2 fa-lg tw-ic"><i class="fab fa-twitter"> </i></a>
                                        <a class="px-2 fa-lg li-ic"><i class="fab fa-linkedin-in"> </i></a>
                                        <a class="px-2 fa-lg fb-ic"><i class="fab fa-facebook-f"> </i></a>
                                        <a class="px-2 fa-lg email-ic"><i class="fas fa-envelope"> </i></a>
                                    </div>
                                </div>

                            )
                        })}
                </div>
            </div>
        )
    }
}
export default EmployeeCardView;


