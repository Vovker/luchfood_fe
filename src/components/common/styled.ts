import styled from "styled-components";
import {ElementWithGap, IItemWrapper, IWrapperProps} from "./common.types";
import {IsDesktop} from "./types/index.types";

const Wrapper = styled.div<IWrapperProps>`
  width: ${props => props.width+'px'};
  padding-top:${props => props.paddingTop?  props.paddingTop+'px' : 0};
  margin-bottom: ${props => props.marginBottom? props.marginBottom + 'px':0};
  max-width: 100%;
`


const ItemPageWrapper = styled.div<ElementWithGap>`
  display: flex;
  gap: ${props => props.gap ? props.gap + 'px' : 0};
  flex-direction: ${props => props.isDesktop ? 'row' : 'column'};
`

const InfoWrapper = styled.div<ElementWithGap>`
  display: flex;
  flex-direction: column;
  gap: ${props => props.gap ? props.gap + 'px' : 0};
`

const SocialLinks = styled.div`
  margin-top: 18px;
  justify-content: flex-end;
  align-items: flex-end;
  display: flex;
  gap: 20px;
  font-size: 18px;
  font-weight: 700;
  line-height: 25px;
  @media(max-width: 480px){
    gap: 14px;
    font-size: 12px;
    line-height: 17px;
  }
`

const SocialImg = styled.img`
  
`


const StyledDate = styled.div<IsDesktop>`
  font-weight: 700;
  font-size: 16px;
  line-height: 21px;
  @media(max-width: 480px){
    font-size: 14px;
  }
`

const ItemWrapper = styled.div<IItemWrapper>`
  display: flex;
  flex-direction: column;
  align-items: ${props => props.isDesktop? 'flex-start' : 'center'};
`

export {
  Wrapper,
  ItemPageWrapper,
  InfoWrapper,
  StyledDate,
  ItemWrapper,
  SocialLinks,
  SocialImg
}