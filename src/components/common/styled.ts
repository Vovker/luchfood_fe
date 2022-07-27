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

export {
  Wrapper,
  Title
}