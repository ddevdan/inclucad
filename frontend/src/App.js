import './style/reset.css';
import * as s from './style/style'
import {
  Switch,
  Route,
} from "react-router-dom";
import Menu from './components/Menu/';
import Dashboard from './pages/Dashboard'
import Evaluations from './pages/Evaluations';
import { useHistory } from "react-router-dom";
import BackImg from './assets/images/back.svg'
import Evaluate from './pages/Evaluate';
import Login from './pages/Login';
import { useState, useEffect, useMemo } from 'react';
import api from './api/api'
import AuthContext from './contexts/auth'

function App() {
  let history = useHistory()
  const [loggedIn, setLoggedIn] = useState({data:{}, status:true})
  const [login, setLogin] = useState(0)
  
   useEffect( () => {
    // Atualiza o titulo do documento usando a API do browser
    // api.currentUser()
     api.currentUser().then(res =>{
       setLoggedIn({data:res.data, status:true})

    }).catch(err => {
      setLoggedIn({data:{}, status:false})
      history.push('/auth/login')
    })
    
  }, [login]);

  useEffect(() =>{
    if (!loggedIn.status){
      history.push("/auth/login")
    } 
  }, [loggedIn.status])

  const goBack = () => history.push('/')
  const GoBackButton = () => (
    <s.GoBack >
      <div onClick={goBack}>
        <img src={BackImg} alt="Icone de seta indicando a volta para a tela anterior" /> <p>Voltar</p>
      </div>
    </s.GoBack>
    )

  return (
    <s.App>
      <AuthContext.Provider value={{loggedIn}}>
        <div>
          <Switch>

            <Route exact path="/">
              <Dashboard title="Início" />
            </Route>
            <Route exact path="/evaluations">
              <Evaluations title="Avaliações" GoBack={GoBackButton} />
            </Route>

            <Route exact path="/evaluations/:id">
              <Evaluate title="Avaliação" GoBack={GoBackButton} />
            </Route>

            <Route exact path="/auth/login">
              <Login setLoggedIn={setLoggedIn}/>
            </Route>

            <Route path="*">
              <h1>NOT FOUND ://</h1>
            </Route>

          </Switch>

        </div>
        {loggedIn.status ? <Menu setLoggedIn={setLoggedIn} data={loggedIn.data}/> : <></>}


      </AuthContext.Provider>
    </s.App>
  );
}

export default App;
