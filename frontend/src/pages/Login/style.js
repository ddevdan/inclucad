import styled from 'styled-components'

export const Login = styled.div`
    min-width:320px;
   max-width:600px;
   height:100vh;
   display:flex;
   flex-direction:column;
   justify-content:center;
   align-items:center;
   position:relative;

   form{
       display:flex;
       flex-direction:column;
       align-items:center;
       justify-content:center;
       input{
        width: 100%;
        height: 52px;
        background: #FFFFFF;
        border: 1px solid #737373;
        border-radius: 14px;
        padding:0px 20px;
        font-size:24px;
       }
       input[type=submit]{
        width: 100%;
        height: 41px;
        left: 25px;
        top: 427px;

        background: #00C9F7;
        border-radius: 6px;
        border:0;
        font-family: Open Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        /* identical to box height, or 20px */


        color: #000000;
        &:focus{
            background:#0091B2;
            color:white;
        }
       }
      
   }
`

export const Errors = styled.div`
        width:100%;
        height:20px;
        padding-top:10px;
        color:#C80107;
        font-family: Open Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        text-align:center;
        display:flex;
        justify-content:center;
        align-items:flex-start;
        `

export const Logo = styled.div`
    margin-bottom:50px;


`

export const Field = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
   margin-bottom:30px;
   label{
       width:100%;
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    /* identical to box height, or 110% */
    margin-bottom:10px;
    letter-spacing: 0.4px;

    color: #000000;

    }

`
