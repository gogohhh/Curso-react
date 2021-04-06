import React from 'react';

export default function Error404(){
    return(
 <div className="content-wrapper" style={{minHeight: "1570.25px"}}>
    <section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1>404 Error Page</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active">404 Error Page</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
    <section className="content">
        <div className="error-page">
         <h2 className="headline text-warning"> 404</h2>
        </div>
        <div className="error-content">
            <h3><i className="fas fa-exclamation-triangle text-warning"></i> Oops! Page not found.</h3>

            <p>
                No pudimos encontrar la pagina que estas buscando, deberias
                <a href="../../index.html"> regresar al inicio</a> o intenta usar el buscador.
            </p>

            <form className="search-form">
            <div className="input-group">
                <input type="text" name="search" className="form-control" placeholder="Search"></input>

                <div className="input-group-append">
                <button type="submit" name="submit" className="btn btn-warning"><i className="fas fa-search"></i>
                </button>
                </div>

            </div>
            </form>
        </div>
    </section>
 </div>
       
    );
}
