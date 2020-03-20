import React from 'react';
import { MDBBtn, MDBCard, MDBContainer, MDBIcon } from 'mdbreact';
import EllipsisText from 'react-ellipsis-text';

//response for carousel **** 
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import Axios from 'axios';
import { COURSE_API_URL } from '../../../constants/utill';



let i = 0;

class AdminEmmployeeCard extends React.Component{

    state = {
        employees : []
    }

    componentWillMount(){
        this.getEmployees();
    }

    getEmployees()
    {
        Axios.get(COURSE_API_URL + 'employees/').then((response) =>
        {
            this.setState({
                employees: response.data
            })
            // console.log('sfsdf');
            // console.log(this.state.employees);
        });

    }
// End
    render(){
        
        let topEmployees = this.state.employees.map((emp) =>
        {
            if (i < 3) {
                i = i + 1;
                return (
                    <div className='pt-3 pb-4' style={{
                        paddingLeft: "10px", paddingRight: '10px'
                    }}>
                        <Link to={"/employee/" + emp.employee_id} refresh="true" >
                            <MDBCard
                                className='card-image'
                                style={{
                                    // backgroundImage:
                                        // `url(data:image/png;base64,${policyiess.policyImage})`,
                                    backgroundImage:'url(https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                }}
                            >
                                <div
                                    className='text-white text-center  d-flex align-items-center rgba-black-strong py-5 px-4 rounded'>

                                    <div>
                                        <h3 className='py-3 font-weight-bold'>
                                            <strong>{emp.first_name}</strong>
                                            <br />
                                            <h6>{emp.full_name}</h6>
                                        </h3>
                                        <p className='pb-3'>
                                            <EllipsisText text={emp.last_name} length={"70"} />
                                        </p>
                                        <MDBBtn color='success' size='md'>
                                            <MDBIcon far icon='clone' className='left' />More</MDBBtn>
                                    </div>
                                </div>
                            </MDBCard>
                        </Link>
                    </div>
                )
            }
        });                
        const responsive = {
            superLargeDesktop: {
                // the naming can be any, depends on you.
                breakpoint: { max: 4000, min: 3000 },
                items: 5,
            },
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 3,
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 2,
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1,
            },
        };

        /*****end */

        return(
            

            <div className="card mb-4 mt-3 wow fadeIn">
                <div className="card-header font-weight-bold">
                    <span><h2>Top Employees</h2></span>
                </div>
                <span className="pull-right">
                <Carousel
                        swipeable={false}
                        draggable={false}
                        showDots={true}
                        responsive={responsive}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        autoPlay={this.props.deviceType !== "mobile" ? true : false}
                        autoPlaySpeed={4000}
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        deviceType={this.props.deviceType}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                        >
                        {topEmployees}
                        </Carousel>
                </span>
            </div>

            
        )
    }
}
export default AdminEmmployeeCard;