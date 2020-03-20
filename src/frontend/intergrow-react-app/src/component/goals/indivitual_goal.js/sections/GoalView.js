import Axios from 'axios';
import { MDBContainer } from 'mdbreact';
import React from 'react';
import { Badge, Jumbotron, Label, Progress, ToastHeader, Alert } from 'reactstrap';
import { COURSE_API_URL, BG_COLOR } from '../../../../constants/utill';
import PaginationCust from '../../../../constants/Pagination';



class IndividualGoalView extends React.Component{
    
    state={
        individual_goals:[],
        isOpen:false,
        team:[],
        loading : false,
        currentPage :1,
        postsPerPage :5,
    }
    // get current posts
    componentDidMount(){
        this.getIndividualGoals();
    }
    getIndividualGoals(){
        console.log("individual "+sessionStorage.getItem('username'));
        Axios.get(COURSE_API_URL + 'users/name/' + sessionStorage.getItem('username')).then((response) => {
            // console.log(response.data.id);   

            // find employee by userID
            Axios.get(COURSE_API_URL + 'employee/user/' + response.data.id).then((emp) => {
                // console.log(emp.data);
        
                Axios.get(COURSE_API_URL + 'individual_goal/employee/' + emp.data.id).then((response) =>{
                    // console.log(response.data);
                    this.setState({
                        individual_goals:response.data,
                    })
                })
            })
        })
    }
    toggle(){
        if(this.state.isOpen === false){
            this.setState({
                isOpen:true,
            })            
        }
        else{
            this.setState({
                isOpen:false,
            })
        }
    }
    render(){
        const indexOfLastPage = this.state.currentPage * this.state.postsPerPage;
        const indexOfFirstPage = indexOfLastPage - this.state.postsPerPage;
        const currentPosts = this.state.individual_goals.slice(indexOfFirstPage, indexOfLastPage); 

        const paginate = pageNumber => this.setState({currentPage:pageNumber});

        let viewGoals = currentPosts.map((goal) =>{
            return(

                <MDBContainer className={goal.is_inprogress === true ? '#ffff00 yellow accent-2 card mb-2' : '#76ff03 light-green accent-3 card mb-2'} key={goal.id}>
                    <a href={'/individual_goals/progress/' + goal.id} >   
                    <ToastHeader>
                    {/* <ChildComponent tmId={1}/>    */}
                    &nbsp; {goal.goal_discription}&nbsp; 
                    <small>{goal.start_date}</small> &nbsp;
                    {/* <Badge color="warning" className='end'>
                        Edit
                    </Badge> */}
                    </ToastHeader>
                    </a>
                </MDBContainer>
            )
        })


        return(
            <section>
                <MDBContainer className="card pt-3 mt-4" style={{
                    display: "flex",
                    // justifyContent: "center",
                    alignItems: "center",
                    backgroundColor:"rgb(175, 200, 209)",
                    height:'250px'
                    }}>
                        {/* <MDBContainer className='col-lg-12 col-md-12 col-sm-12 mr-0'> */}
                            {/* <Jumbotron className='mb-1 pb-4 pt-5'>   */}
                            {viewGoals}
                            {/* </Jumbotron>                              */}

                                           
                        {/* </MDBContainer> */}

                        {/* <MDBContainer className=" col-lg-4 col-md-4 col-sm-12 ml-0">
                            <Jumbotron>
                                    <p className="lead">Top Goal Activities</p>
                                <hr className="my-0" />
                                <MDBContainer>   
                                    <Label>Completed</Label>                  
                                    <Progress value="25" color="success" className="pull-right mt-2 mb-2">25%</Progress>
                                    <Label>In Progress</Label>     
                                    <Progress value={50} color="warning" className="pull-right mt-2 mb-2">50%</Progress>
                                    <Label>Deadline Missed</Label>     
                                    <Progress value={75} color="danger" className="pull-right mt-2 mb-2">75%</Progress>
                                </MDBContainer>  
                            </Jumbotron>
                        </MDBContainer> */}
                </MDBContainer>
            {/* </div> */}
            <div className='mt-2 pt-2' color={BG_COLOR} style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    // backgroundColor:"rgb(175, 200, 209)"
                    }}>
                    {
                        currentPosts.length > 0 ? <PaginationCust postsPerPage={this.state.postsPerPage} totalPosts={this.state.individual_goals.length} paginate={paginate}/>
                        : <Alert color="danger">Nothing Goal available!</Alert>
                    }                      
            </div>    
        </section>      
        )
    }
}
export default IndividualGoalView;