import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import { COURSE_API_URL, BG_COLOR } from '../../../../constants/utill';
import EmpPosts from './empPost';
import EmpPagination from './empPagination';
import { MDBContainer } from 'mdbreact';
 
const EmpTab = () =>{
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await Axios.get(COURSE_API_URL + 'employees/');
            setPosts(res.data);
            setLoading(false);
        };
        // call the function 
        fetchPosts();
        // its never ending loops so, for the stop use, []
    }, []);

    // get current posts
    const indexOfLastPage = currentPage * postsPerPage;
    const indexOfFirstPage = indexOfLastPage - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPage, indexOfLastPage); 

    const paginate = pageNumber => setCurrentPage(pageNumber);


    return(
        <div>
            {/* <EmpPosts posts={posts} loading={loading}/> */}
            {/* <EmpPagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/> */}
            {/* <EmpPosts posts={currentPosts} loading={loading}/> */}

            <section>
                <MDBContainer className="card p-4 mt-4" style={{
                    display: "flex",
                    // justifyContent: "center",
                    alignItems: "center",
                    
                    height:'500px'
                    // backgroundColor:"rgb(175, 200, 209)"
                    }}>
                    {/* <h3 className="card-header text-center font-weight-bold text-uppercase py-4">Employees</h3> */}
                    {/* <div className="card-body"> */}
                        <div id="table" className="table-editable table-responsive">                           
                            <table className="table table-bordered table-striped text-center">
                                <thead>
                                    <tr>
                                        <th className="text-center">Employee Id</th>
                                        <th className="text-center">Name</th>
                                        <th className="text-center">Email</th>
                                        <th className="text-center">Phone No.</th>
                                        <th className="text-center">View</th>
                                        <th className="text-center">Edit</th>
                                        <th className="text-center">Remove</th>
                                    </tr>
                                </thead>

                                <EmpPosts posts={currentPosts} loading={loading}/>
                            </table>
                            

                        </div>
                       
                    {/* </div> */}
                </MDBContainer> 
                <div className='mt-2 pt-2' color={BG_COLOR} style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    // backgroundColor:"rgb(175, 200, 209)"
                    }}>
                        <EmpPagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
                        </div>                    
            </section> 

            {/* Add table for employee */}
            

        </div>
    )
}
export default EmpTab;
