import React from 'react'
import EvaluationCard from '../../components/EvaluationCard'

import * as s from './style'

function Evaluation(props){
    const {title} = props

    return(
        <s.Evaluation>
            <s.Title>{title}</s.Title>
            <s.WrapECards>
                
                <h2>Pendentes</h2>
                <EvaluationCard/>
            </s.WrapECards>

            <s.WrapECards>
                <h2>Concluídas</h2>
                <EvaluationCard/>
            </s.WrapECards>
        </s.Evaluation>

        
    )
}

export default Evaluation