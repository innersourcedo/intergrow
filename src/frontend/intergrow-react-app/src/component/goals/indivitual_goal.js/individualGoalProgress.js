import React from 'react';
import { Redirect } from 'react-router';
import IndiGoalProgressView from './sections/IndiGoalProgressView';
import IndProgHeader from './sections/IndProgHeader';

class IndividualGoalProgress extends React.Component{    
    constructor(props){
        super(props);
        this.state = {
            redirect:false,
        }
    }
    componentWillMount()
    {
        if(sessionStorage.getItem('userData')){
            // console.log('call user feed');
            this.setState({redirect:false})
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
                <IndProgHeader/>
                <IndiGoalProgressView idx={this.props.match.params.id}/>
            </div>
        );
    }
}
export default IndividualGoalProgress;