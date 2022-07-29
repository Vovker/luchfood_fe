import styled from "styled-components";
import {StyleTitleProps} from "./title.types";

const StyledTitle = styled.div<StyleTitleProps>`
  font-size: ${props => props.isDesktop ? '40px' : '20px'};
  font-weight: 700;
  line-height: ${props => props.isDesktop ? '47px' : '24px'};
  margin-bottom: ${props => props.marginBottom ? props.marginBottom+'px' : 0};
  text-align: ${props => props.align ? props.align : 'left'};
`

export {
  StyledTitle
}