import { MDBCollapse, MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle, MDBIcon, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBNavItem } from "mdbreact";
import React from "react";


class header extends React.Component{
  
  constructor(props){
    super(props);

    this.state = {
      isOpen: false,
      isLoggedIn:true,
      username:'User'
      
    };

    this.logout = this.logout.bind(this);
  }
  logout(){
    sessionStorage.setItem('userData', '');
    sessionStorage.clear();
    window.location.reload(false);
    this.setState({
      isLoggedIn:false,
    })
  }
  componentWillMount()
    {
      // console.log('%c ***INTERGROW***', 'background: #222; color: green')
        if(sessionStorage.getItem('userData')){
            // console.log('Header');
            // console.log(sessionStorage.getItem('username'));
            this.setState({
              username:sessionStorage.getItem('username')
            })
        }
        else{
          this.setState({redirect:true, isLoggedIn:false,})
        }
    }

  toggleCollapse = () =>
  {
    this.setState({ isOpen: !this.state.isOpen });
  }
  render()
  {
    let isLoggedIn = this.props.isLoggedIn;
    let button;

    if(isLoggedIn == true){
      button = <MDBDropdownItem href="/login"><MDBIcon icon="sign-in-alt" className="pr-2"/>Login</MDBDropdownItem>
    }else{
      button = <MDBDropdownItem onClick={this.logout}><MDBIcon icon="sign-out-alt" className="pr-2"/>Logout</MDBDropdownItem>
    }

    if(this.state.redirect){
      return(
        <MDBNavbar color="unique-color-dark" dark expand="md" className="fixed-top">
          <MDBNavbarBrand>
            <strong className="white-text"><a className="white-text h4-responsive font-weight-bold" href="/login"> Intergrow</a></strong>
          </MDBNavbarBrand>
        </MDBNavbar>
      )
    }
    
    return (
      <MDBNavbar color="unique-color-dark" dark expand="md" className="fixed-top zoom">
        <MDBNavbarBrand>
          <strong className="white-text"><a className="white-text h4-responsive font-weight-bold" href="/login"> Intergrow</a></strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem className="pt-2 pl-5">
              <a className="white-text pt-5" href="/home">Dashboard</a>
            </MDBNavItem>
            {/* <MDBNavItem className="pt-2 pl-3" nav caret > 
              <a className="white-text" href="/goals">Goal</a>
            </MDBNavItem> */}
            <MDBNavItem className="pl-3">
              <MDBDropdown>
                <MDBDropdownToggle nav caret >
                 Goal
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default white-text">
                  <MDBDropdownItem href="/individual_goal/"><MDBIcon icon="user" className="pr-2"/>Indivitual Goal</MDBDropdownItem>
                  <MDBDropdownItem href="/goals/"><MDBIcon icon="users" className="pr-2"/>Team Goal</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem className="pt-2 pl-3 " nav='true' caret='true' >
              <a className="white-text" href="/help">Help</a>
            </MDBNavItem>
            <MDBNavItem className="pl-3">
              <MDBDropdown>
                <MDBDropdownToggle nav caret >
                 Profiles
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default white-text">
                  <MDBDropdownItem href="/employeelist/"><MDBIcon icon="eye" className="pr-2"/>Empoyee</MDBDropdownItem>
                  <MDBDropdownItem href="/teams/"><MDBIcon icon="eye" className="pr-2"/>Team</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem className="pl-3">
              <MDBDropdown>
                <MDBDropdownToggle nav caret >
                 Allocations
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default white-text">
                  <MDBDropdownItem href="/allocation/employees"><MDBIcon icon="compress" className="pr-2"/>Employee Allocation</MDBDropdownItem>
                  {/* <MDBDropdownItem href="/goals/"><MDBIcon icon="users" className="pr-2"/>Team Goal</MDBDropdownItem> */}
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>          
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret >
                 <strong className='text-uppercase'>{this.state.username} {this.props.userLogin}</strong><MDBIcon icon="user" className="pl-2"/>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem><MDBIcon icon="user" className="pr-2"/>
                  <a href='/profile'>
                    Profile
                  </a>
                  </MDBDropdownItem>
                  {button}                  
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>

    );
  }
}

export default header;