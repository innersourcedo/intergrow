import { MDBContainer } from 'mdbreact';
import React from 'react';
import { Label, Progress } from 'reactstrap';


class AdminTeamCard extends React.Component{
    render(){
        return(
            <div className="card mb-4 mt-3 wow fadeIn">

            <div className="card-header font-weight-bold">
                <span><h2>Team Activities</h2></span>
            </div>
            <span className="pull-right m-2">
            <MDBContainer>   
                <Label>Team 1</Label>                  
                <Progress value="25" className="pull-right mt-2 mb-2">25%</Progress>
                <Label>Team 2</Label>     
                <Progress value={50} className="pull-right mt-2 mb-2">1/2</Progress>
                <Label>Team 3</Label>     
                <Progress value={75} className="pull-right mt-2 mb-2">You're almost there!</Progress>
                <Label>Team 4</Label>     
                <Progress color="success" value="100" className="pull-right mt-2 mb-2">You did it!</Progress>
                <Label>Team 5</Label>     
                <Progress multi className="pull-right mt-2 mb-2">
                    <Progress bar value="15">Meh</Progress>
                    <Progress bar color="success" value="30">Wow!</Progress>
                    <Progress bar color="info" value="25">Cool</Progress>
                    <Progress bar color="warning" value="20">20%</Progress>
                    <Progress bar color="danger" value="5">!!</Progress>
                </Progress>  
            </MDBContainer>  
                                         
            </span>
            </div>

        )
    }
}
export default AdminTeamCard;