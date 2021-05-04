import styled from 'styled-components'

export const App = styled.div`
    background:#F2F2F6;
    min-height: 100vh;
    max-width: 100%;
    display:flex;
    justify-content:center;
    position:relative;
    

`

export const GoBack = styled.div`
    width:60px;
    height:60px;
    position:relative;
    top:10px;
    left:0;
    width:100%;
    div{
        cursor:pointer;
        display:flex;
        justify-content:flex-start;
        align-items:center;
        width:60px;
        height:60px;
        font-size:16px;
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        img{
            width:10px;
        }
        p{
            margin-left:5px;
        }
    }
    
`


