import React from 'react'
import * as s from './style'
import ArrowImg from '../../assets/images/arrow.svg'
import { Link} from 'react-router-dom'

function EvaluationCard(props) {
    const {status, name, cpf, disabled_type,  match} = props
    return (
        <s.EvaluationCard>
        <s.WrapInfos>
            <s.Name>{name}</s.Name>
            <s.WrapEspecificInfos>
            <s.Field>CPF: {cpf}</s.Field>
            <s.Field>TIPO: {disabled_type}</s.Field>
            </s.WrapEspecificInfos>
            <s.Status className={status ? "done" : "undone"}>{status ? "Concluída" : "Pendente"}</s.Status>
        </s.WrapInfos>
        <Link to={match}>
        <s.Arrow><img src={ArrowImg} alt="Seta para acessar a avaliação"/></s.Arrow>
        </Link>
        </s.EvaluationCard>
    )
}

export default EvaluationCard