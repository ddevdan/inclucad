import styled from 'styled-components'

export const Button = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: space-around;
    align-items:center;
    width: 290px;
    height: 52px;
    background: #6374B2;
    border-radius: 14px;
    padding:0 20px;
    margin-bottom:30px;
    &::last-child{
        margin-bottom:0;
    }
    
    
    p{
        font-family: Open Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 100.18%;
        color: #F2F2F6;
    }
    img{
        margin-right:20px;
        width:30px;
    }

    a {
        text-decoration:none !important;
    
    }
`

export const DashButton = styled.div`

`
