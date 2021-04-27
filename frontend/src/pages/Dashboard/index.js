import React from 'react'
import DashButton from '../../components/DashButton'

import * as s from './style'

function Dashboard(props){
    const {title} = props
    return(
        <s.Dashboard>
            <s.Title>{title}</s.Title>
            <s.WrapMenu>
            <DashButton text="CADASTRAR" link_to="/create" img="create"/>
            <DashButton text="PESQUISAR" link_to="/search" img="search"/>
            <DashButton text="VISUALIZAR" link_to="/view" img="visualize"/>
            <DashButton text="AVALIAR" link_to="/evaluations" img="evaluation"/>
            </s.WrapMenu>
        </s.Dashboard>
    )
}

export default Dashboard