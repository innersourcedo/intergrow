import React from 'react';
import Axios from 'axios';
import { COURSE_API_URL } from '../../../../constants/utill';

class TopAskers extends React.Component{
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

            <div class="card my-0 py-5 px-md-5 z-depth-1">
                <div className="card-header font-weight-bold">
                <span><h2>Top Mentee Request</h2></span>
                </div>
                <section class="text-center text-lg-left dark-grey-text">            
                    {/* <div class="text-center font-weight-bold"><span>4</span> comments</div> */}
                    {
                        this.state.employees.slice(0, 3).map((emp) => {
                            return(
                            <div class="media d-block d-md-flex mt-3" key={emp.id}>
                                <img class="card-img-64 rounded z-depth-1 d-flex mx-auto mb-2"
                                src="https://mdbootstrap.com/img/Photos/Avatars/img (20).jpg" alt="Generic placeholder image"/>
                                <div class="media-body text-center text-md-left ml-md-3 ml-0">
                                <p class="font-weight-bold my-0">
                            {emp.first_name}<span class="badge badge-info ml-3">
                                {/* <i class="far fa-clock pr-1"></i> */}
                                {emp.id * 4 / 2} Questions</span>
                                </p>  
                                    {emp.email}                              
                                </div>
                            </div>
                            )
                        })
                    }
                    
                </section>
        
        
        </div>
        
        )
    }

}
export default TopAskers;