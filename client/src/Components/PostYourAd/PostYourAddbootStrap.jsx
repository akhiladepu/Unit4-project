import styled from 'styled-components'

const Headd = styled.div`
background: rgba(0, 47, 52, 0.04);
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
Height :74px;
`;

const InpHead = styled.p`
font-size: 20px;
line-height: 22px;
/* identical to box height */
font-family: Graphik;
font-weight: 400;
color: #000000;
margin-left:56px;
margin-top:24px;
margin-bottom:16px;
`

const InpBar = styled.input`
margin-left:56px;
width:563px;
height : 56px;
border-radius :4px;
`
const Downarrow = styled.i`
position:absolute;
left:578px;
top:233px;
`
const Footer = styled.div`
width:100%;
height:62px;
background-color:rgba(0, 47, 52, 0.8);
`

export {Headd,InpHead,InpBar,Downarrow,Footer}