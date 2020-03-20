import React from 'react';
import { TITLE_COLOR } from '../../../../constants/utill';

class Header extends React.Component{
    render(){
        return(
            <section className={"card wow fadeIn text-uppercase "+ TITLE_COLOR}>
                {/* <titleTeam/> */}
                <div className="card-body text-white text-center py-3 px-8 my-0">
                    <h1 className="mb-4">
                        <strong>employee Allocation</strong>
                    </h1>
                    <p>
                        <strong>Allocate employee to the team</strong>
                    </p>
                </div>  
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb indigo lighten-4">
                    <li class="breadcrumb-item"><a class="black-text" href="/home">Dashboard</a><i class="fas fa-caret-right mx-2"
                        aria-hidden="true"></i></li>
                    <li class="breadcrumb-item"><a class="black-text" href="/allocation/employees">Teams</a><i class="fas fa-caret-right mx-2"
                        aria-hidden="true"></i></li>
                    <li class="breadcrumb-item active">Employee Allocation</li>
                    </ol>
                </nav>
            </section>
        )
    }
}
export default Header;