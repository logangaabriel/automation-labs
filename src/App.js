import React from 'react';
import './App.css';
import FlashCard from './components/FlashCard';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">Cadê Meu Inseto? - Automation Labs</h1>
        <p className="app-description">
          Aqui você poderá simular testes e desenvolver suas técnicas em um ambiente seguro e interativo, tudo isso enquanto se diverte!
        </p>
      </header>
      <div className="flash-cards">
        <FlashCard 
          title="Checkboxes" 
          description="Aprenda a interagir com elementos do tipo checkbox de forma prática e eficaz." 
          link="#"
        />
      </div>
      <footer className="app-footer">
        <p className="app-license">
          O Cadê meu inseto? é licenciado sob <a href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank" rel="noopener noreferrer">CC 4.0 BY-NC</a>
        </p>
        <p className="app-disclaimer">
          O conteúdo deste site não é comercializado e é destinado apenas para fins educacionais.
        </p>
      </footer>
    </div>
  );
}

export default App;
