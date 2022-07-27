import styled from "styled-components";
import {ITitleProps, IWrapperProps} from "./common.types";

const Wrapper = styled.div<IWrapperProps>`
  width: ${props => props.width+'px'};
  padding-top:${props => props.paddingTop?  props.paddingTop+'px' : 0};
`

const Title = styled.div<ITitleProps>`
  font-size: 40px;
  font-weight: 700;
  line-height: 47px;
  margin-bottom: ${props => props.marginBottom ? props.marginBottom+'px' : 0};
`

const Search = styled.input`
  height: 25px;
  outline: none;
  border: none;
  background-color: inherit;
  font-family: Jura;
  font-size: 18px;
  font-weight: 400;
  line-height: 25px;
  color: ${props => props.theme.colors.darkMain};
`

export {
  Wrapper,
  Title,
  Search
}