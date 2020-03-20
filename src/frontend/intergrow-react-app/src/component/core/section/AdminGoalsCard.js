import React from 'react';
import { MDBCard, Link, MDBCardBody, MDBIcon, MDBRow, MDBCol, MDBCardText } from 'mdbreact';


class AdminGoalsCard extends React.Component{
  render(){
    let countHelp = this.props.help.length;
    let countResponses = this.props.responses.length;
    let countTeams = this.props.teams.length;
    let countEmployees = this.props.employees.length;
    let countGoals = this.props.goals.length;


    return (
        <div className="card mb-4 mt-3 wow fadeIn px-1">

          <div className="card-header font-weight-bold">
              <span><h2>Goals Reached</h2></span>
          </div>
          <span className="pull-right m-2 mt-5">
            <MDBRow className="mb-4">
              <MDBCol xl="3" md="6" className="mb-r">
                <Link to='/employeelist/'>
                <MDBCard className="cascading-admin-card">
                    <div className="admin-up">
                    <MDBIcon icon="users" className="red accent-2"/>
                      <div className="data">
                        <p>Employees</p>
                        <h4>
                          <strong>{countEmployees}</strong>
                        </h4>
                      </div>
                    </div>
                    <MDBCardBody>
                      {/* <div className="progress">
                        <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" className="progress-bar bg-primary" role="progressbar"
                          style={{width: '25%'}}></div>
                      </div>
                      <MDBCardText>Better than last week (25%)</MDBCardText> */}
                    </MDBCardBody>
                  </MDBCard>
                  </Link>
              </MDBCol>
              <MDBCol xl="3" md="6" className="mb-r">
                <Link to='/teams/'>
                <MDBCard className="cascading-admin-card">
                    <div className="admin-up">
                    <MDBIcon icon="people-carry" className="light-blue lighten-1"/>
                      <div className="data">
                        <p>Teams</p>
                        <h4>
                          <strong>{countTeams}</strong>
                        </h4>
                      </div>
                    </div>
                    <MDBCardBody>
                      {/* <div className="progress">
                        <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" className="progress-bar grey darken-2" role="progressbar"
                          style={{width: '75%'}}></div>
                      </div>
                      <MDBCardText>Worse than last week (75%)</MDBCardText> */}
                    </MDBCardBody>
                  </MDBCard>
                  </Link>
              </MDBCol>
              <MDBCol xl="3" md="6" className="mb-r"  onClick='route'>            
                <Link to={"/help/"} >  
                  <MDBCard className="cascading-admin-card">
                      <div className="admin-up">
                      <MDBIcon icon="hands-helping" className="primary-color"/>
                      <div className="data">
                          <p className='m-0 p-0'> Responses</p><strong><i class="fas fa-arrow-down mr-2" ></i>{countEmployees}</strong>
                          <p className='m-0 p-0'> Help</p><strong className='m-0 p-0'><i class="fas fa-arrow-up mr-2" ></i>1{countResponses}</strong>
                        </div>
                        
                      </div>
                      
                      <MDBCardBody>
                        {/* <div className="progress mb-1">
                          <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" className="progress-bar bg-primary" role="progressbar"
                            style={{width: {countHelp}}}>Helps</div>
                        </div>
                        <div className="progress">
                          <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" className="progress-bar bg-success" role="progressbar"
                            style={{width: {countResponses}}}>Responses</div>
                        </div>
                        <MDBCardText>Better than last week (25%)</MDBCardText> */}
                      </MDBCardBody>
                    </MDBCard>
                  </Link>
                </MDBCol>
                <MDBCol xl="3" md="6" className="mb-r">
                  <Link to={"/goals/"} >  
                  <MDBCard className="cascading-admin-card">
                      <div className="admin-up">
                      <MDBIcon icon="fas fa-trophy" className="warning-color"/>
                        <div className="data">
                          <p>Goal</p>
                          <h4>
                            <strong>{countGoals}</strong>
                          </h4>
                        </div>
                      </div>
                      <MDBCardBody>
                        {/* <div className="progress">
                          <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" className="progress-bar bg grey" role="progressbar"
                            style={{width: '25%'}}></div>
                        </div>
                        <MDBCardText>Worse than last week (25%)</MDBCardText> */}
                      </MDBCardBody>
                    </MDBCard>
                    </Link>
                </MDBCol>
                
              </MDBRow>
          </span>
      </div>

    )
  }
}
export default AdminGoalsCard;

