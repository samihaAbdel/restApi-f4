import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addContact } from "../JS/Actions/contact";
import {useNavigate} from 'react-router-dom'

const AddContact = () => {
  const [newContact, setNewContact] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const dispatch = useDispatch();
  const navigate= useNavigate()
  const handleChange = (e) => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value });
  };
  // console.log(newContact)
  const add =()=>{
    dispatch(addContact(newContact))
    navigate('/contact')
  }
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="your name"
            name="name"
            value={newContact.name}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="email"
            name="email"
            value={newContact.email}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>phone</Form.Label>
          <Form.Control
            type="email"
            placeholder="phone"
            name="phone"
            value={newContact.phone}
            onChange={handleChange}
          />
        </Form.Group>

        <Button onClick={()=>add()}>Add Contact</Button>
      </Form>
    </div>
  );
};

export default AddContact;
