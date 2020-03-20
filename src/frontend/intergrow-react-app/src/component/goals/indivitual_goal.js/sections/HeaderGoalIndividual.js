import React from 'react';
import { TITLE_COLOR } from '../../../../constants/utill';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            
        }
    }

    render(){
        return(
            <section className={"card wow fadeIn text-uppercase "+ TITLE_COLOR}>
                {/* <titleTeam/> */}
                <div className="card-body text-white text-center py-3 px-8 my-0">
                    <h1 className="mb-4">
                        <strong>{this.props.title}</strong>
                    </h1>
                    <p>
                        <strong>Metrics of a Goal</strong>
                    </p>
                </div>  
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb indigo lighten-4">
                    <li className="breadcrumb-item"><a className="black-text" href="/home">Dashboard</a><i className="fas fa-caret-right mx-2"
                        aria-hidden="true"></i></li>
                    {/* <li className="breadcrumb-item"><a className="black-text" href="#">Library</a><i className="fas fa-caret-right mx-2"
                        aria-hidden="true"></i></li> */}
                    <li className="breadcrumb-item active">Individual Goal</li>
                    </ol>
                </nav>
            </section>
        )
    }
}
export default Header;