import styled from "styled-components";
interface Size {
    width: number;
    height: number;
}
export const Div = styled.div<Size>`
    height: ${props => props.height}px;
    width: ${props => props.width}px;
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    
`

export const CanvasContainer = styled.div`
    background-color: blue;
    height: 100vh;
    width: auto;
    position: relative;


`