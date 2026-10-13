import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import { TarjetaInfo } from './components/TarjetaInfo';
import { ListaTareas } from './components/ListaTareas';

export default function App() {
  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', fontFamily: 'Arial, sans-serif', padding: '0 20px' }}>
      <h1>Mi Proyecto en React</h1>
      
      {/* componente con props */}
      <TarjetaInfo 
        titulo="Modulo de Bienvenida" 
        descripcion="Este componente es independiente y recibe sus datos por props." 
      />

      <hr style={{ margin: '20px 0', border: 'none', borderTop: '1px solid #eee' }} />

      {/* componente con estado y lista automatica */}
      <ListaTareas />
    </div>
  );
}