import React, {Component} from 'react';
//import employee from './employees.json';
import style from './table.css'

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
            },
            {
            "id": 3,
            "name": "Randi Aspinwall",
            "role": "Intern",
            "email": "IJustWalkTheDogs@yahoo.com"
        },
        {
            "id": 4,
            "name": "Molly Gilbert",
            "role": "Senior Developer",
            "email": "Iamnot42@gmail.com"
        },
        {
            "id": 5,
            "name": "Billy Hollandaise",
            "role": "Senior Developer",
            "email": "MynewfavoritePun@yahoo.com"
        },
        {
            "id": 6,
            "name": "Billy Eyelash",
            "role": "Intern",
            "email": "CallmeBillyStylish@gmail.com"
        },
        {
            "id": 7,
            "name": "Ella Bella",
            "role": "Intern",
            "email": "Bestdogintheoffice@gmail.com"
        },
        {
            "id": 8,
            "name": "Mittens Myers",
            "role": "Junior Developer",
            "email": "Thesepeopleareanimals@myersllc.com"
        },
        {
            "id": 9,
            "name": "Jeff Cartangena",
            "role": "Project Manager",
            "email": "SourceofTruth@gmail.com"
        },
        {
            "id": 10,
            "name": "Leslie Nielsen",
            "role": "Junior Developer",
            "email": "DontcallmeShirley@Airplane.com"
        }
    ]
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
        <div style={style}>
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