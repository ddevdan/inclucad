import React, {useContext, useEffect, useState} from 'react'
import DashButton from '../../components/DashButton'
import AuthContext from '../../contexts/auth'
import api from '../../api/api'
import * as s from './style'

function Dashboard(props){
    const context = useContext(AuthContext);
    const {title, setLoggedIn} = props
    const [agente, setAgente] = useState(false)
    useEffect(() => {
        document.title = `INCLUCAD - Início`;
        api.currentUser()
        .then((res)=>{
            console.log(res.data.data)
            setLoggedIn({status:true, data:res.data.data})
            setAgente(res.data.data.agente)
            

        })
        .catch(err=> console.log(err))
      },[]);
    return(
        <s.Dashboard>
            <s.Title>{title}</s.Title>
            <s.WrapMenu>
            {agente ? <DashButton text="CADASTRAR" link_to="/register" img="create"/> : <></>}
            <DashButton text="PESQUISAR" link_to="/search" img="search"/>
            <DashButton text="VISUALIZAR" link_to="/view" img="visualize"/>
            {!agente ? <DashButton text="AVALIAR" link_to="/evaluations" img="evaluation"/> : <></>}
            </s.WrapMenu>
        </s.Dashboard>
    )
}

export default Dashboard