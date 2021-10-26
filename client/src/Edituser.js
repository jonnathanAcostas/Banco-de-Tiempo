import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

class Edituser extends Component {

    state = {
        name: '',
        last_name: '',
        offer: '',
        email: '',
        phone_number: '',
    }

    handleImput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    async componentDidMount() {
        const user_id = this.props.match.params.id;
        // console.log(user_id);
        const res = await axios.get(`http://localhost:8000/api/edit-user/${user_id}`);
        if (res.data.status === 200) {
            this.setState({
                name: res.data.user.name,
                last_name: res.data.user.last_name,
                offer: res.data.user.offer,
                email: res.data.user.email,
                phone_number: res.data.user.phone_number,
            });
        }
    }

    updateUser = async (e) => {
        e.preventDefault();


        document.getElementById('updatebtn').disabled = true;
        document.getElementById('updatebtn').innerText = "Actualizando";
        const user_id = this.props.match.params.id;
        const res = await axios.put(`http://localhost:8000/api/update-user/${user_id}`, this.state);

        if (res.data.status === 200) {

            console.log(res.data.message);
            document.getElementById('updatebtn').disabled = false;
            document.getElementById('updatebtn').innerText = "Editar Usuario";
            alert("Usuario actualizado exitosamente");
        }

    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h4> Editar Usuario
                                    <Link to={'/Header'} className="btn btn-primary btn-sm float-end">Volver</Link>
                                </h4>
                            </div>
                            <div className="card-body">

                                <form onSubmit={this.updateUser}>
                                    <div className=" form-group mb-3">
                                        <label>Nombre</label>
                                        <input type="text" name="name" onChange={this.handleImput} value={this.state.name} className="form-control"></input>

                                    </div>
                                    <div className=" form-group mb-3">
                                        <label>Apellido</label>
                                        <input type="text" name="lastname" onChange={this.handleImput} value={this.state.last_name} className="form-control"></input>

                                    </div>
                                    <div className=" form-group mb-3">
                                        <label>Oferta</label>
                                        <input type="text" name="offer" onChange={this.handleImput} value={this.state.offer} className="form-control"></input>

                                    </div>
                                    <div className=" form-group mb-3">
                                        <label>Email</label>
                                        <input type="text" name="email" onChange={this.handleImput} value={this.state.email} className="form-control"></input>

                                    </div>
                                    <div className=" form-group mb-3">
                                        <label>Telefono</label>
                                        <input type="text" name="phone" onChange={this.handleImput} value={this.state.phone_number} className="form-control"></input>

                                    </div>
                                    <div className="form-group mb-3">
                                        <button type="submit" id="updatebtn" className="btn btn-primary">Editar Usuario</button>
                                    </div>

                                </form>

                            </div>
                        </div>


                    </div>

                </div>

            </div>
        )
    }


}
export default Edituser;