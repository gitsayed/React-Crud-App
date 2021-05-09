
import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { useWait } from "react-wait";
import { UserContext } from '../../UserContext/UserContext';
import './create.css';





const Create = (props) => {
    const { addToast } = useToasts();
    const { startWaiting, endWaiting, isWaiting } = useWait();

    const[users, setUser]=useContext(UserContext);

    const[id,setId]=useState("");
    const[name,setName]=useState("");
    const[position, setPosition]=useState("");
    const[salary,setSalary]=useState("");
    
    const updateId=(e)=>{
        setId(e.target.value);
        console.log(id);
    };
    
    const updateName=(e)=>{
        setName(e.target.value);
    };
    const updatePosition=(e)=>{
        setPosition(e.target.value);
    };
    const updateSalary=(e)=>{
        setSalary(e.target.value);
    };


    const addUser=(e)=>{
        e.preventDefault();
        

        if(id!='' && name !='' && position!='' && salary!='' ){
            // startWaiting("creating user");
        setUser([...users, {id:id, name:name, position:position, salary:salary}]);
        addToast('Saved Successfully',
         { appearance: 'success', autoDismiss: true}                );
        setInterval(() => {
            
        }, 100000);
     
        }else{
            addToast("invalid Input = "+e.target.value,
             { appearance: 'error', autoDismiss: true });
        };
    };














    return (
        <div >
        <br/><br/>
        <Link to="/">
<Button variant="info">Back To Home</Button>
        </Link>
        <br/>
        <h1 > Information Add Form</h1>
        
            <Form onSubmit={addUser} className="create">
                <Form.Group>
                    <Form.Label className="pd">ID</Form.Label>
                    <Form.Control
                        type="text"
                        name="id"
                        value={id}
                        onChange={updateId}
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

export default Create;