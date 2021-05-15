import React from 'react'
import * as s from './styles'
import NotFound from '../../assets/images/notfound.svg'
import StatusNotification from '../StatusNotification'
export default function Chart({children, title, data}){
    return (
     <s.wrapChart>
        <h1>{title}</h1>
        {data === undefined ? <s.Chart> <StatusNotification text="Não há dados para este gráfico." type="NOT_FOUND"/> </s.Chart>: <s.Chart>
        {children}
        </s.Chart>}
    </s.wrapChart>)
}