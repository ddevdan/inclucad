import React, { useState, useEffect} from 'react'
import  { useHistory } from 'react-router-dom'
import * as s from './style'
import LogoImg from '../../assets/images/logo_animated.svg'
import MenuImg from '../../assets/images/menu.svg'
import CloseImg from '../../assets/images/close.svg'
import DashButton from '../DashButton'
import {Link} from 'react-router-dom'
import api from '../../api/api'


function Menu(props) {
    const {setLoggedIn, data} = props
    const history = useHistory()
    const [openMenu, setOpenMenu] = useState(false)
    const [user, setUser] = useState(false)
    const [agente, setAgente] = useState(false)

    useEffect(() => {
        document.title = `INCLUCAD - Início`;
        api.currentUser()
        .then((res)=>{
            console.log(res.data.data)
            setLoggedIn({status:true, data:res.data.data})
            setAgente(res.data.data.agente)
            setUser(true)
            

        })
        .catch(err=> console.log(err))
      },[]);
    function handleMenuOpen() {
        setOpenMenu(!openMenu)
        
    }

    function ShowMenu(){
        if(openMenu){
            return menu
        }
        return <></>
    }

    function signOut(){
        api.auth.userLogOut(data)
        localStorage.removeItem('headers');
        setLoggedIn({data:{}, status:false})
        history.push('/auth/login')



    }

    let menu = <s.MenuOpened onClick={handleMenuOpen}>
    <s.wrapButtons>
    <DashButton text="INICIO" link_to="/home" img="home"  />
    {agente && <DashButton text="CADASTRAR" link_to="/register" img="create"/>}
    <DashButton text="PESQUISAR" link_to="/search" img="search"/>
    <DashButton text="VISUALIZAR" link_to="/view" img="visualize"/>
    {!agente && <DashButton text="AVALIAÇÕES" link_to="/evaluations" img="evaluation"/> }
    <s.CLoseWraper>
        <s.Close onClick={handleMenuOpen} className="menu__cursor">
            FECHAR MENU <img src={CloseImg} alt="Close Menu" />
        </s.Close>
        <div className="sign_out__button" onClick={signOut}>SAIR</div>
    </s.CLoseWraper>
    </s.wrapButtons>
</s.MenuOpened>
    return (
        user ?
        <s.Menu>
            <ShowMenu></ShowMenu>
            <s.WrapMenuItems>
                <div onClick={handleMenuOpen} className="menu__cursor">
                    <img className="menu__icon" src={MenuImg} alt="Menu Icon" />
                </div>
                <img src={LogoImg} alt="INCLUCAD Logo Icon" />
            </s.WrapMenuItems>
        </s.Menu>
        : <></>

    )
}

export default Menu