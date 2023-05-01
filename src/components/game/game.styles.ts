import styled from "styled-components";
import { GameDimensions, ScreenSize } from "../../types/global.types";
import { store } from "../../store/store";

const {max} = store.getState().screenSize

export const GameContainer = styled.div`

    height:  ${max.height}px;
    width: ${max.width}px;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    flex-direction: column;
    display: flex;
`