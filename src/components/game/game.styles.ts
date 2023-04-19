import styled from "styled-components";
import { GameDimensions, ScreenSize } from "../../types/global.types";



export const GameContainer = styled.div<ScreenSize>`
background-color: aqua;
    height:  ${props => props.screenSize.height}px;
    width: ${props => props.screenSize.width}px;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    flex-direction: column;
    display: flex;
`