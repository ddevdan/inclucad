import React from 'react'
import * as s from './style'
import ArrowImg from '../../assets/images/arrow.svg'

function EvaluationCard(props) {
    const {status, name, cpf, created_at} = props
   
    return (
        <s.EvaluationCard>
        <s.WrapInfos>
            <s.Name>{name}</s.Name>
            <s.WrapEspecificInfos>
            <s.Field>CPF: {cpf}</s.Field>
            <s.Field>Cadastrado em: {created_at}</s.Field>
            </s.WrapEspecificInfos>
            <s.Status className={status ? "done" : "undone"}>{status ? "Concluída" : "Pendente"}</s.Status>
        </s.WrapInfos>
        <s.Arrow><img src={ArrowImg} alt="Seta para acessar a avaliação"/></s.Arrow>
        </s.EvaluationCard>
    )
}

export default EvaluationCard