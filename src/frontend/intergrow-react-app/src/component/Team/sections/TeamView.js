import Axios from 'axios';
import { MDBContainer } from 'mdbreact';
import React from 'react';
import { Badge, ToastHeader, Alert } from 'reactstrap';
import { COURSE_API_URL, BG_COLOR } from '../../../constants/utill';
import PaginationCust from '../../../constants/Pagination';

class TeamView extends React.Component{
    state = {
        teams : [],
        employees:[],
        leader:[],
        today:"02/13/2020",
        newTeamData :{
            team_id:'',
            team_name:'',
            leader:'',
            start_date:''
        },
        
        newEmployeeData:{
            team_id:'',
            employee_id:''
        },
        members:2,        
        isOpen : false,
        newTeamToggleModal : false,
        
        currentPage :1,
        postsPerPage :5,
    }
   
    componentWillMount(){
        this.getTeams();   
        this.getEmployee();  
        this.getTeamById('TM001');   
    }
    getTeams(){
        Axios.get(COURSE_API_URL + 'teams/').then((response) => {
            this.setState({
                teams : response.data,
            })
        });        
    }
    getTeamById(id){
        Axios.get(COURSE_API_URL + `team/${id}`).then((response)=>{
            console.log(response.data);
        });
    }
    getEmployee(){
        Axios.get(COURSE_API_URL + 'employees/').then((response) => {
            console.log(response.data);
            this.setState({
                employees : response.data,
            })
        });
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
        const currentPosts = this.state.teams.slice(indexOfFirstPage, indexOfLastPage); 

        const paginate = pageNumber => this.setState({currentPage:pageNumber});

        let viewTeam = currentPosts.map((team) =>{
            return(                
                <MDBContainer className=' mb-2 #90caf9 blue lighten-3' key={team.team_id}>
                    <a href={'/team/'+ team.id}>
                    <ToastHeader>   
                    {/* <Badge color="warning">Edit</Badge> &nbsp;                  */}
                    <strong>{team.team_name}</strong>&nbsp;
                    <small>{team.start_date}</small>
                    </ToastHeader>
                    </a>
                </MDBContainer>                
            )
        })
        return(
            <section>
                <MDBContainer className="card p-4 mt-4" style={{
                    display: "flex",
                    // justifyContent: "center",
                    alignItems: "center",
                    backgroundColor:"rgb(175, 200, 209)",
                    height:'250px'
                    }}>
                    {viewTeam}
                    {/* <PaginationCust  postsPerPage={this.state.postsPerPage} totalPosts={this.state.teams.length} paginate={paginate}/> */}

                    
                </MDBContainer>
                <div className='mt-2 pt-2' color={BG_COLOR} style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    // backgroundColor:"rgb(175, 200, 209)"
                    }}>
                    {
                        currentPosts.length > 0 ? <PaginationCust  postsPerPage={this.state.postsPerPage} totalPosts={this.state.teams.length} paginate={paginate}/>


                        : <Alert color="danger">
                                Nothing Goal available!
                            </Alert>
                    }                      
            </div> 
                
            </section>  
        )
    }
}
export default TeamView;