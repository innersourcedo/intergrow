// import React from 'react';

// function footer(){
//     return(
//         <div>
//             <h1>
//                 Footer
//             </h1>
//         </div>
//     );
// }

// export default footer;

import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";
import '../../css/footer.css';

const footer = () => {
  return (
    <div>
    <MDBFooter color="unique-color-dark" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol >
            <h5 className="title">Intergrow Content</h5>
            <p>
              You can join with our communitiy with via social media...
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title" style={{float:'left'}}>Social media</h5>
            <ul >
              <li className="list-unstyled" style={{float:'left', paddingLeft:'20px'}}>
                <a href="#!"><MDBIcon fab icon="facebook-square mr-1" />Facebook</a>
              </li>
              <li className="list-unstyled" style={{float:'left', paddingLeft:'20px'}}>
                <a href="#!"><MDBIcon fab icon="twitter-square mr-1" />Twitter</a>
              </li>
              <li className="list-unstyled" style={{float:'left', paddingLeft:'20px'}}>
                <a href="#!"><MDBIcon fab icon="youtube-square mr-1" />Youtube</a>
              </li>
              <li className="list-unstyled" style={{float:'left', paddingLeft:'20px'}}>
                <a href="#!"><MDBIcon fab icon="linkedin mr-1" />LinkedIn</a>
              </li>
            </ul>
          </MDBCol>
          
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.youempowerme.com"> youempowerme.org </a>
        </MDBContainer>
        <MDBContainer fluid>
          Powered by: <a href="https://www.youempowerme.com"> Empower </a>
        </MDBContainer>
      </div>
    </MDBFooter>
    </div>
  );
}

export default footer;