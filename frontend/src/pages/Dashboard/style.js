import styled from 'styled-components'

export const Dashboard = styled.div`
    min-width:100%;
   max-width:100%;
   display:flex;
   flex-direction:column;
   justify-content:center;
   align-items:center;
   position:relative;
    padding-bottom:120px;

   form{
       display:flex;
       flex-direction:column;
       align-items:center;
       justify-content:center;
       margin-top:120px;
       input{
        &:focus{outline: 2px solid black;}
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
        &:focus{outline: 2px solid black;}
        /* identical to box height, or 20px */


        color: #000000;
        &:focus{
            background:#0091B2;
            color:white;
        }

        
       }
      
       
   }


   .back{
    width: 38%;
        height: 41px;
        &:focus{
    outline: 2px solid black;  

    }
        background: #BFD5DA;
        border-radius: 6px;
        border:0;
        font-family: Open Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        margin-right:30px;
        &:hover{

        background:#9eafb3;
        color:white;

        } 
        
        &:active{
            background:#373c3d;
            color:white; 
        }
        
   }

   .next{
    width: 52%;
        height: 41px;
        &:focus{
    outline: 2px solid black;  

    }
        background: #00C9F7;
        border-radius: 6px;
        border:0;
        font-family: Open Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        &:hover{

            background:#006075;
            color:white;

        }  
        &:active{
            background:#002b35;
            color:white; 
        }
        
   }

   .register{ 
    width: 52%;
            height: 41px;

        background: #00f752;
        border-radius: 6px;
        border:0;
        font-family: Open Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        &:hover{

            background:#00752d;
            color:white;

        }
        &:focus{
    outline: 2px solid black;  

    } 
}

   
`


export const Field = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
   margin-bottom:30px;
   width:100%;
   margin-top:30px;
   label{
       width:100%;
       text-transform:capitalize;
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    /* identical to box height, or 110% */
    margin-bottom:10px;
    letter-spacing: 0.4px;

    color: #000000;

    &:focus{
    outline: 2px solid black;  

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



export const Title = styled.div`

font-family: Open Sans;
font-style: normal;
font-weight: bold;
font-size: 34px;
width:100%;
line-height: 100.18%;
color: #000000;
position:relative;
margin-top:80px;

`

export const PacientName = styled.div`

font-family: Open Sans;
font-style: normal;
font-weight: normal;
font-size: 24px;
width:100%;
text-align:left;
line-height: 100.18%;
color: #000000;
position:relative;
margin-top:10px;


`

export const wrapTitle = styled.div`

min-width:100%;
max-width:80%;
line-height: 100.18%;
color: #000000;
position:relative;
top:80px;
display:flex;
flex-direction:column;
align-items:flex-start;
justify-content:center;;

`



export const WraperFields = styled.div`
width:100%;
display:flex;
flex-direction:column;
align-items:flex-start;
justify-content:flex-start;
.select-custom{
        max-width: 360px;
        height: 52px;
        background: #FFFFFF;
        border: 1px solid #737373;
        border-radius: 14px;
        padding:0px 20px;
        font-size:24px;

        &:focus{outline: 2px solid black;}
       }
       
       `



export const ReadOnlyInfos = styled.div`
min-width:320px;
   max-width:400px;
   display:flex;
   flex-direction:column;
   justify-content:center;
   align-items:center;
   position:relative;
    padding-bottom:120px;
    padding-top:100px;

`

export const ReadOnlyField = styled.div`
 font-family: Open Sans;
        font-style: normal;
       span{ font-weight: bold;
        font-size: 14px;
        padding-bottom:5px;}

        font-size:24px;
        
min-width:320px;
   max-width:400px;
   height:30px;
   margin-bottom:30px;
   min-width:320px;
           max-width: 320px;
        height: 52px;
        background: #FFFFFF;
        border-radius: 14px;
        padding:0px 20px;
   display:flex;
   flex-direction:column;
   justify-content:center;
   align-items:flex-start;
   position:relative;

`


export const Select  = styled.select`
   min-width:60%;
           max-width: 100%;
        height: 52px;
        background: #FFFFFF;
        border: 1px solid #737373;
        border-radius: 14px;
        padding:0px 20px;
        font-size:24px;

        &:focus{outline: 2px solid black;}
       
`;

export const Label = styled.div`
font-size:20px;`