import React from 'react';
import { TITLE_COLOR } from '../../../constants/utill';

class TeamDetailHeader extends React.Component{
    render(){
        return(
            <section className={"card wow fadeIn text-uppercase "+ TITLE_COLOR}>
                {/* <titleTeam/> */}
                <div className="card-body text-white text-center py-1 px-8 my-3">
                    <h1 className="mb-4">
                        <strong>Team Detail</strong>
                    </h1>
                    <p>
                        <strong>Create Team & achive the goal</strong>
                    </p>
                </div>  
                {/* <TeamSubNav/> */}
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb indigo lighten-4">
                    <li class="breadcrumb-item"><a class="black-text" href="/home">Dashboard</a><i class="fas fa-caret-right mx-2"
                        aria-hidden="true"></i></li>
                    <li class="breadcrumb-item"><a class="black-text" href="/teams">Teams</a><i class="fas fa-caret-right mx-2"
                        aria-hidden="true"></i></li>
                    <li class="breadcrumb-item active">Team Detail</li>
                    </ol>
                </nav> 
            </section>
        )
    }
}
export default TeamDetailHeader;