import styled from "styled-components";
interface Size {
    width: number;
    height: number;
}
export const Div = styled.div<Size>`
   
    background-color: blue;
    height: ${(props) => props.height}px;
    width: ${(props) => props.width}px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

`