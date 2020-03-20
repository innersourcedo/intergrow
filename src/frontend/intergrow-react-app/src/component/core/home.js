import { default as axios, default as Axios } from 'axios';
import { MDBContainer } from 'mdbreact';
import React from 'react';
import '../../css/home.css';
//response for carousel **** 
import "react-multi-carousel/lib/styles.css";
import { Redirect } from "react-router-dom";
// api
import { COURSE_API_URL } from '../../constants/utill';
import AdminEmmployeeCard from './section/AdminEmployeeCard';
import AdminGoalsCard from './section/AdminGoalsCard';
import AdminOverallProgressCard from './section/AdminOverallProgressCard';
import AdminTitleCard from './section/AdminTitleCard';
import TeamPost from './section/teamActivity.js/teamPost';





/**Backend API */
// const COURSE_API_URL = 'http://localhost:8000/employees/';


class Home extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {
          employees: [],
          helps : [],  
          responses : [],     
          teams : [], 
          goals:[],
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

        this.getEmployees();
        this.getHelps();
        this.getResponses();
        this.getTeams();
        this.getGoals();
    }

    getEmployees()
    {
        axios.get(COURSE_API_URL + 'employees/').then((response) =>
        {
            this.setState({
                employees: response.data
            })
        });

    }
  getHelps(){
    Axios.get(COURSE_API_URL + 'helps/').then((respone) => {
      this.setState({
          helps:respone.data
      }) 
    });
  }
  getResponses(){
    Axios.get(COURSE_API_URL + 'responses/').then((respone) => { 
          this.setState({
            responses:respone.data
          }) 
    });
  }
  getTeams(){
    Axios.get(COURSE_API_URL + 'teams/').then((respone) => {  
          this.setState({
            teams:respone.data
          }) 
    });
  }
  getGoals(){
    Axios.get(COURSE_API_URL + 'team_goals/').then((response) => {
      this.setState({
        goals:response.data,
      })
    })
  }
    render() {

    if(this.state.redirect){
      return(<Redirect to={'/login'}/>)
    }
    

    return(
        <React.Fragment>
        <div> 
            <AdminTitleCard/>
            {/* <div class=" z-depth-1">
              <section class="dark-grey-text">
                <div class="row pr-lg-5">
                  <div class="col-md-7 mb-4">
                    <div class="view">
                      <img src="https://mdbootstrap.com/img/illustrations/drawkit-drawing-man-colour.svg" class="img-fluid" alt="smaple image"/>
                    </div>
                  </div>
                  <div class="col-md-5 d-flex align-items-center text-justify">
                    <div>
                      <h3 class="font-weight-bold mb-4 ">Intergrow</h3>

                      <p class="text-justify">Mentee requests for a help, Mentor reponses to help for the requested activity by Mentee.For the 1st phase we assume that Mentee and Mentor are only responsible for software
                        development tasks.Assuming that mentee requests help for a code review activity and receive help from a Mentor. Based on completion of this activity, Following data source will be used
                        to obtain data to relate intergrow activity to real user story and rest of other tracking data.
                      </p>

                    </div>
                  </div>
                </div>
              </section>
              </div> */}
            
            <MDBContainer xl="1" className='w-100'>

            
            
                <AdminGoalsCard 
                    help={this.state.helps} 
                    responses = {this.state.responses} 
                    teams = {this.state.teams}
                    employees = {this.state.employees}
                    goals = {this.state.goals}
                />  

                {/* <AdminTeamCard/>   */}
                <TeamPost/>

                <AdminEmmployeeCard/>

                <AdminOverallProgressCard/>
            </MDBContainer>
    </div>    
    </React.Fragment>
            
    );    
    }
}

export default Home;

