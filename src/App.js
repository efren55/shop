import './App.css';
import Header from './componentes/Header';
import Productos from './componentes/Productos';
import Galeria from './componentes/Galeria';
import Footer from './componentes/Footer';

function App() {
  return (
    <div className="App">
      <Header/>

      <div className='hero'>
        <Productos/>
        <Galeria/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
