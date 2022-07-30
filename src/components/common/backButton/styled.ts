import styled from "styled-components";
import {IsDesktop} from "../types/index.types";

const Button = styled.button<IsDesktop>`
  outline: none;
  border: none;
  display: flex;
  gap: 11px;
  align-items: center;
  position: absolute;
  top: ${props => props.isDesktop ? '29px' : '18px'};
  left: ${props => props.isDesktop ? '94px' : '15px'};
  font-family: Jura;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  text-align: left;
  cursor: pointer;
`

export {
  Button
}