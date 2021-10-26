import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Link, NavLink } from "react-router-dom";
import {useState} from 'react';
import axios from 'axios';
import "./styles/style.css"
 
const Signup=()=>{
 
    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#3370bd'}
    const btnstyle={margin:'8px 0'}
 
    const[errors,setErrors] = useState('');
    const [user, setUser] = useState({
        name: "",
        lastname:"",
        offer:"",
        email: "",
        phonenumber:"",
        saldo: 4,
        password:""
      });
      
      const {name,lastname,offer, email,phonenumber, saldo, password} = user;
      const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
      };
 
   async function  signup()
       {
        console.log('usuario', user);
        let result = await axios.post("http://localhost:8000/api/register",user);
         
        setErrors('Registration Successful')
        setUser({name:"",lastname:"",offer:"", email:"",phonenumber:"",saldo: 4, password:""}) // To Clear all fields
 
        }  
     
    return(
        <div className={"fondosing"}>
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Registro</h2>
                    <h3 style={{color:"green"}}>{errors}</h3>
                </Grid>
                
                <TextField label='Nombre' name="name" value={name} onChange={e => onInputChange(e)} placeholder='Nombre' type='text' fullWidth required/>
                <TextField label='Apellido' name="lastname" value={lastname} onChange={e => onInputChange(e)} placeholder='Apellido' type='text' fullWidth required/>
                <TextField label='Oferta de Servicio' name="offer" value={offer} onChange={e => onInputChange(e)} placeholder='Oferta de servicio' type='text' fullWidth required/>
                <TextField label='Email'  name="email" value={email}  onChange={e => onInputChange(e)} placeholder='Email' type='text' fullWidth required/>
                <TextField label='Teléfono' name="phonenumber" value={phonenumber} onChange={e => onInputChange(e)} placeholder='Teléfono' type='text' fullWidth required/>
                <TextField label='Password'  name="password" value={password}  onChange={e => onInputChange(e)} placeholder=' password' type='text' fullWidth required/>
             
                <Button type='submit' onClick={signup} color='primary' variant="contained" style={btnstyle} fullWidth>Registrarse</Button>
              
                <Typography>Ingrese aqui 
                   <NavLink to="/">
                       <span style={{marginLeft:"4px"}}>Login</span>
                  </NavLink>
                </Typography>
            </Paper>
        </Grid>
        </div>
    )
}
 
export default Signup