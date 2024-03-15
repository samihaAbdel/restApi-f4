import React from "react";
import { Card, Button } from "react-bootstrap";
import {useDispatch} from 'react-redux'
import {deleteContact} from '../JS/Actions/contact'
import { useNavigate } from "react-router-dom";
const ContactCard = ({ contact }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <div>
      {" "}
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="data:image/png;base64,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"
          alt="ph"
        />
        <Card.Body>
          <Card.Title>{contact.name}</Card.Title>
          <Card.Text>
            {contact.email} <br />
            {contact.phone}
          </Card.Text>
          <Button variant="primary" onClick={()=>navigate(`/edit/${contact._id}`)}>Edit </Button>
          <Button variant="primary" onClick={()=>dispatch(deleteContact(contact._id))}>Delete</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ContactCard;
