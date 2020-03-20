// import React from 'react';

// const Notfound = () => <h1>Page Not Found!</h1>;

// export default Notfound;

import React from 'react'
import { MDBCol, MDBRow } from 'mdbreact';
// import logo from "../../assets/mdb-react.png";


const NotFoundPage =  () => {
  return (
    <React.Fragment>
      <div className="full">
      <div class="container my-5 py-5 z-depth-1">
          <section class="px-md-5 mx-md-5 text-center dark-grey-text">
              <img src="https://mdbootstrap.com/img/Others/404_mdb.png" alt="Error 404" class="img-fluid mb-4" />
              <h3 class="font-weight-bold">Oops! This obviously isn't a page you were looking for.</h3>
              <p>Please, let us know how you got here, and use one of the following links to navigate back to safe harbor.</p>
              <a class="btn btn-info btn-sm btn-rounded" href="/home/" role="button">Back to Home</a>
              {/* <a class="btn btn-info btn-sm btn-rounded" href="https://mdbootstrap.com/education/bootstrap/" role="button">Tutorial</a>
              <a class="btn btn-info btn-sm btn-rounded" href="https://mdbootstrap.com/products/jquery-ui-kit/" role="button">MDB Pro</a>
              <a class="btn btn-info btn-sm btn-rounded" href="https://mdbootstrap.com/support/" role="button">Support</a> */}
          </section>
        </div>
        {/* <MDBRow className="bad-gateway-row">
          <MDBCol md="8">
            <img alt="Error 404" className="img-fluid" hieght="20px" src={logo}/>
            <h2 className="h2-responsive mt-3 mb-2">404. That's an error.</h2>
            <h4>The requested URL was not found on this server.</h4>
          </MDBCol>
          <MDBCol md="4">
            <img alt="Error 404" className="img-fluid" src="https://mdbootstrap.com/img/Others/grafika404-bf.png"/>
          </MDBCol>
        </MDBRow> */}
      </div>
    </React.Fragment>
  )
}

export default NotFoundPage;