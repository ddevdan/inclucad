import React, { useState } from 'react'
import * as s from './style'
import LogoImg from '../../assets/images/logo.svg'
import MenuImg from '../../assets/images/menu.svg'
import CloseImg from '../../assets/images/close.svg'
import DashButton from '../DashButton'
import {Link} from 'react-router-dom'

function Menu(props) {
    const [openMenu, setOpenMenu] = useState(false)
    function handleMenuOpen() {
        setOpenMenu(!openMenu)
        
    }

    function ShowMenu(){
        if(openMenu){
            return menu
        }
        return <></>
    }

    let menu = <s.MenuOpened onClick={handleMenuOpen}>
    <s.wrapButtons>
    <DashButton text="INICIO" link_to="/" img="home"  />
    <DashButton text="CADASTRAR" link_to="/create" img="create"  />
    <DashButton text="PESQUISAR" link_to="/search" img="search"  />
    <DashButton text="VISUALIZAR" link_to="/view" img="visualize"  />
    <DashButton text="AVALIAR" link_to="/evaluation" img="evaluation"  />
    <s.CLoseWraper>
        <s.Close onClick={handleMenuOpen} className="menu__cursor">
            FECHAR MENU <img src={CloseImg} alt="Close Menu" />
        </s.Close>
    </s.CLoseWraper>
    </s.wrapButtons>
</s.MenuOpened>
    return (
        <s.Menu>
            <ShowMenu></ShowMenu>
            <s.WrapMenuItems>
                <div onClick={handleMenuOpen} className="menu__cursor">
                    <img className="menu__icon" src={MenuImg} alt="Menu Icon" />
                </div>
                <Link to="/" className="menu__cursor">
                <img src={LogoImg} alt="INCLUCAD Logo Icon" />
                </Link>
            </s.WrapMenuItems>
        </s.Menu>

    )
}

export default Menu