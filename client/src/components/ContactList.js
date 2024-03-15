import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../JS/Actions/contact";
import ContactCard from "./ContactCard";

const ContactList = () => {
  const listContacts = useSelector(
    (state) => state.contactReducer.listContacts
  );
  const load = useSelector((state) => state.contactReducer.listContact);
  // console.log(listContacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      {load ? (
        <h1>Loading ......</h1>
      ) : (
        listContacts.map((elt, key) => (
          <ContactCard contact={elt} key={elt.id} />
        ))
      )}
    </div>
  );
};

export default ContactList;
