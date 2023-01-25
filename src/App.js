import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import NotFound from './components/NotFound';
import Main from './components/Main/Main';

function App() {
  
  return (
    <div className="App">
      <Switch>
        <Route exact path="/rgb/:r/:g/:b" component={Main} />     
        <Route exact path ="/">
          <Redirect to ="/rgb/255/255/0" />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
