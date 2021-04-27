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
import { useHistory } from "react-router-dom";
import BackImg from './assets/images/back.svg'
function App() {
  let history = useHistory()
  const goBack = () => history.goBack()
  const GoBackButton = () => <s.GoBack ><div onClick={goBack}>
    <img src={BackImg} alt="Icone de seta indicando a volta para a tela anterior"/> <p>Voltar</p></div></s.GoBack>
  return (
    <s.App>
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
            <Evaluation title="Avaliações" GoBack={GoBackButton}/>
          </Route>  

        </Switch>
      </div>
    <Menu/>

    

    </s.App>
  );
}

export default App;
