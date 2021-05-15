import React from 'react'
import * as s from './styles'
import NotFound from '../../assets/images/notfound.svg'
export default function Chart({children, title, data}){
    return (
     <s.wrapChart>
        <h1>{title}</h1>
        {data === undefined ? <s.Chart> <p>  <img src={NotFound} alt="Nada encontrado"/> Não há dados para este gráfico</p> </s.Chart>: <s.Chart>
        {children}
        </s.Chart>}
    </s.wrapChart>)
}