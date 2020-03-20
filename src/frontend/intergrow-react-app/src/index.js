import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "mdbreact/dist/css/mdb.css";
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import RegisterUser from './component/account/register-user';
import App from './component/App';
import Footer from './component/core/footer';
import Header from './component/core/header';
import Home from './component/core/home';
import EmployeeView from './component/employee/employee';
import EmployeeList from './component/employee/employeeList';
import goals from './component/goals/goals';
import Viewhelp from './component/helps/viewhelp';
import NotFoundPage from './component/notfoundpage/404notfound';
import ViewTeam from './component/Team/team';
import './css/index.css';
import GoalProgress from "./component/goals/goal_progress_page";
import TeamDetails from "./component/Team/teamDetails";
import IndividualGoal from "./component/goals/indivitual_goal.js/indivitualGoals";
import EmployeeAllocation from "./component/Allocation/EmployeeAllocation/EmployeeAllocation";
import TeamDetailHeader from "./component/Team/TeamDetail/header";
import AllocateToTeam from "./component/Allocation/EmployeeAllocation/AllocateToTeam";
import EmployeeDetail from "./component/employee/employee-details/employeeDetails";
import Profile from "./component/account/profile/profile";
import IndiGoalProgressView from "./component/goals/indivitual_goal.js/sections/IndiGoalProgressView";
import IndividualGoalProgress from "./component/goals/indivitual_goal.js/individualGoalProgress";


const routing = (
    <BrowserRouter>
        <div  className="mt-5 pt-3">
            <Switch>
                <Route exact path ='/home' component = {Home}/>
                <Route exact path="/login" component={App} />
                <Route exact path="/" component={App} />
                <Route path ='/employee' component = {EmployeeView}/>
                <Route path ='/employeelist' component = {EmployeeList}/>                
                <Route path = '/emoployees/detail/:id' component = {EmployeeDetail}/>
                <Route path ='/goals' component = {goals}/>
                <Route path = '/help' component = {Viewhelp}/>
                <Route path = '/register' component = {RegisterUser}/>
                <Route path = '/goal/:id' component = {GoalProgress}/>
                <Route path = '/teams' component = {ViewTeam}/>
                <Route path = '/team/:id' component = {TeamDetails}/>
                <Route path = '/individual_goal/' component = {IndividualGoal}/>
                <Route path = '/individual_goals/progress/:id' component = {IndividualGoalProgress}/>
                <Route path = '/allocation/employees' component = {EmployeeAllocation}/>
                <Route path = '/allocation/employee/:id' component = {AllocateToTeam}/>
                <Route path = '/profile' component = {Profile}/>

                <Route component = {NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
)

console.log('%c ***INTERGROW***', 'background: #222; color: green')
ReactDOM.render(routing, document.getElementById('root'));


ReactDOM.render(<Header/>, document.getElementById('header'));
ReactDOM.render(<Footer/>, document.getElementById('footer'));
