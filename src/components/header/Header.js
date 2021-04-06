import React from 'react';

export default function Header(){

    const cerrarSesion = function(){

        localStorage.removeItem("ACCESS_TOKEN");
        localStorage.removeItem("ID");
        localStorage.removeItem("USUARIO");
    }

    return(
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" 
                    data-widget="pushmenu" 
                    href="#/" 
                    role="button">
                        <i className="fas fa-bars">
                        </i>
                    </a>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                    <a href="index3.html" 
                    className="nav-link">Home</a>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                    <a href="#/" 
                    className="nav-link">Contact</a>
                </li>
            </ul>

            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link" 
                    href="/"
                    onClick={()=>{
                        cerrarSesion()
                    }}
                    >
                        <i className="fas fa-sign-out-alt"></i>
                    </a>
                </li>
            </ul>
        </nav>
    );
}