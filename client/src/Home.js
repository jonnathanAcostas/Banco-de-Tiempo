import React from 'react'
import { Grid, Paper, Avatar, Box, Link, TextField, Button, Typography, Link as Nv } from '@material-ui/core'
import { useHistory, useParams } from "react-router-dom";
import "../src/styles/style.css";
import { NavLink } from "react-router-dom";
import { textAlign } from '@mui/system';


const Home = () => {

  const paperStyle = { padding: 20, height: '80vh', width: 280, margin: "20px auto" }
  const avatarStyle = { backgroundColor: '#3370bd' }
  const btnstyle = { margin: '8px 0' }

  const { users } = useParams();
  let history = useHistory();

  const usersss = localStorage.getItem('users');

  const logout = () => {
    localStorage.removeItem("users")
    history.push("/");
  }

  return (
    <div className={"fondo"}>
      <div className={"logo"}>


        <Grid>
          <div style={{ float: "right", marginRight: "50px" }}>

            <Button type='submit' onClick={logout} color='danger' justifyContent="flex-end" variant="contained" style={btnstyle} fullWidth>Logout</Button>

          </div>
          <div style={{ float: "right", marginRight: "50px" }}>

            <NavLink to="Count" justifyContent="flex-end">
              <span style={{ marginTop: 10 }} className="btn btn-success btn-md">Estado de Cuenta</span>

            </NavLink>

          </div>
          <div style={{ float: "right", marginRight: "50px" }}>

            <NavLink to="Header" justifyContent="flex-end">
              <span style={{ marginTop: 10 }} className="btn btn-primary btn-md">Lista de Personas</span>

            </NavLink>
          </div>

        </Grid>


        <h4 style={{ textAlign: "left", marginLeft: "200px", color: 'White' }}>Bienvenido/a : <span style={{ color: "blue" }}>{usersss}</span></h4>
        <h2 style={{ color: "White", textAlign: "left", marginLeft: "10px", textAlign: "top", marginTop: "100px" }}>Qué es el  Banco de Tiempo?</h2>


        <div className={"logo1"}>

        </div>




      </div>
    </div>


  )
}

export default Home