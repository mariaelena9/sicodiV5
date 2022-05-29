import { Component } from "react";
import ReactDOM from 'react-dom';
import axios from 'axios';

//Componentes
import Details from "../Details/Details"

//Iconos
import { AiOutlineSearch, AiFillEye } from "react-icons/ai";

//Archivo de configuracion
import { environment } from '../../config/settings';

class Received extends Component {
    state = {
        dependencias: [],
        correspondencias: [],
        corresFiltradas: [],
        keyword: '',
        filtroTipo: 'fk_TipoCo',
        filtroFecha: 'fechaEmisión',
        filtroDepen: 'fk_DependenciaO',
        files: []
    }

    async componentDidMount() {
        await this.getReceivedCorrespondence();
        this.getDependencies();
    }

    seeDetails = (id) => {
        axios.put(`${environment.urlServer}/correspondence/setRead/${id}`).then(res => {
            ReactDOM.render(<Details idcor={id} tipo={2} />, document.getElementById('root'));
        }).catch(error => {
            console.log(error.message);
        });
    }

    getDependencies = () => { //Consulta todas las dependencias de la BD
        axios.get(`${environment.urlServer}/dependence/getdependence`).then(res => {
            this.setState({ dependencias: res.data });
        }).catch(error => {
            console.log(error.message);
        });
    }

    getReceivedCorrespondence() {
        axios.get(`${environment.urlServer}/correspondence/getReceived/${localStorage.getItem("idusuario")}`).then(res => {
            this.setState({ correspondencias: res.data });
            this.setState({ corresFiltradas: res.data });
            this.checkCorrespondenceFile(res.data);
        }).catch(error => {
            console.log(error.message);
        });
    }

    checkCorrespondenceFile(_correspondencias) {
        const correspondencias = _correspondencias;
        for (let index = 0; index < correspondencias.length; index++) {
            const element = correspondencias[index];
            var id_Correspondencia = element.id_Correspondencia;
            
            axios.get(`${environment.urlServer}/files/link/${id_Correspondencia}`).then(res => {
                if (res.data == "Sin archivo") {
                    console.log("sin archivo");                   
                    correspondencias[index]["file"] = false;
                } else {
                    console.log(res.data);
                    var link  = res.data.link.split("/").pop();
                    correspondencias[index]["file"] = link;
                }
                this.setState({ correspondencias: correspondencias });
                //return correspondencias;
                
            }).catch(error => {
                console.log(error.message);
            });
            
        }
        
    }

    handleFilter = async (event) => {
        document.getElementById("keyword").value = "";
        switch (event.target.id) {
            case "tipo":
                this.state.filtroTipo = event.target.value;
                break;
            case "fecha":
                if(event.target.value==="") { 
                    this.state.filtroFecha = "fechaEmisión"; 
                    break;
                }
                this.state.filtroFecha = '"' + event.target.value + '"';
                break;
            case "dependencia":
                this.state.filtroDepen = event.target.value;
                break;
            default:
                break;
        }
        console.log(this.state);
        await axios.get(`${environment.urlServer}/correspondence/filterReceived/${this.state.filtroTipo}/${this.state.filtroFecha}/${this.state.filtroDepen}/${localStorage.getItem("idusuario")}`).then(res => {
            this.setState({ correspondencias: res.data });
            this.setState({ corresFiltradas: res.data });
            this.checkCorrespondenceFile(res.data)
        }).catch(error => {
            console.log(error.message);
        });
    }

    //Función base para manipular un objeto formulario, ayuda a controlar las modificaciones
    handleChange = (event) => {
        this.state.keyword = event.target.value;
        this.state.correspondencias = this.state.corresFiltradas.filter(user => user.usuarioO.toLowerCase().includes(this.state.keyword.toLowerCase()));
        console.log(this.state.correspondencias);
        this.getDependencies();
    }

    render() {
        console.log(this.state)
        return (
            <div className="sentcontent">
                <div className="buttonBack">
                    <p className="TitlePage">Recibidos</p>
                </div>
                <br></br>
                
                <div className="sentsearch">
                    <div className="icon-search"> <AiOutlineSearch /> </div>
                    <input 
                        type='text' 
                        placeholder="Buscar en toda la correspondencia" 
                        name="keyword" 
                        id="keyword" 
                        onChange={this.handleChange}>
                    </input>
                </div>

                <br />

                <div className="filtersDiv">
                    <div className="filterInd">
                        <label className="info_de">Filtrar por dependencia</label>
                        <select name="deps" id="dependencia" onChange={this.handleFilter}>
                            <option value="fk_DependenciaO">Selecciona Dependencia</option>
                            {this.state.dependencias.map(elemento => (
                                <option onChange={this.change} key={elemento.iddependencia} value={elemento.iddependencia}>{elemento.nombre}</option>
                            ))}
                        </select>
                    </div>
                    <div className="filterInd">
                        <label className="info_de">Filtrar por fecha de emisión</label>
                        <br></br>
                        <input type="date" id="fecha" label="Filtrar por fecha" onChange={this.handleFilter}></input>
                    </div>
                </div>

                <div className="filtersbtn">
                    <button value="fk_TipoCo" id="tipo" className="btnall" onClick={this.handleFilter}>Todos</button>
                    <button value="1" id="tipo" className="btnproc" onClick={this.handleFilter}>Informativos</button>
                    <button value="2" id="tipo" className="btnsent" onClick={this.handleFilter}>Requerimentos</button>
                    <button value="3" id="tipo" className="btnstore" onClick={this.handleFilter}>Copias</button>
                </div>

                <br />

                {this.state.correspondencias.length === 0 ? <h2>Sin enviados</h2> : ""}

                <table>
                    <tbody>
                        {this.state.correspondencias.map(elemento => (
                            <tr className="sentrow">
                                <td onClick={() => this.seeDetails(elemento.id_Correspondencia)}>
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <p className="info_de"><span>De: </span>{elemento.usuarioO}</p>
                                        <p className="info_para"><span>Fecha: </span>
                                            {new Date(elemento.fechaEmisión).getUTCDate() >= 10 ? new Date(elemento.fechaEmisión).getUTCDate() : "0" + new Date(elemento.fechaEmisión).getUTCDate()}/
                                            {new Date(elemento.fechaEmisión).toLocaleString('default', { month: 'short' })}/
                                            {new Date(elemento.fechaEmisión).getFullYear()}
                                        </p>
                                    </div>
                                    <p className="info_de"><span>Asunto: </span> {elemento.asunto} </p>
                                    {/* <p>{elemento.descripción}</p> */}
                                </td>
                                <td style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                    <p className="info_para">{elemento.tipo}</p>
                                   
                                    {
                                        elemento.leida === 0 ?
                                            <div style={{ width: "10px", height: "10px", borderRadius: "100%", backgroundColor: "red", marginTop: ".5em", marginBottom: ".5em"}}></div>
                                            : <div style={{ width: "10px", height: "10px", borderRadius: "100%", backgroundColor: "gray",marginTop: ".5em", marginBottom: ".5em" }}></div>
                                    }
                                   
                                    {
                                        (elemento.file) != false && elemento.file ? <a href={environment.urlServer+'/files/download/'+elemento.file} target="_blank"> <AiFillEye /></a > : <AiFillEye style={{opacity: ".1"}}/>
                                    }
                                    
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Received;