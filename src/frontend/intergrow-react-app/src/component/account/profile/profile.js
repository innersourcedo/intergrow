import React from "react";
import { Redirect } from 'react-router';
import ProfileHeader from "./section/profileHeader";
import ProfileView from "./section/profileView";


class Profile extends React.Component {
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
                {/* <ProfileHeader/> */}

                <ProfileView/>              

            </div>

        );
    }
}
export default Profile;



