import './style/reset.css';
import * as s from './style/style'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Menu from './components/Menu/';
import Dashboard from './pages/Dashboard'
import Evaluation from './pages/Evaluation';

function App() {
  return (
    <s.App>
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            
          </ul>
        </nav> */}

        <Switch>
          <Route exact path="/">
            <Dashboard title="Início"/>
          </Route>  
          <Route exact path="/evaluation">
            <Evaluation title="Avaliações"/>
          </Route>  

        </Switch>
      </div>
    <Menu/>

    </Router>

    </s.App>
  );
}

export default App;
