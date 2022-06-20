import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import navBar from './componentes/navegacion/navbar';
import inicio from './componentes/paginas/inicio';
import items from './componentes/paginas/items';
import pokemon from './componentes/paginas/pokemon';
function App() {
  return (
    <div className="App">
      <Router>
        <navBar/>
        <switch>
          <Route path='/' exact component={inicio}/>
          <Route path='/pokemon' component={pokemon}/>
          <Route path='/items' component={items}/>
        </switch>
      </Router>
    </div>
  );
}

export default App;
