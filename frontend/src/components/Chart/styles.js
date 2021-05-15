import styled from 'styled-components'


export const Chart = styled.div`
width:100%;
background:white;
padding:10px;
position: relative;
border-radius: 12px;
margin-top:15px;
p{
    text-align:center;
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
    height:80px;
    font-family: Open Sans;
    font-style: normal;
    color:#787878;
}

img{
    margin-bottom:15px;
    width:44px;
}
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