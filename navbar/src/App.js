import logo from './logo.svg';
import './App.css';
import Redes from './components/redes/redes';
import Eu from './components/eu/eu';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Eu></Eu>
      <Redes></Redes>


    </div>
  );
}

export default App;
