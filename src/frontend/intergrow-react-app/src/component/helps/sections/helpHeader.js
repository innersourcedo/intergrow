import React, {useState} from 'react';
import { TITLE_COLOR } from '../../../constants/utill';

const HelpHeader = () => {
    return(
        <section className={"card wow fadeIn text-uppercase "+ TITLE_COLOR}>
            {/* <!-- Content --> */}
            <div class="card-body text-white text-center py-1 px-8 my-3">

                <h1 class="mb-4">
                    <strong>Help & Response</strong>
                </h1>
                <p>
                    <strong>Asking help and response</strong>
                </p>
            </div>
            {/* <!-- Content --> */}
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb indigo lighten-4">
                <li class="breadcrumb-item"><a class="black-text" href="/home">Dashboard</a><i class="fas fa-caret-right mx-2"
                    aria-hidden="true"></i></li>
                {/* <li class="breadcrumb-item"><a class="black-text" href="#">Library</a><i class="fas fa-caret-right mx-2"
                    aria-hidden="true"></i></li> */}
                <li class="breadcrumb-item active">Help</li>
                </ol>
            </nav>
            
        </section> 
    )

}
export default HelpHeader;