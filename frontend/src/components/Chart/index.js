import React from 'react'
import * as s from './styles'

export default function Chart({children, title, data}){
    return (
     <s.wrapChart>
        <h1>{title}</h1>
        {data === undefined ? <s.Chart> <p>Não há dados para este gráfico</p> </s.Chart>: <s.Chart>
        {children}
        </s.Chart>}
    </s.wrapChart>)
}