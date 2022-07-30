import styled from "styled-components";
import {ICardImgProps, ICardWrapperProps} from "./card.types";

const CardWrapper = styled.div<ICardWrapperProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 8px;
  width: ${props => props.width};
`

const CardImg = styled.div<ICardImgProps>`
  min-width: ${props => props.width+'px'};
  min-height: ${props => props.height+'px'};
  background-image: url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

export {
  CardWrapper,
  CardImg
}