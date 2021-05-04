import styled from 'styled-components'

export const Menu = styled.div`
a{
  &:focus{outline: 2px solid black;}
}
img{
  &:focus{outline: 2px solid black;}
}
  width:100%;
  height:59px;
  background:#DDE4FF;
  position:fixed;
  display:flex;
  justify-content:center;
  align-items:center;
  bottom:0;
  .menu__cursor{
    cursor:pointer;
    height:100%;
    width:40px;
    display:flex;
    justify-content:center;
    align-items:center;
  }
`
export const WrapMenuItems = styled.div`
  min-width: 320px;
  max-width:600px;
  height:59px;
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:space-between;
  img{width:40px;
    &:focus{outline: 2px solid black;}}

  img.menu__icon{
    &:focus{outline: 2px solid black;}
    width:25px;
    height:auto;
    
  }
`

export const MenuOpened = styled.div`
    background:rgb(17,21,34, 0.99);
    position:fixed;
    z-index: 0;
    top:0;
    width:100%;
    height:100%;;
    display:flex;
    padding:0;
    flex-direction:column;
    justify-content:center;
    align-items:center;

`

export const Close = styled.div`
position:absolute;
right:45px;
top:0;
padding:30px;
font-family: Open Sans;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 100.18%;
color: #F2F2F6;
`

export const CLoseWraper = styled.div`
min-width:320px;
max-width:600px;
position: absolute;
top:-80px;
display:flex;
justify-content:flex-start;
align-items:center;

.sign_out__button{
  cursor:pointer;
  font-family: Open Sans;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 100.18%;
  color:white;
margin-left:-30px;
top:0;
padding:30px;
}
`
export const wrapButtons = styled.div`
    max-height:600px;
    position:relative;
`