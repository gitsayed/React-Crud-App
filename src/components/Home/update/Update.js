import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { UserContext } from '../../UserContext/UserContext';

const Update = () => {
    const { addToast } = useToasts();
const [users, setUser]=useContext(UserContext);
const {id}=useParams();
const user =users.filter((user)=>user.id==id);

const[name,setName]=useState(user[0].name);
const[position, setPosition]=useState(user[0].position);
const[salary,setSalary]=useState(user[0].salary);


const updateName=(e)=>{
    setName(e.target.value);
    console.log(name);
    user[0].name=name;
};
const updatePosition=(e)=>{
    setPosition(e.target.value);
    console.log(position);
    user[0].position=position;
};
const updateSalary=(e)=>{
    setSalary(e.target.value);
    console.log(salary);
    user[0].salary=salary;
};


const editUser=(e)=>{
e.preventDefault();
    setUser([...users]);
    addToast('Updated Successfully ID:'+id,
    { appearance: 'success', autoDismiss: true}  );
};


    return (
        <div >
        <br/><br/>
        <Link to="/">
<Button variant="info">Back To Home</Button>
        </Link>
        <br/>
        <h1 > Information Update Form</h1>
        
            <Form onSubmit={editUser} className="create">
                <Form.Group>
                    <Form.Label className="pd">ID</Form.Label>
                    <Form.Control
                        type="text"
                        name="id" readOnly={true}
                        value={id}
                        placeholder="Enter ID"
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label className="pd">Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={name}
                        onChange={updateName}
                        placeholder="Enter Name"

                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label className="pd">Position</Form.Label>
                    <Form.Control
                        type="text"
                        name="position"
                        value={position}
                        onChange={updatePosition}
                        placeholder="Enter Position"


                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label className="pd">Salary</Form.Label>
                    <Form.Control
                        type="text"
                        name="salary"
                        value={salary}
                        onChange={updateSalary}
                        placeholder="Enter Salary"
                    />
                </Form.Group>



<Button className="sb" variant="success" type="submit"> Submit</Button>
      </Form>
            



        </div>
    );
};

export default Update;