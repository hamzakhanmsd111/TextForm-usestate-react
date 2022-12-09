import React from 'react'
import proptypes from'prop-types'

export default function Navbar (props) {
  return (
   <>
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="/">{props.title}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="/">{props.Home} <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">{props.Features}</a>
      </li>
     
        
      
    </ul>
  </div>
 

</nav>


   </>
  
  )
}
Navbar.prototypes={title:proptypes.string,pricing:proptypes.string}
Navbar.defaultProps={title:'Protfilo', Home:'Home' ,Features:'About'}