import React from 'react'
import * as s from './style'
import {Link} from "react-router-dom";
import CreateImg from '../../assets/images/create.svg'
import EyeImg from '../../assets/images/eye.svg'
import SearchImg from '../../assets/images/search.svg'
import EvaluationImg from '../../assets/images/evaluation.svg'
import HomeImg from '../../assets/images/home.svg'
const images = {create: CreateImg,search: SearchImg, evaluation:EvaluationImg, visualize: EyeImg, home:HomeImg }
function DashButton(props) {
    const { text, img, link_to} = props
    return (
        <s.DashButton>
        <Link to={link_to} className="zIndex__high">
            <s.Button>
                <img src={images[img]} alt={text} />  <p>{text}</p>
            </s.Button>
        </Link>
        </s.DashButton>
    )
}

export default DashButton