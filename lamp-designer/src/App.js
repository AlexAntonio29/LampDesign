import logo from './logo.svg';

import logo2 from './img/logo.png'

import './App.css';
import { MenuPrincipal } from './estructura/MenuPrincipal';
import { Footer } from './estructura/Footer';
import { Contenido } from './estructura/Contenido';
import { Slogan } from './estructura/Slogan';

function App() {
  return (
    <div className="App">

      <MenuPrincipal/>
      

      <Contenido/>

      <Slogan/>

      <Footer/>
    </div>
  );
}

export default App;
