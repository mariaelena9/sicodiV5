//Imports
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Sidebar from "../../commons/Sidebar/Sidebar";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { IoChevronBackOutline } from "react-icons/io5";
import axios from 'axios';
import Header from "../../commons/Header/Header";
import Directorio from "../Directory/Directorio";
import "./Correspondence.css"
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Menu from "../../commons/Menu/Menu";

class Correspondence extends Component {
    state = {
        data: [],
        form: {
            idUsuario: '',
            nombre: '',
            apellidos: '',
            correo: '',
        }
    }

    //Se ejecutará al momento de montar el componente
    componentDidMount() {
    }

    handleSubmit(e) {
        e.preventDefault();
        ReactDOM.render(<Directorio/>, document.getElementById('root'))
    }

    render() {
        return(
            <div className="body">
                <Header/>
                <div className="middle">
                    <Menu/>
                    <div className="correspondencecontent">
                        <div className="buttonBack">
                            <i onClick={this.handleSubmit}><IoChevronBackOutline/></i>
                            <p className="TitlePage">Nueva Correspondencia</p>
                        </div>
                        <br/>
                        <h3>Información básica</h3>
                        <form>
                            <div className="dates">
                                <TextField InputLabelProps={{ shrink: true }} required type="date" id="outlined-required" label="Fecha de emisión"></TextField>
                                <TextField InputLabelProps={{ shrink: true }} required type="date" id="outlined-required" label="Fecha de recepción"></TextField>
                                <TextField InputLabelProps={{ shrink: true }} required type="date" id="outlined-required" label="Fecha limite de respuesta"></TextField>
                            </div>

                            <h3>Información de origen</h3>
                            <div className="originInfo">
                                <InputLabel id="demo-simple-select-label">Dependencia de origen</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Dependencia de origen:"
                                    value="10"
                                >
                                    <MenuItem value={10}>Gobierno</MenuItem>
                                    <MenuItem value={20}>Transito</MenuItem>
                                    <MenuItem value={30}>Educacion</MenuItem>
                                </Select>
                                <br/>
                                <TextField required id="outlined-required" label="Nombre del remitente"></TextField>
                            </div>
                            <br/>
                            <h3>Información de destinatario</h3>
                            <div className="originInfo">
                                <InputLabel id="demo-simple-select-label">Dependencia de destino</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Dependencia de origen:"
                                    value="10"
                                >
                                    <MenuItem value={10}>Gobierno</MenuItem>
                                    <MenuItem value={20}>Transito</MenuItem>
                                    <MenuItem value={30}>Educacion</MenuItem>
                                </Select>
                                <br/>
                                <TextField required id="outlined-required" label="Dirigido a:"></TextField>
                            </div>
                            <br/>
                            <h3>Información de correspondencia</h3>
                            <div className="originInfo">
                                <InputLabel id="demo-simple-select-label">Tipo de correspondencia</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Tipo de correspondencia:"
                                    value="10"
                                    className="combo"
                                >
                                    <MenuItem value={10}>Circulares</MenuItem>
                                    <MenuItem value={20}>Paqueteria</MenuItem>
                                    <MenuItem value={30}>Oficios</MenuItem>
                                </Select>
                                <br/>
                                <TextField required id="outlined-required" label="Asunto:"></TextField>
                                <br/>
                                <TextField multiline rows={10} required id="outlined-required" label="Descripcion:"></TextField>
                                <br/>
                                <TextField multiline rows={5} required id="outlined-required" label="Observaciones:"></TextField>
                                <br/>
                                <p>
                                    Seleccionar archivos:
                                    <input className="fileButton" type="file" accept="image/png, image/jpeg" multiple></input>
                                </p>
                                <br/>
                                <button type="submit">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Correspondence;