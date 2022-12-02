import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
   return (
      <div className="ui.fixed.menu">
         <div style={{ margin: "10px" }} className="ui center aligned container">
            <h2 style={{ fontWeight: "bold" }}> <Link to="/">Contact Manager</Link></h2>
         </div>
      </div>
   )
}

export default Header
