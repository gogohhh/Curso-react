import React, {useState} from 'react';
import { rutaAPI } from '../../config/Config.js';
import $ from 'jquery';

export default function Login(){

    /** HOOK PARA INICIAR SESION */

    const [administradores, iniciarSesion] = useState({
        usuario: "",
        password: ""
    });

    /** CAPTURAMOS CAMBIOS DEL FORMULARIO PARA EJECUTAR EL HOOK*/
    const cambiaForm = e =>{

        iniciarSesion({

            ...administradores,
            [e.target.name]: e.target.value
        })
    }

    /** EJECUTAMOS EL SUBMIT DEL FORMULARIO */

    const login = async e =>{

        $(".alert").remove();

        e.preventDefault();
        const result = await loginAPI(administradores);

        if(result.status !== 200){
            $("button[type='submit']").before(`<div class="alert alert-danger" role="alert">${result.mensaje}</div>`)
        }else{
            localStorage.setItem("ACCESS_TOKEN", result.token);
            localStorage.setItem("ID", result.data._id);
            localStorage.setItem("USUARIO", result.data.usuario);

            window.location.href = "/";
        }
    }


    /* RETORNAMOS LA VISTA*/


    return(
    <div className="login-page" style={{minHeight: "648.391px"}}>
        <div className="login-box">
            <div className="login-logo">
                <b>Logo CMS</b>
            </div>

            <div className="card">
                <div className="card-body login-card-body">
                    <p className="login-box-msg">Sign in to start your session</p>
                    
                    <form onChange={cambiaForm} onSubmit={login}>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Email/usuario" name="usuario" />

                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-envelope"></span>
                                </div>
                            </div>

                        </div>

                        <div className="input-group mb-3">
                            <input type="password" className="form-control" placeholder="Password" name="password" />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-lock"></span>
                                </div>
                            </div>
                        </div>

                    <div className="row">
                        
                        <div className="col-4">
                            <button type="submit" className="btn btn-primary btn-block">Ingresar</button>
                        </div>
          
                    </div>
                    </form>
                </div>
            </div> 
        </div>
    </div>
    );
}

/** PETICION POST PARA LOGIN */

const loginAPI = data => {
    const url = `${rutaAPI}/login`;

    const params = {

        method: 'POST',
        body: JSON.stringify(data),
        headers: {

            "Content-Type": "application/json"
        }

    }

    return fetch(url,params).then( response => {

        return response.json();

    }).then( result => {
        return result;
    }

    ).catch( err => {
        return err;
    })
}