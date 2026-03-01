import React from 'react'
import './design/Contenido.css'

import image_fond from '../img/imgFondo.jpg'
import { ComponenteColor } from './Contenido/ComponenteColor'
import { ComponenteFigura } from './Contenido/ComponenteFigura'

export const Contenido = () => {
  return (
    <div className='contenedor-clasico'>
      
      
     <section className='item'>
        <div className='contenedor_image'>
    
    <img  src={image_fond} alt=''/>


      </div>
    
      


      <div className='contenedor_edicion'>

 <h1 >Personaliza tu Lámpara</h1>{/*color:"#F4D06F"}*/}


  <ComponenteColor/>
 <br/>

  <ComponenteFigura/>
<br/>
  <button>Hacer Pedido</button>

 

      </div>

     </section>



      
      
      </div>
  )
}
