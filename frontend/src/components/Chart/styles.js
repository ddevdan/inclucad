import styled from 'styled-components'


export const Chart = styled.div`
width:100%;
background:white;
padding:10px;
position: relative;
border-radius: 12px;
margin-top:15px;
`

export const wrapChart = styled.div`
width:100%;
position: relative;
margin-top:30px;
&:first-child{
    margin-top:0;
}
h1{
    max-width:80%;
    font-size:20px;
    font-weight:bold;
    font-family: Open Sans;
    font-style: normal;
}
`