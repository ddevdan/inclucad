import React, { useState } from 'react'
import { useRouteMatch } from 'react-router'
import EvaluationCard from '../../components/EvaluationCard'
import * as s from './style'
const data = [
    { id: "1", status: true, name: "Daniel Carvalho de Oliveira Carvalho", cpf: "11479618403", created_at: "2020-12-12" },
    { id: "2", status: false, name: "Luana Mayara", cpf: "11479618403", created_at: "2020-12-12" },
    { id: "3", status: true, name: "Pedro Henrique", cpf: "11479618403", created_at: "2020-12-12" },

]
function Evaluations(props) {
    let match = useRouteMatch();

    const { title, GoBack } = props

    const [undoneSearch, setUndoneSearch] = useState("")
    const [doneSearch, setDoneSearch] = useState("")

    const undone_default_data = data.filter(undone_filter)
    const done_default_data = data.filter(done_filter)

    const [undone, setUndone] = useState(undone_default_data)
    const [done, setDone] = useState(done_default_data)



    function undone_filter(value) {
        return value.status === false
    }

    function done_filter(value) {
        return value.status === true
    }


    function searchUndone(e) {
        setUndoneSearch(e.target.value)
        const value = e.target.value

        if (value.length !== 0) {
            return setUndone(undone_default_data.filter(ev => ev.name.toLowerCase().includes(value.toLowerCase())))
        }
        return setUndone(undone_default_data)

    }

    function searchDone(e) {
        setDoneSearch(e.target.value)
        const value = e.target.value

        if (value.length !== 0) {
            return setDone(done_default_data.filter(ev => ev.name.toLowerCase().includes(value.toLowerCase())))
        }
        return setDone(done_default_data)
    }

    const NotFound = () => <s.NotFound>NADA ENCONTRADO</s.NotFound>

    return (
        <s.Evaluations>
            <GoBack></GoBack>
            <s.Title>{title}</s.Title>
            <s.WrapECards>
                <h2>Pendentes</h2>
                <input name="undone_search" value={undoneSearch} onChange={searchUndone} placeholder="Buscar por nome" />
                {undone.length === 0 ? <NotFound /> : undone.map(e => {
                    return <EvaluationCard id={e.id} status={e.status}
                        name={e.name} cpf={e.cpf} created_at={e.created_at}
                        key={e.id} match={`${match.url}/${e.id}`}/>
                })}



            </s.WrapECards>

            <s.WrapECards>
                <h2>Concluídas</h2>
                <input name="done_search" value={doneSearch} onChange={searchDone} placeholder="Buscar por nome" />
                {done.length === 0 ? <NotFound /> : done.map(e => {
                    return <EvaluationCard id={e.id} status={e.status}
                        name={e.name} cpf={e.cpf} created_at={e.created_at}
                        key={e.id} match={`${match.url}/${e.id}`}/>
                })}
            </s.WrapECards>
            
        </s.Evaluations>


    )
}

export default Evaluations