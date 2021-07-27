import './App.css';
import { Route, Switch } from 'react-router';
import Carcassonne from './components/Carcassonne';
import Cacao from './components/Cacao';
import Home from './components/Home';

function App() {
  
  return (

    <div className="page-container">
      <div className="content-wrap">
    
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/carcassonne" component={Carcassonne}/>
            <Route path="/cacao" component={Cacao}/>
          </Switch>

      </div>
    </div>
  
  );
}

export default App;
