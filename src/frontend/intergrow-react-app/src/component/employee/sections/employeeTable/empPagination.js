import React from 'react';
import { Nav, PaginationItem, PaginationLink } from 'reactstrap';
import { Pagination, } from 'react-bootstrap';
 
const EmpPagination = ({postsPerPage, totalPosts, paginate}) =>{
    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumber.push(i);   
    }
    return(
        <Pagination aria-label="Page navigation example mb-0" >
                <PaginationItem  className='card mb-0'>
                    <PaginationLink first onClick={() => paginate(1)} />
                </PaginationItem >
                    {pageNumber.map(number => (
                        <PaginationItem key={number}  className='card ml-1 mr-1'>
                            <PaginationLink onClick={() => paginate(number)} >
                                {number} 
                            </PaginationLink>
                        </PaginationItem>
                    ))}
                <PaginationItem  className='card'>
                    <PaginationLink last onClick={() =>paginate(pageNumber.length)} />
                </PaginationItem>
            </Pagination>
    )
}
export default EmpPagination;
