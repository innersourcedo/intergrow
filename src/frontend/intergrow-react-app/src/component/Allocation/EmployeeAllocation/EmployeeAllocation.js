import React from 'react';
import { Redirect } from 'react-router';
import Header from './section/HeaderEmpAllocation';
import ViewTeamAllocation from './section/ViewTeamAllocation';
import CreateEmployeeAllocation from './section/CreateEmployeeAllocation';

class EmployeeAllocation extends React.Component{    
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
                <Header/>

                <ViewTeamAllocation/>

                <CreateEmployeeAllocation/>
            </div>
        );
    }
}
export default EmployeeAllocation;