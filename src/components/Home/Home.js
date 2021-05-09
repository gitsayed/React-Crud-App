import React, { useContext } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext/UserContext';
import './home.css';




const Home =()=> {
   
    const [users, setUser]= useContext(UserContext);

// console.log(users);
    return (
        <div className="home"><br/>
        <Link to="/create">
          <Button variant="primary">Creat User</Button><br/><br/>
          </Link>
          <Table striped bordered hover>
          <thead>
              <tr>
                  <th>ID</th>
                  <th>Name </th>
                  <th>Position </th>
                  <th>Salary</th>
                  <th>Action</th>
              </tr>
          </thead>
<tbody>
    {users.map(user=><tr key={user.id.toString()} >
        <td >{user.id}</td>
        <td>{user.name}</td>
        <td>{user.position}</td>
        <td>{user.salary}</td>
        <td> <Link to={"/read/"+user.id}>
        <Button className="action__btn" variant="success">View</Button>
        </Link>
        <Link to={"/update/"+user.id}>
        <Button className="action__btn" variant="info">Update</Button>
       </Link>
        <Link to={"/delete/"+user.id}>
        <Button className="action__btn" variant="danger">Delete</Button>
        </Link>
        </td>
    </tr>
    )}
</tbody>
          </Table>
        </div>
    )
}




export default  Home;

