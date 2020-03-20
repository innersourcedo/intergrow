import React from 'react';
import { MDBContainer } from 'mdbreact';
import { Progress } from 'reactstrap';
import { Label } from 'react-bootstrap';
 
const TeamActivityPost = ({posts, loading}) =>{
    if (loading) {
        return(
            <h2>Loading...</h2>
        )
    }
    return(
        
            <MDBContainer> 
                {posts.map(team => (
                    <li key={team.id}><Label>{team.team_name}</Label>                  
                    <Progress value={team.id * 5 / 2} className="pull-right mt-2 mb-2">{team.id * 5 / 2}%</Progress>
                    </li>                    
                ))}  
                
            </MDBContainer>
    )
}
export default TeamActivityPost;
