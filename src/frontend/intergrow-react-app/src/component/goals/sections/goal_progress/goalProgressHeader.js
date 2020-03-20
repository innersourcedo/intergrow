import React from 'react';
import { TITLE_COLOR } from '../../../../constants/utill';

class HeaderGoalProgress extends React.Component{
    render(){
        return(
            <section className={"card wow fadeIn text-uppercase "+ TITLE_COLOR}>
                {/* <titleTeam/> */}
                <div className="card-body text-white text-center py-1 px-8 my-3">
                    <h1 className="mb-4">
                        <strong>Goal Progress</strong>
                    </h1>
                    <p>
                        <strong>Metrics of a Goal</strong>
                    </p>
                </div> 
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb indigo lighten-4">
                    <li class="breadcrumb-item"><a class="black-text" href="/home">Dashboard</a><i class="fas fa-caret-right mx-2"
                        aria-hidden="true"></i></li>
                    <li class="breadcrumb-item"><a class="black-text" href="/goals">Goal</a><i class="fas fa-caret-right mx-2"
                        aria-hidden="true"></i></li>
                    <li class="breadcrumb-item active">Goal Progress</li>
                    </ol>
                </nav> 
            </section>
        )
    }
}
export default HeaderGoalProgress;