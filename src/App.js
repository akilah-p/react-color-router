import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.js';
import Main from './components/Main/Main';

function App() {
  
  return (
    <div className="App">
      <Header/>     
      <Switch>
        <Route path="/rbg/:red/:green/:blue">
          <Main />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
