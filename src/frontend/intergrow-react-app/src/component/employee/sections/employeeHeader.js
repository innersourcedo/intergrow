import React from 'react';
import { TITLE_COLOR } from '../../../constants/utill';

class EmployeeHeader extends React.Component{
    render(){
        return(
            <section className={"card wow fadeIn text-uppercase "+ TITLE_COLOR}>
                <div className="card-body text-white text-center py-1 px-8 my-3 text-uppercase">

                    <h1 className="mb-4">
                        <strong>Intergrow Emloyees</strong>
                    </h1>
                    <p>
                        <strong>Join with intergrow activities</strong>
                    </p>

                </div>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb indigo lighten-4">
                    <li class="breadcrumb-item"><a class="black-text" href="/home">Dashboard</a><i class="fas fa-caret-right mx-2"
                        aria-hidden="true"></i></li>
                    {/* <li class="breadcrumb-item"><a class="black-text" href="#">Library</a><i class="fas fa-caret-right mx-2"
                        aria-hidden="true"></i></li> */}
                    <li class="breadcrumb-item active">Employees</li>
                    </ol>
                </nav>
            </section>
        )
    }
}
export default EmployeeHeader;