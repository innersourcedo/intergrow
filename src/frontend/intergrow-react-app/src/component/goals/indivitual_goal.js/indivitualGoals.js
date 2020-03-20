import React from 'react';
import Header from './sections/HeaderGoalIndividual';
import { Redirect } from 'react-router';
import IndividualGoalView from './sections/GoalView';
import CreateIndividualGoal from './sections/CreateIndividualGoal';

class IndividualGoal extends React.Component{    
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
                <Header title="Individual Goal"/>

                <IndividualGoalView/>

                <CreateIndividualGoal/>
            </div>
        );
    }
}
export default IndividualGoal;