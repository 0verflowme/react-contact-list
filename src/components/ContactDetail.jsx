import React from "react";
import { Link, useLocation } from "react-router-dom";
import user from "../assets/user.jpg";

const ContactDetail = (props) => {
   // HERE DUE TO NEW VERSION OF ROUTER useLocation IS USED AND
   // FROM CONTACTCARD IN LINK IT TOOK STATE AND THEN IT IS PASSED HERE
   let location = useLocation();
   const { name, email, phone } = location.state.contact;

   return (
      <div className="main">
         <div className="ui center aligned card">
            <div className="image">
               <img src={user} alt="user"></img>
            </div>
            <div className="content">
               <div className="header">{name}</div>
               <div className="description">{email}</div>
               <div className="description">{phone}</div>
            </div>
         </div>
         <Link to="/edit" state={{ contact: location.state.contact }}>
            <div className="center div">
               <button className="ui red button center aligned ">
                  Edit Contact
               </button>
            </div>
         </Link>
      </div>
   );
};

export default ContactDetail;
