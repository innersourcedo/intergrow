import { MDBContainer } from 'mdbreact';
import React from "react";


class EmployeeTableView extends React.Component {
    constructor(props){
        super(props);
    }
    
    render()
    {
        let employeeRaw = this.props.employees.map((employee) =>
        {    
            return (
                <tr key={employee.id}>
                    {/* contenteditable="true" */}
                    <td className="pt-3-half" >{employee.employee_id}</td>
                    <td className="pt-3-half" >{employee.first_name}</td>
                    <td className="pt-3-half" >{employee.email}</td>
                    <td className="pt-3-half" >{employee.phone_number}</td>
                    <td className="pt-3-half">
                        <span className="table-remove"><button type="button"
                            className="btn btn-warning btn-rounded btn-sm my-0">Edit</button></span>
                    </td>
                    <td>
                        <span className="table-remove"><button type="button"
                            className="btn btn-danger btn-rounded btn-sm my-0">Remove</button></span>
                    </td>
                </tr>
            )
        });

        return (
            <section>
                <MDBContainer className="card w-100">
                    <h3 className="card-header text-center font-weight-bold text-uppercase py-4">Employees</h3>
                    <div className="card-body">
                        <div id="table" className="table-editable">                           
                            <table className="table table-bordered table-responsive-md table-striped text-center">
                                <thead>
                                    <tr>
                                        <th className="text-center">Employee Id</th>
                                        <th className="text-center">Name</th>
                                        <th className="text-center">Email</th>
                                        <th className="text-center">Phone No.</th>
                                        <th className="text-center">Edit</th>
                                        <th className="text-center">Remove</th>
                                    </tr>
                                </thead>
                                    {employeeRaw}
                            </table>
                        </div>
                    </div>
                </MDBContainer>                     
            </section> 
        );
    }
}
export default EmployeeTableView;



