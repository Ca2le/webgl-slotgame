import styled from "styled-components";
import { GameDimensions, ScreenSize } from "../../types/global.types";
import { store } from "../../store/store";

const { max } = store.getState().screenSize
export const GameContainer = styled.div`
    width: 100%;
    height: 50vh;
    ::after {
        position: relative;

    }
    &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('/assets/BACKGROUND.png');
    background-size: cover;
    filter: blur(4px);
    opacity: 0.8;
    z-index: -1;
  }
`