import React, { Component } from 'react';
// import 'mdbreact/dist/css/mdb.css';
import UserImg from '../../../../assets/user.png'; 

class EmployeeView extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
    return(        
        <div class="card">
            <div class="row">
                <div class="col-md-12 col-lg-12 mx-auto">
                <section>
                    <div class="card testimonial-card">
                        {/* <img src={UserImg}  className="rounded-circle img-fluid w-25" alt="User"/> */}
                        <div class="card-up info-color-dark p-3 white-text" color='info'>
                        <p class="font-weight-normal mb-0">{this.props.employee.full_name}</p>
                        <p class="small mb-0">JavaScript Developer</p>
                        </div>
                        
                        <div class="card-up info-color"></div>
                        <div class="avatar mx-auto">
                        
                        </div>

                        <div class="card-body card px-3 py-4 white">
                        <div class="row">
                            <div class="col-3 text-center">
                            <p class="font-weight-bold mb-0">{this.props.goal.length}</p>
                            <p class="small text-uppercase mb-0">Individual Goal</p>
                            </div>
                            <div class="col-3 text-center border-left border-right">
                            <p class="font-weight-bold mb-0">{this.props.teamAllocation.length}</p>
                            <p class="small text-uppercase mb-0">Team Participation</p>
                            </div>
                            <div class="col-3 text-center border-left border-right">
                            <p class="font-weight-bold mb-0">{this.props.teamAllocation.length}</p>
                            <p class="small text-uppercase mb-0">Lead Team</p>
                            </div>
                            <div class="col-3 text-center">
                            <p class="font-weight-bold mb-0">27</p>
                            <p class="small text-uppercase mb-0">Response</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
                </div>
            </div>
        </div>
           
    )
    }
}
export default EmployeeView;