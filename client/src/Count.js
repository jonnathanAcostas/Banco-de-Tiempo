import React, { Component } from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link as Nv, ListItem } from '@material-ui/core'
import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
class Count extends Component {

  state = {
    users: [],
    loading: true,
  }

  async componentDidMount() {
    const res = await axios.get("http://localhost:8000/api/users")

    //console.log(res);

    if (res.data.status === 200) {
      this.setState({
        users: res.data.users,
        loading: false,

      })
    }

  }
  render() {

    var user_HTMLTABLE = "";
    if (this.state.loading) {
      user_HTMLTABLE = <tr><td colSpan="8"><h2>Cargando....</h2></td></tr>
    }
    else {
      user_HTMLTABLE =
        this.state.users.map((item) => {
          return (
            <tr key= {item.id}>
              <td> {item.id}</td>
              <td> {item.name}</td>
              <td> {item.last_name}</td>
              <td> {item.saldo}</td>
              <td> 0</td>
              <td> 0</td>
              <td>
                <Link to={`Nofound`} className="btn btn-success btn-sm">Pagar tiempo</Link>
                </td> 
                 
            </tr>
          );

        }

        );
    }

    return (
      <div className="container">
        <div clas="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4>Estado de Cuenta</h4>
                <Link to ={`/`} className="btn btn-primary btn-sm float-end">Cerrar Sesión</Link>
                <Link to ={`/Home`} className="btn btn-primary btn-sm float-start">Volver</Link>
              </div>
              <div className="card-body"></div>
              <table className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>NOMBRE</th>
                    <th>APELLIDO</th>
                    <th>SALDO EN HORAS</th>
                    <th>HORAS GANADAS</th>
                    <th>HORAS GASTADAS</th>
                    <th>PAGAR TIEMPO</th>
                  </tr>
                </thead>
                <tbody>
                {user_HTMLTABLE}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    );
  }




}

export default Count;