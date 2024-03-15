import React, { useEffect, useState } from "react";
import {Form, Button} from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";
import { useMatch, useNavigate } from "react-router-dom";
import { editContact, getContact } from "../JS/Actions/contact";

const EditContact = () => {
  const [contactToEdit, setContactToEdit] = useState({name:'', email:'', phone:''})
  const contactToGet = useSelector(state=>state.contactReducer.contactToGet)
  const handleChange=(e)=>{
    setContactToEdit({...contactToEdit, [e.target.name]:e.target.value})
  }
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const match = useMatch('/edit/:id')
  useEffect(() => {
    dispatch(getContact(match.params.id))
  }, [])
  const edit =()=>{
    dispatch(editContact(match.params.id, contactToEdit))
    navigate(-1)
  }
  console.log(contactToEdit)
  return <div>  <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Name</Form.Label>
    <Form.Control
      type="text"
      placeholder={`${contactToGet.name}`}
      name="name"
      value={contactToEdit.name}
      onChange={handleChange}
    />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control
      type="email"
      placeholder={`${contactToGet.email}`}
      name="email"
      value={contactToEdit.email}
      onChange={handleChange}
    />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>phone</Form.Label>
    <Form.Control
      type="email"
      placeholder={`${contactToGet.phone}`}
      name="phone"
      value={contactToEdit.phone}
      onChange={handleChange}
    />
  </Form.Group>

  <Button onClick={()=>edit()}>Edit Contact</Button>
</Form></div>;
};

export default EditContact;
