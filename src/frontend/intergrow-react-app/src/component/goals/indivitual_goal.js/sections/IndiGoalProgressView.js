import Axios from 'axios';
import { MDBIcon } from 'mdbreact';
import React from 'react';
import { Button, FormGroup, Input, InputGroupText, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { COURSE_API_URL } from '../../../../constants/utill';



class IndiGoalProgressView extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            individual_goal_progress:[],
            goal:[],
            modalEdit:false,
            modalPost:false,
            errMeg:false,

            newGoalProgress:{
                id : '',
                individual_goal : this.props.idx,
                progress_description : '',
                progress_date       : '',  
            },

            editGoalProgress:{
                id : '',
                individual_goal : '',
                progress_description : '',
                progress_date       : '',                
            }


        }
    }
    componentDidMount(){
        this.indGoalProgress();
        this.getGoal();
    }
    getGoal(){
        Axios.get(COURSE_API_URL + 'individual_goal/' + this.props.idx).then((response)=>{
            // console.log(response.data);
            this.setState({
                goal:response.data,
            })
        }).catch((err) => console.log(err));
    }
    indGoalProgress(){        
        Axios.get(COURSE_API_URL + 'goal/individual_goal_progress/' + this.props.idx).then((response) =>{
            // console.log(response.data);
            this.setState({
                individual_goal_progress:response.data,
            })                
        }).catch((err) => console.log(err));
    }
    postGoalProgress(){
        if (this.state.newGoalProgress.individual_goal != "") {
            console.log(this.state.newGoalProgress);
        Axios.post(COURSE_API_URL + 'individual_goal_progress/', this.state.newGoalProgress).then((response) =>{
            console.log(response.data);
            this.setState({
                modalPost:false             
            })
            window.location.reload();
        })
            
        }
        else{
            this.setState({
                modalPost:false,
                errMeg:true,                
            })
        }
        
    }
    putGoalProgress(){
        // console.log(this.state.editGoalProgress);
        // const obj = JSON.stringify(this.state.editGoalProgress);
        Axios.put(COURSE_API_URL + 'individual_goal_progress/' + this.state.editGoalProgress.id, this.state.editGoalProgress).then((response) => {
            console.log(response.data);
            this.setState({
                modalEdit : false,
            })
            window.location.reload();
        }).catch((err) => console.log(err));

        // const obj = JSON.stringify(this.state.editGoalProgress);
        // console.log(obj);
        // fetch(COURSE_API_URL + `individual_goal_progress/${this.state.editGoalProgress.id}`, {
		// 	method: 'PUT',
		// 	body: obj,
		// 	headers: {
		// 	  "Content-type": "application/json; charset=UTF-8"
		// 	}
		// }).then(response => {
        //     return response.json()
		// }).then(json => {
		// 	console.log(json)
		// 	this.setState({
        //         modalEdit:false,
		// 	});
        // }).catch((err) => console.log(err));  

    }
    togglePost(){
        console.log('press');
        this.setState({
            modalPost:true,
            modalEdit:false,
        })
    }
    toggleEdit(id){
        // console.log(id)
        Axios.get(COURSE_API_URL + 'individual_goal_progress/' + id).then((response) =>{
            // console.log(response.data);
            this.setState({
                editGoalProgress:{
                    id : response.data.id,
                    individual_goal : response.data.individual_goal,
                    progress_description : response.data.progress_description,
                    progress_date : response.data.progress_date,
                }
            })                
        }).catch((err) => console.log(err));
        this.setState({
            modalEdit:true
        })
    }
    deleteIndGoalProgress(id){
        console.log(id);
        Axios.delete(COURSE_API_URL + 'individual_goal_progress/' + id).then((response) =>{
            this.setState({
            })
        })
        window.location.reload();
    }
    closeToggle(){
        this.setState({
            modalEdit:false,
            modalPost:false,
        })
    }
    errToggle(){
        this.setState({
            errMeg : true,
        })
    }
    
    render(){
       
        return(
            <div className="container w-100 my-3">
            <section>
                <div className="card">
                <div className="card-header white">
                    <p className="h5-responsive font-weight-bold mb-0">
                    <i className="fas fa-trophy pr-2"></i>Individual Goal : {this.state.goal.goal_discription}
                    <Button className=" btn btn-primary btn-sm mb-0 mr-0 float-right" color='warning' onClick={()=>{this.togglePost()}}><i className="fas fa-pen p-1"/></Button>
                    {this.state.goal.is_complete === true ? <strong className="mb-0 mr-1 ml-1"><MDBIcon icon='check' className='pl-1 pr-1' style={{color:'green'}}/> </strong>:<Button className="btn btn-primary btn-sm mb-0 mr-0 float-right" color='primary' onClick={()=>{this.togglePost()}}><i className="fas fa-plus p-1"/></Button> }
                    </p>
                </div>
                <div className="card-body my-custom-scrollbar">
                    <div className="media">
                    {/* <img className="avatar rounded-circle card-img-64 z-depth-1 d-flex mr-3" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg" alt="Generic placeholder image"/> */}
                    <div className="media-body">
                        <h6 className="mt-0 font-weight-bold" >
                        <span className="small text-muted float-right pr-2"><i className="far fa-clock pr-1"></i>5:25 AM</span></h6>
                        <p className="mb-0 font-weight-light text-success font-weight-bold">Start Date :  {this.state.goal.start_date}
                        </p>
                        <p className="mb-0 font-weight-light text-danger font-weight-bold">End Date   :  {this.state.goal.end_date}
                         </p>

                        <div className="media mt-3">
                        <div className="media-body grey lighten-2 p-3 rounded">
                        { 
                            this.state.individual_goal_progress.map((gp) => {
                                return(
                                <div className='pb-3' key={gp.id}>
                                    <h6 className="mt-0 font-weight-bold">
                                        <MDBIcon icon='check' className='pl-2'/> 
                                        {gp.progress_description}
                                        <span className="small text-muted float-right pr-2">
                                            <i className="far fa-clock pr-1"></i>
                                            {gp.progress_date}
                                            <Button color='warning' className="btn-sm mb-0 ml-2 m-0 pl-3 pr-3" onClick={() => this.toggleEdit(gp.id)}><MDBIcon icon={'edit'}/></Button>
                                            <Button color='danger' className="btn-sm mb-0 ml-2 m-0 pl-3 pr-3" onClick={()=>{this.deleteIndGoalProgress(gp.id).bind(this)}}><MDBIcon icon={'trash-alt'}/></Button>
                                        </span>
                                    </h6>
                                    <hr/>
                                </div>
                                )
                            })
                        } 
                        {/* Post */}
                        <Modal isOpen={this.state.modalPost} toggle={this.togglePost.bind(this)}>
                            <ModalHeader>Set Progress</ModalHeader>
                            <ModalBody>
                                <FormGroup>
                                    {/* <InputGroupAddon addonType="prepend"> */}
                                        <InputGroupText><i className="fas fa-pen mr-2" ></i>
                                        <Input placeholder="Progress discription" 
                                        value={this.state.newGoalProgress.progress_description} 
                                        onChange={(e) =>
                                        {
                                            let {newGoalProgress} = this.state;
                                            newGoalProgress.progress_description = e.target.value;
                                            this.setState({newGoalProgress});
                                        }}
                                         required/></InputGroupText>
                                    {/* </InputGroupAddon> */}
                                </FormGroup>    
                                <FormGroup>
                                    {/* <InputGroupAddon addonType="prepend"> */}
                                        <InputGroupText><i className="fas fa-id-card-alt mr-2" ></i>
                                        <Input placeholder="Progress Date" 
                                        type = 'date'
                                        value={this.state.newGoalProgress.progress_date} 
                                        onChange={(e) =>
                                        {
                                            let {newGoalProgress} = this.state;
                                            newGoalProgress.progress_date = e.target.value;
                                            this.setState({newGoalProgress});
                                        }}
                                         required/></InputGroupText>
                                    {/* </InputGroupAddon> */}
                                </FormGroup>                           
                            </ModalBody>
                            <ModalFooter>
                                <Button color={'danger'} className={'btn-sm'} onClick={this.closeToggle.bind(this)}>Cancel</Button>
                                <Button color={'primary'} className={'btn-sm'} onClick={() => this.postGoalProgress()}>Set</Button>
                            </ModalFooter>
                        </Modal>

                        {/* Put */}
                        <Modal isOpen={this.state.modalEdit} toggle={this.toggleEdit.bind(this)}>
                            <ModalHeader>Edit Progress</ModalHeader>
                            <ModalBody>
                                <FormGroup>
                                    {/* <InputGroupAddon addonType="prepend"> */}
                                        <InputGroupText><i className="fas fa-pen mr-2" ></i>
                                        <Input placeholder="Progress discription" 
                                        value={this.state.editGoalProgress.progress_description} 
                                        onChange={(e) =>
                                        {
                                            let {editGoalProgress} = this.state;
                                            editGoalProgress.progress_description = e.target.value;
                                            this.setState({editGoalProgress});
                                        }}
                                         required/></InputGroupText>
                                    {/* </InputGroupAddon> */}
                                </FormGroup>    
                                <FormGroup>
                                    {/* <InputGroupAddon addonType="prepend"> */}
                                        <InputGroupText><i className="fas fa-id-card-alt mr-2" ></i>
                                        <Input placeholder="Progress Date" 
                                        type = 'date'
                                        value={this.state.editGoalProgress.progress_date} 
                                        onChange={(e) =>
                                        {
                                            let {editGoalProgress} = this.state;
                                            editGoalProgress.progress_date = e.target.value;
                                            this.setState({editGoalProgress});
                                        }}
                                         required/></InputGroupText>
                                    {/* </InputGroupAddon> */}
                                </FormGroup>                           
                            </ModalBody>
                            <ModalFooter>
                                <Button color={'danger'} className={'btn-sm'} onClick={this.closeToggle.bind(this)}>Cancel</Button>
                                <Button color={'primary'} className={'btn-sm'} onClick={() => this.putGoalProgress()}>Update</Button>
                            </ModalFooter>
                        </Modal>
                        {/* {
                            () => {if (this.state.errMsg) {
                                    return(
                                        <Modal isOpen={this.state.errMsg} toggle={this.errToggle.bind(this)}>
                                            <ModalFooter>
                                                <Button color={'danger'} className={'btn-sm'} onClick={this.errToggle.bind(this)}>Okay</Button>
                                            </ModalFooter>

                                        </Modal>
                                    )
                                }
                            }
                        } */}
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

        </section>  
        </div>

        )
    }
}
export default IndiGoalProgressView;