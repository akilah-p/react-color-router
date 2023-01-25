import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.js';
import Main from './components/Main/Main';
import NotFound from './components/NotFound';

function App() {
  
  return (
    <div className="App">
      <Switch>
        <Header exact path="/rgb/:r/:g/:b" component={Header} />     
        <Route exact path ="/">
          <Redirect to ="/rgb/255/255/0" />
          <Main />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
