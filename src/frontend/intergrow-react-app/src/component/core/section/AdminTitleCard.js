import React from 'react';
import { TITLE_COLOR } from '../../../constants/utill';

class AdminTitleCard extends React.Component {
    render(){
        return(
            <section className={"card wow fadeIn text-uppercase "+ TITLE_COLOR}>

                    {/* <!-- Content --> */}
                    <div className="card-body text-white text-center py-1 px-8 my-3">

                        <h1 className="mb-4">
                            <strong>Welcome to Intergrow</strong>
                        </h1>
                        <p>
                            <strong>Join with intergrow activities</strong>
                        </p>

                    </div>
                {/* <!-- Content --> */}
                </section>
        )
    }
}

export default AdminTitleCard;