import React from 'react';
import Logo from './AdminLTELogo.png';
import Photo from './user4.jpg';

export default function Sidebar(){

    const usuario = localStorage.getItem("USUARIO");

    return(
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <a className="brand-link" href="#/">
                <img
                alt="AdminLTE Logo"
                className="brand-image img-circle elevation-3"
                style={{ opacity: 0.8}}
                src={Logo}
                />

                <span className="brand-text font-weight-ligth">CMS</span>
            </a>

            <div className="sidebar">
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <img 
                        alt="User Image"
                        className="img-circle elevation-2" 
                        src={Photo} />
    
                    </div>

                    <div className="info">
                        <a className="d-block">{usuario}</a>
                    </div>
                </div>

                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-colum"
                        data-widget="treeview"
                        role="menu"
                        data-accordion="false"
                    >
                        <li className="nav-item">
                            <a href="/" className="nav-link">
                                <i className="nav-icon fas fa-user-lock"></i>
                                <p>Administradores</p>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a href="/slide" className="nav-link">
                                <i className="nav-icon fas fa-sliders-h">
                                </i>
                                <p>Gestor Slide</p>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a href="/galeria" className="nav-link">
                                <i className="nav-icon fas fa-images"></i>
                                <p>Gestor Galeria</p>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a href="/articulos" className="nav-link">
                                <i className="nav-icon fa fa-file"></i>
                                <p>Gestor Articulos</p>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a href="/usuarios" className="nav-link">
                                <i className="nav-icon fa fa-users"></i>
                                <p>Usuarios</p>
                            </a>
                        </li>

                    </ul>                   
                </nav>
            </div>
        </aside>
    );
}