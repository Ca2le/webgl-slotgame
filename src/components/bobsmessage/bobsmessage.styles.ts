import styled from "styled-components";

interface MSG_Container {
    toggle: boolean;
}
export const MSG_Container = styled.div<MSG_Container>`
font-family: 'Open Sans', sans-serif;
display: ${props => props.toggle ? "flex" : "none"};
position: absolute;
height: 100%;
width: 100%;
background-color: #162165;
align-items: center;
flex-direction: column;
color: white;
overflow-y: scroll;

  scrollbar-width: thin;
  scrollbar-color: #a9a9a9 #f1f1f1;

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background-color:#F79C2F;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color:  #1B1464;
    border-radius: 10px;
  }
`

export const Header = styled.p`
padding-top: 5%;
font-family: 'Sigmar', cursive;
font-size: 30px;
font-weight: 400;
text-align: center;
`
export const P = styled.p`
font-family: 'Open Sans', sans-serif;
font-size: 18px;
font-weight: 300;
padding: 10px 0;
text-align: center;

`
export const PContainer = styled.div`
width: 60%;
`
export const ImgContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
`
export const ValuesContainer = styled.div`
width: 60%;
display: flex;
flex-direction: column;
`
export const SymbolValueContainer = styled.div`
padding-top: 10px;
display: flex;
width: 100%;
display: flex;
align-items: center;
`
export const Img = styled.img`
height: 50px;
width: auto;
padding-right: 15px;
`
export const Value = styled.p`
font-family: 'Open Sans', sans-serif;
font-size: 35px;
font-weight: 300;
padding-right: 5px;
`
export const Coin = styled.img`
height: 25px;
width: auto;
`
export const ContentContainer = styled.div`
display: flex;
width: 50%;
justify-content: center;
padding-top: 20px;
align-items: center;
flex-direction: column;
`

export const FancyButton = styled.button`
  margin: 5rem 0;
  width: 15rem;
  height: 10rem;
  border-radius: 7px;
  border: solid 2px #F79C2F;
  background-color: transparent;
  color: white;
  font-size: 1.4rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.1s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #F79C2F;
  }
`;