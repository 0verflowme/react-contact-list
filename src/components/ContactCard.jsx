import React from "react";
import { Link } from "react-router-dom";
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';

function ContactCard(props) {
   const { id, name, email, phone } = props.contact;
   return (
      <MDBListGroup style={{ minWidth: '22rem', border: "none" }} light>

         <MDBListGroupItem className='d-flex justify-content-between align-items-center border-bottom'>
            <Link style={{ border: "none" }} to={`/contact/${id}`} state={{ contact: props.contact }}>
               <div className='d-flex align-items-center'>
                  <img
                     src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                     alt=''
                     style={{ width: '60px', height: '60px' }}
                     className='rounded-circle'
                  />
                  <div className='ms-3'>
                     <p className='fw-bold mb-1'>{name}</p>
                     <p className='text-muted mb-0'>{email}</p>
                     <p className='text-muted mb-0'>{phone}</p>
                  </div>
               </div>
            </Link>
            <div>
               <i
                  className="trash alternate outline icon right floated"
                  style={{ color: "red", fontSize: "20px", marginLeft: "10px" }}
                  onClick={() => props.clickHandler(id)}
               ></i>
               <Link to={`/edit`} state={{ contact: props.contact }}>
                  <i
                     className="edit alternate outline icon right floated"
                     style={{ color: "blue", fontSize: "20px" }}
                  ></i>
               </Link>
            </div>
         </MDBListGroupItem>

      </MDBListGroup >

   );
}

export default ContactCard;
