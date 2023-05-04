import styled from "styled-components";
import { GameDimensions, ScreenSize } from "../../types/global.types";
import { store } from "../../store/store";

const { max } = store.getState().screenSize
export const GameContainer = styled.div`
    width: 100%;
    height: 50vh;
   
`