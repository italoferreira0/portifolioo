import './App.css';

import Navbar from './componentes/Navbar/Navbar';
import Apresentacao from './componentes/Apresentacao/Apresentacao';
import Sobre_mim from './componentes/Sobre_mim/Sobre_mim';
import Projetos from './componentes/Projetos/Projetos';
import Tecnologias from './componentes/Tecnologias/Tecnologias';
import Contato from './componentes/Contato/Contato';

function App() {
  
  return (
    <div className="App">
    <script crossOrigin='anonymous' integrity='' src="https://unpkg.com/typeit@8.7.1/dist/index.umd.js"></script>

      <header className="">
        <Navbar/>
        <Apresentacao/>
        <Sobre_mim/>
        <Projetos/>
        <Tecnologias/>
        <Contato/>
      </header>
    </div>
  );
}

export default App;
