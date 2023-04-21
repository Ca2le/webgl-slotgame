import styled from "styled-components";
import { GameDimensions, ScreenSize } from "../../types/global.types";
import { store } from "../../store/store";

const screen = store.getState().screenSize

export const GameContainer = styled.div`
background-color: aqua;
    height:  ${screen.fullView.height}px;
    width: ${screen.fullView.width}px;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    flex-direction: column;
    display: flex;
`