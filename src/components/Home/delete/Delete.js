import React, { useContext } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../UserContext/UserContext';
import './delete.css';
export const Delete=()=> {
    const [users, setUser]= useContext(UserContext);
    const {id}=useParams();
const user=users.filter(user=>user.id!==id);
console.log(user);
const deleteUser=(id)=>{
    const user=users.filter((user)=>user.id!=id);
    setUser(user);
}


    return (
        <div>
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Are You Sure ?</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Link to="/">
                        <Button className="delete_btn action__btn" variant="info">
                            Cancel
                        </Button>
                        <Button  onClick={()=>deleteUser(id)} className="action__btn" variant="danger">
                        Delete
                        </Button>
                    </Link>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    )
}
