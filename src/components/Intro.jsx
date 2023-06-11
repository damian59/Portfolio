import { useEffect, useState } from 'react';
import '../styles/intro.css'
import perfil from "../assets/fotoPerfil.png"

const Intro = () => {
    
    const [showTitle, setShowTitle] = useState(false);
    const [showText, setShowText] = useState(false);
  
    useEffect(() => {
      const titleTimer = setTimeout(() => {
        setShowTitle(true);
      }, 500);
  
      const textTimer = setTimeout(() => {
        setShowText(true);
      }, 1000);
  
      return () => {
        clearTimeout(titleTimer);
        clearTimeout(textTimer);
      };
    }, []);
  
    return (
      <div className='pagIntro'>
      <img src={perfil} alt="fotoPerfil" />
      <header className="header">
        {showTitle && <h1 className="header-title">Bienvenido a mi portafolio</h1>}
        {showText && (
          <>
            <p className="typing-text">¡Hola, soy Damian!</p>
            <p className="role">Desarrollador FullStack</p>
          </>
        )}
      </header>
      </div>
    );
}

export default Intro