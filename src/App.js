import React from 'react';
import {BrowserRouter  as Router,Switch,Route,Link} from 'react-router-dom';
import ArticlePage from './pages/ArticlePage'
import './assets/css/App.css';

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact><Tmp/></Route>
            <Route component={ArticlePage}/>
          </Switch>
        </Router> 
    </div>
  );
}

const Tmp = () => (<>Homepage<br></br><Link to="/article/test-page">TestPage</Link></>)

export default App;
