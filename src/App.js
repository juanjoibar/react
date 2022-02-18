
import './App.css';

import Contador from './components/Contador'
import Jsx from './components/Jsx'
import Lista from './components/Lista';
function App() {
  return (
    <div className="App">
     <h1>Hola React </h1>
     <Contador></Contador>
     <Contador></Contador>
     <Contador></Contador>
     <Jsx></Jsx>
      <Lista></Lista>
    </div>
  );
}

export default App;
