import React from 'react'
import { useParams } from 'react-router'
import * as s from './style'


function Evaluate(props) {
    const { title } = props
    let { id } = useParams()

    return (
        <s.Evaluate>
            <s.Title>{title}</s.Title>
            <s.EvaluateWrap>
            {id}
            </s.EvaluateWrap>

        </s.Evaluate>
    )
}

export default Evaluate

