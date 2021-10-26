import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import "./styles/style.css"

class Nofound extends Component {

render(){
    return(
        <div className ={"no-found"}>

<Link to={'/Count'} className="btn btn-primary btn-lg float-start" style={{marginTop:"20px", marginLeft:"20px"}} >Volver</Link>
        </div>
    )
}
}

export default Nofound;