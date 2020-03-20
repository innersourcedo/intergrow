import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { COURSE_API_URL } from '../../../../constants/utill';
import TeamActivityPost from './teamActivityPost';
import PaginationCust from '../../../../constants/Pagination';
import { MDBContainer } from 'mdbreact';
 
const TeamPost = () =>{
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await Axios.get(COURSE_API_URL + 'teams/');
            setPosts(res.data);
            setLoading(false);
        };
        // call the function )
        fetchPosts();
        // its never ending loops so, for the stop use, []
    }, []);
        
    // console.log(posts);

    // get current posts
    const indexOfLastPage = currentPage * postsPerPage;
    const indexOfFirstPage = indexOfLastPage - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPage, indexOfLastPage); 

    const paginate = pageNumber => setCurrentPage(pageNumber);


    return(
        <div className="card mb-4 mt-3 wow fadeIn">

            <div className="card-header font-weight-bold">
                <span><h2>Team Activities</h2></span>
            </div>
            <span className="pull-right m-2">
            <TeamActivityPost posts={currentPosts} loading={loading}/>
            </span>
            <MDBContainer className=''>
            <PaginationCust postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
            </MDBContainer>
        </div>
    )
}
export default TeamPost;
