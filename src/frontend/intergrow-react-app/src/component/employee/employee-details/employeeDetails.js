import React from "react";
import { Redirect } from 'react-router';


class EmployeeDetail extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            employee:[]
        }
    }   
    render()
    {
        if(this.state.redirect){
            return(<Redirect to={'/login'}/>)
        }

        return (

            <div>
                heder

            </div>

        );
    }
}
export default EmployeeDetail;



