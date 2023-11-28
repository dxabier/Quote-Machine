import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import diccionario from './assets/citas'
// import { aleatorio } from './assets/citas.jsx'
import './App.css'



function App() {
    
  // const [inicio, setInicio] = useState(true)  
  const autores = Object.keys(diccionario) // autores de las citas
  const texto = Object.values(diccionario) // texto de las citas
  
  var aleatorio = () => {
    return Math.floor(Math.random() * autores.length)
  } 

  console.log(aleatorio())
  const [posicion, setPosicion] = useState(aleatorio())

  const handleClick = () => {
    let ale = Math.floor(Math.random() * autores.length)
    // setInicio(false)
    
    setPosicion(ale)      
  }

  return (
    <>
      <div id="quote-box" className='container text-center'>
      <h1 id="title">Máquina de Citas Inspiracionales</h1>
        <div className='card'>          
          <h2 className='card-body'>            
            <h4 id="text">{texto[posicion]}</h4>
          </h2>            
          <h3 id="author" className='card-header'>{autores[posicion]}</h3>
        </div>
        
          <div className='row'>
            <button id="new-quote" className='btn btn-primary' onClick={handleClick}>Nueva Cita</button>      
          </div>
          <div id="ancla">
            <a id="tweet-quote" className='icon-link icon-link-hover' href={`https://twitter.com/intent/tweet?text=${texto[posicion]}`} target='_blank' rel="noreferrer">
              <img src='src/x.jpg' alt="x logo"></img>
            </a>            
          </div>          
        
      </div>
    </>
  )
}

export default App
