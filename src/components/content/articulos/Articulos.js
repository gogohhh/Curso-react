import React from 'react';
import {rutaAPI} from '../../../config/Config';

import 'datatables.net';
import 'datatables.net-bs4';
import $ from 'jquery';
import 'datatables.net-responsive';

export default function Articulos(){

    const Portada01 = `${rutaAPI}/mostrar-img-articulos/lorem-ipsum-1+5720.jpg`; 


    return(
        <div className="content-wrapper" style={{minHeight: "494px"}}>
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0 text-dark">Articulos</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                          <div className="col-lg-12">
                            <div className="card card-primary card-outline">
                                
                                <div className="card-header">
                                    <h5 className="m-0">
                                        <button className="btn btn-primary">Crear nuevo articulo</button>
                                    </h5>
                                </div>
                                <div className="card-body">
                                    
                                    <table className="table table-striped table-bordered dt-responsive" style={{"width":"100"}}>
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Portada</th>
                                                <th>Url</th>
                                                <th>Titulo</th>
                                                <th>Intro</th>
                                                <th>Contenido</th>
                                            </tr>
                                        </thead>

                                        <tbody>

                                            <tr>

                                            <td>1</td>
                                            <td><img src={Portada01} className="img-fluid"/></td>
                                            <td>lorem-ipsum-1</td>
                                            <td>Lorem Ipsum 1</td>
                                            <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae accusamus voluptatum omnis non facere itaque aliquam temporibus, nisi pariatur facilis similique possimus eaque iure doloribus natus animi eos, suscipit eum!</td>
                                            <td>
                                            Este es el titulo del articulo 1
                                            <img src="http://localhost:4000/mostrar-img/4076.jpg"
                                            className="py-3 img-fluid"/>
                                            <div>Lorem ipsum dolor</div>
                                            </td>

                                            <td>
                                                <div class="btn-group" >
                                                    <button type="button" className="btn btn-warning rounded-circle mr-2">
                                                        <i className="nav-icon fas fa-pencil-alt"></i>
                                                    </button>
                                                    <button type="button" className="btn btn-danger rounded-circle">
                                                        <i className="nav-icon fas fa-trash"></i>
                                                    </button>
                                                </div>
                                            </td>

                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    );
}