import React from 'react';
import HeaderGoal from './sections/goalsHeader';
import GoalsView from './sections/goalsView';
import GoalsSetGoals from './sections/goalsSetGoal';
import { Redirect } from 'react-router';


class goals extends React.Component{    
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
                <HeaderGoal/>   

                {/* <GoalsSetGoals/> */}

                <GoalsView/>

                <GoalsSetGoals/>
            </div>
        );
    }
}
export default goals;