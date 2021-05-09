
import React, { useContext } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../UserContext/UserContext';
import './read.css';




const Read = () => {
    const [users, setUser]= useContext(UserContext);
    const {id}=useParams();
console.log("read ID = "+id);
const user=users.filter(user=>user.id==id);

    return (
        <div className="read">
            <h1> Welcome Read</h1>
            <Table bordered striped className="read3"><tbody>           
                <tr>
                <td><h2>ID :</h2></td><td className="read2"><h2>{user[0].id}</h2></td>
                </tr>
                <tr>
                <td><h2>Name :</h2></td><td className="read2"><h2>{user[0].name}</h2></td>
                </tr>
                <tr>
                <td><h2>Position :</h2></td><td className="read2"><h2>{user[0].position}</h2></td>
                </tr>
                <tr>
                <td><h2>Salary :</h2></td><td><h2 className="read2">{user[0].salary}</h2></td>
                </tr>
                </tbody>
            </Table>
            <br/>
            <Link to="/">
<Button className="action_btn" variant="primary">
    Back
</Button>
            </Link>
            <br/>

        </div>
    );
};

export default Read;