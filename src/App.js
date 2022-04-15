import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import ListaDeTareas from './Componentes/ListaDeTareas';
	
function App(){
  return (
    <div className='aplicacion-tareas'>
    {/*  Aplicación COMPLETA  */}

      <div className='freecodecamp-logo-contenedor'>
        <img
          src={freeCodeCampLogo}
          className='freecodecamp-logo' />
      </div>

      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>

    {/*  FIN DE APLICAION  */}
    </div>
  );
}

export default App;
