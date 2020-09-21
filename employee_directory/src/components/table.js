import React, {Component} from 'react';
import employee from './employees.json';

class Table extends Component {
    constructor (props) {
        super(props) //must be used because class extends
        //storing employee data in the state
        this.state = {
            employees :[{
                "id": 1,
                "name": "Sabrina Hollett",
                "role": "Junior Developer",
                "email": "StopTakingMyPensBarb@outlook.live"
            },
            {
                "id": 2,
                "name": "Barbara Jensen",
                "role": "Project Manager",
                "email": "StopCallingMeBarb@gmail.com"  
            }]
        };
            //employees: {employee}
        
    }
renderTableData(){
    return this.state.employees.map((employee, index) => {
        const {id, name, role, email} = employee //destructuring employee props
    return (
        <tr key= {id}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{role}</td>
            <td>{email}</td>
        </tr>
    )
    })
}
render() {
    return (
        <div>
            <h1>Current Employees</h1>
            <table id="employees">
                <tbody>
                    {this.renderTableData()}
                </tbody>
            </table>
        </div>
    )
}
};

export default Table