import React from 'react';
import TeamDetailHeader from './TeamDetail/header';
import { Redirect } from 'react-router';
import TeamDetailView from './TeamDetail/teamDetailView';

class TeamDetails extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            redirect:false,
        }
    }
    componentWillMount()
    {
        if(sessionStorage.getItem('userData')){
            console.log('team goals');
          }
          else{
            this.setState({redirect:true})
          }
    }
    render(){
        if(this.state.redirect){
            return(<Redirect to={'/login'}/>)
        }
        return(
            
            <div>
                <TeamDetailHeader/>
                {/* idx={this.props.match.params.id} */}

                <TeamDetailView idx={this.props.match.params.id}/>


            </div>
        );
    }
}
export default TeamDetails;