import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import jwtDecode from 'jwt-decode';

import Login from './components/auth/Login';

import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Footer from './components/footer/Footer';

import Administradores from './components/content/administradores/Administradores';
import Articulos from './components/content/articulos/Articulos';
import Galeria from './components/content/galeria/Galeria';
import Slide from './components/content/slide/Slide';
import Usuarios from './components/content/usuarios/Usuarios';
import Error404 from './components/content/error404/error404';


function App() {

  const auth = getAccesToken();

  if(!auth){
    return(
      <Login/>
    );
  }

  return (
    <div className="sidebar-mini">
      <div className="wrapper">

          <Header/>
          <Sidebar/>

          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Administradores}/>
              <Route exact path="/articulos" component={Articulos}/>
              <Route exact path="/galeria" component={Galeria}/>
              <Route exact path="/slide" component={Slide}/>
              <Route exact path="/usuarios" component={Usuarios}/>
              <Route component={Error404}/>

            </Switch>
          </BrowserRouter>

          <Footer/>

      </div>
    </div>
  );
}

const getAccesToken = ()=>{
  
  const accessToken = localStorage.getItem("ACCESS_TOKEN");
  
  const id = localStorage.getItem("ID");
  
  const usuario = localStorage.getItem("USUARIO");


  if( tokenExpira(accessToken) || !accessToken || accessToken === null ||
      !id || id === null ||
      !usuario || usuario === null ){

    return false;
  }

  const megaToken = jwtDecode(accessToken);
  
  if(!megaToken.data){
    return false
  }

  if(tokenExpira(accessToken,megaToken) ||  megaToken.data._id !== id || megaToken.data.usuario !== usuario ){
    return false;
  }else{
    return true;
  }

}

/** FUNCION DE FECHA DE EXPIRACION DEL TOKEN */

const tokenExpira = (accessToken, megaToken)=>{

  const seconds = 60;
 
  const exp = 1619564773; /**AQUI SE COLOCO MANUALMNENTE LA FECHA DE EXPIRACION YA QUE JWTDECODE NO ENCONTRABA LA PROPIEDAD EN EL TOKEN */

  const expCaducado = exp / 2000;

  const now = (Date.now()+seconds)/1000;
  
  return exp < now;
  
}

export default App;
