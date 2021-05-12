import styled from 'styled-components'

export const EvaluationCard = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: space-between;
    align-items:center;
    padding:0 15px;

    min-width:320px;
    max-width:600px;
    min-height: 112px;

    background: #FFFFFF;
    border-radius: 14px;
    margin-bottom:20px;

    .undone{
        background: hsla(47, 100%, 65%, 1);
    }

    .done{
        color:white;
        background: hsla(155, 100%, 29%, 1);

    }
    
    
   
`

export const Status = styled.div`
    width: 82px;
    height: 21px;
    border-radius: 7px;
    margin-top:10px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 100.18%;
    /* identical to box height, or 14px */

    text-align: center;

    color: #000000;
    display:flex;
    justify-content:center;
    align-items:center;

   
`

export const WrapInfos = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;
`

export const Name = styled.div`

    width: 200px;
    height: 25px;
    overflow:hidden;
    text-overflow:ellipsis;
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:flex-start;
    line-height: 100.18%;
    text-transform:uppercase;
    /* or 24px */
    /* or 24px */


    color: #2F2F2F;



`


export const WrapEspecificInfos = styled.div`
    margin-top:10px;

`

export const Field = styled.div`
    width: auto;
    height: 14px;


    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 100.18%;
    /* identical to box height, or 14px */


    color: #000000;

`



export const Arrow = styled.div`

`


