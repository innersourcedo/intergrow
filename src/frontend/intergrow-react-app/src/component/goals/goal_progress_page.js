import React from 'react';
import HeaderGoalProgress from './sections/goal_progress/goalProgressHeader';
import GoalProgressView from './sections/goal_progress/goalProgressView';
import { Redirect } from 'react-router';


class GoalProgress extends React.Component{    
    constructor(props){
        super(props);
        this.state = {
            redirect:false,
        }
    }
    componentWillMount()
    {
        if(sessionStorage.getItem('userData')){
            console.log('call user feed');
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
            <div className=''>   
                <HeaderGoalProgress/> 

                <GoalProgressView idx={this.props.match.params.id}/>
            </div>
        );
    }
}
export default GoalProgress;