import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
   MDBCard,
   MDBCardBody,
   MDBCardTitle,
   MDBCardImage,
   MDBBtn
} from 'mdb-react-ui-kit';

const ContactDetail = (props) => {
   let location = useLocation();
   const { name, email, phone } = location.state.contact;

   return (
      <MDBCard style={{ height: "300px", width: "300px", display: "flex" }}>
         <MDBCardImage src="https://mdbootstrap.com/img/new/avatars/8.jpg"
            style={{ borderRadius: "50%" }}
            position='top' alt='...' />
         <MDBCardBody style={{ minWidth: "300px", display: "flex", flexDirection: "column" }}>
            <MDBCardTitle style={{ fontWeight: "bold" }}>{name}</MDBCardTitle>
            <MDBCardTitle >Email: {email}</MDBCardTitle>
            <MDBCardTitle >Phone: {phone}</MDBCardTitle>
            <Link to="/edit" state={{ contact: location.state.contact }}>
               <MDBBtn>Edit Profile</MDBBtn>
            </Link>
         </MDBCardBody>
      </MDBCard>
   );
};

export default ContactDetail;
