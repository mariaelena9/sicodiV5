import React, { Component } from 'react'
import { ImPencil2, ImOffice } from 'react-icons/im'
import { ImDisplay } from 'react-icons/im'
import { MdModeEdit, MdOutlineAlternateEmail, MdPassword } from 'react-icons/md'
import { AiFillEdit, AiFillDelete, AiFillInfoCircle } from 'react-icons/ai'
import { BsCursorText, BsFillTelephoneFill } from 'react-icons/bs'
import { RiShieldUserFill, RiUserStarFill } from 'react-icons/ri'


class Users extends Component {
    render() {
        return (
            <div className='users'>
                <div className="users__title">
                    <p>Administrador de Usuarios</p>
                </div>

                <div className='tables__info'>
                    <div className='user__insert'>
                        <div className='usersform__title'>
                            <p>Añadir usuario</p>
                        </div>

                        <form className='users__form'>
                            <div className='user__insert--data'>
                                <div className='user__insert-personal'>

                                    {/* Nombre Completo */}
                                    <div className='user__insert-contact_first'>
                                        <div className='user__insert-name'>
                                            <div className='icon-text'><BsCursorText /></div>
                                            <input
                                                type="text"
                                                placeholder='Nombre(s)'
                                            />
                                        </div>

                                        <div className='user__insert-materno'>
                                            <div className='icon-text'><BsCursorText /></div>
                                            <input
                                                type="text"
                                                placeholder='Ap. Materno' />
                                        </div>

                                        <div className='user__insert-paterno'>
                                            <div className='icon-text'><BsCursorText /></div>
                                            <input
                                                type="text"
                                                placeholder='Ap. Paterno' />
                                        </div>
                                    </div>

                                    {/* Contacto */}
                                    <div className='user__insert-contact'>
                                        <div className='user__insert-tel'>
                                            <div className='icon-text'><BsFillTelephoneFill /></div>
                                            <input
                                                placeholder='telefono'
                                                type="tel"
                                            />
                                        </div>

                                        <div className='user__insert-email'>
                                            <div className='icon-text'><MdOutlineAlternateEmail /></div>
                                            <input
                                                placeholder='correo'
                                                type="email"
                                            />
                                        </div>

                                        <div className='user__insert-pass'>
                                            <div className='icon-text'><MdPassword /></div>
                                            <input
                                                type="text"
                                                placeholder='password'
                                            />
                                        </div>
                                    </div>

                                    {/*Dependencias */}
                                    <div className='user__insert-cargo'>

                                        <div className='user__insert-depen'>
                                            <div className='icon-text'><ImOffice /></div>
                                            <div className='user__insert-select'>
                                                <select>
                                                    <option selected>Elegir dependencia...</option>
                                                    <option value="1">One</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className='user__insert-depen'>
                                            <div className='icon-text'><ImOffice /></div>
                                            <div className='user__insert-select'>
                                                <select>
                                                    <option selected>Elegir departamento...</option>
                                                    <option value="1">One</option>
                                                </select>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                            </div>

                            <div className='users__cargos'>
                                <div className='user__insert-depen'>
                                    <div className='icon-text'><ImOffice /></div>
                                    <div className='user__insert-select'>
                                        <select>
                                            <option selected>Elegir cargo...</option>
                                            <option value="1">One</option>
                                        </select>
                                    </div>

                                </div>

                                <div className='user__insert-depen'>
                                    <div className='icon-text'><ImOffice /></div>
                                    <div className='user__insert-select'>
                                        <select>
                                            <option selected>Elegir rol</option>
                                            <option value="1">One</option>
                                        </select>
                                    </div>

                                </div>
                            </div>
                            <div>
                                <div className='btn__user'>
                                    <button type="submit" className='btn__user--insert'>Registrar</button>
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* TABLA PARA VISUALIZAR USUARIOS */}
                    <div className='user__container'>
                        <div className="users__title--view">
                            <p>Registro de Usuarios</p>
                        </div>
                        
                        <div className='user_sub--view'>
                            <p>Filtrado para búsqueda</p>
                        </div>

                        <div className='user-filter'>
                            <div className='dep-filter--user'>
                                <p>Dependencia:</p>
                                <select>
                                    <option value="iddpto">Todas</option>
                                </select>
                            </div>

                            <div className='dpto-filter--user'>
                                <p>Departamento:</p>
                                <select>
                                    <option value="iddpto">Todos</option>
                                </select>
                            </div>
                        </div>

                        <div className='roles-filter--user'>
                            <div>
                                <button className='btn_admin'>
                                    <p>Administradores</p>
                                </button>
                            </div>

                            <div>
                                <button className='btn_capture'>
                                    <p>Capturistas</p>
                                </button>
                            </div>

                            <div>
                                <button className='btn_remitente'>
                                    <p>Remitentes</p>
                                </button>
                            </div>

                            <div>
                                <button className='btn_destinatario'>
                                    <p>Destinatarios</p>
                                </button>
                            </div>
                        </div>

                        <table class="table">
                            <thead class="thead">
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Nombre Completo</th>
                                    <th scope="col">Correo</th>
                                    <th scope="col">Contraseña</th>
                                    <th scope="col">Rol</th>
                                    <th scope="col">Opciones</th>
                                    <th scope="col"></th>

                                </tr>
                            </thead>
                            <tbody class="tbody">
                                <tr class="tdata">
                                    <td>1</td>
                                    <td>M Michelle Salinas Tirado</td>
                                    <td>michelle@gmail.com</td>
                                    <td>12345</td>
                                    <td>Administrador</td>
                                    <tr className='tr-direction'>
                                    <td><button className='btn_edit--user' title='Editar'><AiFillEdit/></button></td>
                                    <td><button className='btn_delete--user' title='Eliminar'><AiFillDelete/></button></td>
                                    <td><button className='btn_info--user' title='Info'><AiFillInfoCircle/></button></td>
                                    </tr>
                                    
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* <div className='user__container'>
                        <table class="table">
                           
                            <thead class=" header__table">
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Rol</th>
                                    <th scope='col'>Permisos</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Diego Asael Rubio Hernandez</td>
                                    <td>Destinatario</td>
                                    <td className='table-icon'><MdModeEdit /> <span><AiFillDelete /></span></td>
                                </tr>

                                <tr>
                                    <th scope="row">2</th>
                                    <td>M Michelle Salinas Tirado</td>
                                    <td>Destinatario</td>
                                    <td className='table-icon'><MdModeEdit /> <span><AiFillDelete /></span></td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Veronica Ramirez Jauregui</td>
                                    <td>Destinatario</td>
                                    <td className='table-icon'><MdModeEdit /> <span><AiFillDelete /></span></td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>Mildreth Gonzalez Sandoval</td>
                                    <td>Capturista</td>
                                    <td className='table-icon'><MdModeEdit /> <span><AiFillDelete /></span></td>
                                </tr>
                            </tbody>
                        </table>


                    </div> */}

                </div>

            </div>
        )
    }

}

export default Users;