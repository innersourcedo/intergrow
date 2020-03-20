import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, FormGroup, Input, InputGroupText, ModalFooter, InputGroupAddon } from 'reactstrap';
import Axios from 'axios';
import { COURSE_API_URL } from '../../../../constants/utill';

class AllocationTeamView extends React.Component{    
    constructor(props){
        super(props);
        this.state = {
            redirect:false,
            team:[],
            leader:[],
            allocations:[],
            employees:[],

            newEmpAllocation:{
                team_id:this.props.idx,
                member_id:'',
                start_date:'',
                end_date:'',
            },
            createModal:false,
        }
    }
    componentWillMount(){
        this.getTeam();
        this.getMember();
        this.getEmployees();
    }
    getEmployees(){
        Axios.get(COURSE_API_URL + 'employees/').then((response) =>{
            this.setState({
                employees:response.data,
            })
        })
    }
    getTeam(){
        Axios.get(COURSE_API_URL + 'team/' + this.props.idx).then((response) => {
            // console.log(response.data);
            this.setState({
                team:response.data,
            })
            Axios.get(COURSE_API_URL + `employee/${response.data.leader}`).then((lead) =>{
                // console.log(lead.data.first_name)
                this.setState({
                    leader:lead.data,
                })
            })
        })
    }
    getMember(){
        Axios.get(COURSE_API_URL + 'team_employee_allocation/team/' + this.props.idx).then((response) =>{
            console.log(response.data);
            this.setState({
                allocations:response.data,
            })
        })
    }
    createMember(){
        console.log(this.state.newEmpAllocation);
        if(this.state.newEmpAllocation.member_id != '' && this.state.newEmpAllocation.team_id != ''
        && this.state.newEmpAllocation.start_date != '' && this.state.newEmpAllocation.end_date != ''){
            Axios.post(COURSE_API_URL + 'team_employee_allocation/post/', this.state.newEmpAllocation).then((response)=>{
                console.log(response.data);
                this.setState({
                    createModal:false,
                })
            })
        }else{
            console.log("empty")
        }
            
    }

    toggle(){
        this.setState({
            createModal:true,
        })
    }
    toggleClose(){
        this.setState({
            createModal:false,
        })
    }   

    render(){
        return(
            <div class=" my-3 py-3 px-md-5 ">
                <div className="card z-depth-3 text-uppercase pl-2 pt-2" color="white">
                    <span><h3>
                    <span className="small">                    
                     Team : <strong className='text-primary zoom'>{this.state.team.team_name} 
                     <Button color="primary" className="float-right btn-sm" onClick={this.toggle.bind(this)}><i className="fas fa-plus p-1"></i></Button>
                     </strong>
                     </span>
                
                </h3></span>
                </div>
                <section class="card text-lg-left dark-grey-text my-2 pl-3">  
                    <div class="media d-block d-md-flex mt-3">                        
                        <img class="card-img-64 rounded z-depth-1 d-flex mb-2"
                        src="https://mdbootstrap.com/img/Photos/Avatars/img (20).jpg" alt="Generic placeholder image"/>
                    <div class="media-body text-md-left ml-md-3 ml-0">
                        <p class="font-weight-bold my-0 uppercase">
                            Leader : {this.state.leader.first_name + ' ' + this.state.leader.last_name}
                        </p>  
                    </div>
                    </div>                    
                </section>
                {
                    this.state.allocations.map((alloc) => {
                        return(
                            <section className="card text-lg-left dark-grey-text my-2 pl-3 zoom">  
                                <div class="media d-block d-md-flex mt-3">                        
                                    <img class="card-img-64 rounded z-depth-1 d-flex mb-4"
                                    src="https://mdbootstrap.com/img/Photos/Avatars/img (20).jpg" alt="Generic placeholder image"/>
                                    <div class="media-body text-md-left ml-md-3 ml-0">
                                        <div class="font-weight-bold my-0">
                                            <div>
                                            Member : {alloc.member_id.first_name} 
                                            </div>
                                            <div>
                                            Assign Date : {alloc.start_date} <br/>
                                            </div>
                                            <div>
                                            End Date : {alloc.end_date} 
                                            </div>
                                        </div>  
                                        <span className="small text-muted float-right pr-2">
                                            <Button color="warning" className={'btn-sm'}><i className="fas fa-edit p-1 zoom"></i></Button>
                                            <Button color="danger" className={'btn-sm'}><i className="fas fa-trash-alt p1-1 zoom"></i></Button>
                                            </span>
                                    </div>
                                </div>                    
                            </section>
                        )
                    })
                }

                
                <Modal isOpen={this.state.createModal} toggle={this.toggle.bind(this)}>
                            <ModalHeader toggle={this.toggleClose.bind(this)} >Add member</ModalHeader>
                            <ModalBody>
                            <FormGroup>
                                    <InputGroupAddon addonType="prepend">
                                    <InputGroupText><i className="fas fa-user mr-2" ></i></InputGroupText>
                                    <Input placeholder='Emp id' type='select'
                                        value={this.state.member_id}
                                        onChange = {(e)=>{
                                            let {newEmpAllocation} = this.state;
                                            newEmpAllocation.member_id = e.target.value;
                                            this.setState({newEmpAllocation});
                                        }}
                                    >
                                        <option>{'<<Employee>>'}</option>
                                        {
                                            this.state.employees.map((emp)=>{
                                                return(
                                                    <option  className='force-overflow' key={emp.id} value={emp.id}> {emp.first_name + ':' + emp.employee_id} </option>
                                                )
                                            })
                                        }

                                    </Input>
{/*                                     
                                    value = {this.state.member_id}
                                    onChange = {(e)=>{
                                        let {newEmpAllocation} = this.state;
                                        newEmpAllocation.member_id = e.target.value;
                                        this.setState({newEmpAllocation});
                                    }}
                                    
                                    > */}
                                    </InputGroupAddon>
                                </FormGroup>
                            <FormGroup>
                                    <InputGroupAddon addonType="prepend">
                                    <InputGroupText><i className="fas fa-calendar-alt mr-2" ></i></InputGroupText>
                                    <Input type='date' placeholder='start date'
                                    value = {this.state.start_date}
                                    onChange = {(e)=>{
                                        let {newEmpAllocation} = this.state;
                                        newEmpAllocation.start_date = e.target.value;
                                        this.setState({newEmpAllocation});
                                    }}
                                    
                                    />
                                    </InputGroupAddon>
                                </FormGroup>
                                <FormGroup>
                                    <InputGroupAddon addonType="prepend">
                                    <InputGroupText><i className="fas fa-calendar-alt mr-2" ></i></InputGroupText>
                                    <Input type='date' placeholder='Emp id'
                                    value = {this.state.end_date}
                                    onChange = {(e)=>{
                                        let {newEmpAllocation} = this.state;
                                        newEmpAllocation.end_date = e.target.value;
                                        this.setState({newEmpAllocation});
                                    }}
                                    
                                    />
                                    </InputGroupAddon>
                                </FormGroup>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" className={'btn-sm'} onClick={this.toggleClose.bind(this)}>Cancel</Button>
                                <Button color="primary" className={'btn-sm'} onClick={this.createMember.bind(this)}>Add</Button>
                            </ModalFooter>
                        </Modal>  
                
        </div>
        );
    }
}
export default AllocationTeamView;