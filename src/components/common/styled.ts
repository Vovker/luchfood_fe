import styled from "styled-components";
import {ElementWithGap, ITitleProps, IWrapperProps} from "./common.types";

const Wrapper = styled.div<IWrapperProps>`
  width: ${props => props.width+'px'};
  padding-top:${props => props.paddingTop?  props.paddingTop+'px' : 0};
  margin-bottom: ${props => props.marginBottom? props.marginBottom + 'px':0};
`

const Title = styled.div<ITitleProps>`
  font-size: 40px;
  font-weight: 700;
  line-height: 47px;
  margin-bottom: ${props => props.marginBottom ? props.marginBottom+'px' : 0};
`

const ItemPageWrapper = styled.div<ElementWithGap>`
  display: flex;
  gap: ${props => props.gap ? props.gap + 'px' : 0};
`

const InfoWrapper = styled.div<ElementWithGap>`
  display: flex;
  flex-direction: column;
  gap: ${props => props.gap ? props.gap + 'px' : 0};
`


const StyledDate = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
`


export {
  Wrapper,
  Title,
  ItemPageWrapper,
  InfoWrapper,
  StyledDate
}