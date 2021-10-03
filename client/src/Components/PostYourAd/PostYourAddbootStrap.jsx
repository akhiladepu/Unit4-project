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
padding-left:10px;
border: 1px solid #002F34;
outline:none;
`
const Downarrow = styled.i`
position:absolute;
left:578px;
top:233px;
`
const SelectBar = styled.select`
margin-left:56px;
width:563px;
height : 56px;
border-radius :4px;
border: 1px solid #002F34;
&:hover {
    border: 1px solid #002F34;
  }
  &:focus {
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;;
  }
`
const OptionBar = styled.option`
margin-left:56px;
width:563px;
height : 56px;
font-size:20px;
border-radius :4px;
`

const Footer = styled.div`
width:100vw;

background-color:rgba(0, 47, 52, 0.8);
margin-bottom:0px;
`

const ImgTaker = styled.div`
width:201px;
height:173px;
border:1px solid rgba(0, 47, 52, 0.7);
margin-bottom:24px;
background: #FFFFFF;
border: 1px solid #002F34;
box-sizing: border-box;
border-radius: 4px;
cursor:pointer;
`

const FootButton = styled.div`
width :312px;
height :72px;
background: rgba(0, 127, 124, 0.1);
border: 1px solid rgba(0, 127, 124, 0.6);
border-radius: 4px;
margin-top:104px;
margin-left:564px;
margin-bottom:96px;

`

export {Headd,InpHead,InpBar,SelectBar,Downarrow,Footer,ImgTaker,FootButton,OptionBar}