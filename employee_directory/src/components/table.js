import react, {Component} from 'react';
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
            //employees: {employee};
        
    }

render() {
    return (
        <div>
            <h1>Current Employees</h1>
        </div>
    )
}
};

export default Table