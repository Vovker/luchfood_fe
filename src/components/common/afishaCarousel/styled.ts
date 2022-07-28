import styled from "styled-components";
import {ButtonBack, ButtonNext} from "pure-react-carousel";


const AfishaCarouselContainer = styled.div`
  margin-top: 25px;
  width: 980px;
  position: relative;
  padding-bottom: 60px;
  display: flex;
  flex-direction: column;
`

const CarouselWrapper = styled.div`
  width: 1020px;
  height: 321px;
`

const StyledButtonBack = styled(ButtonBack)`
  border: none;
  width: 55px;
  height: 55px;
  background: rgba(255, 255, 255, 0.83);
  backdrop-filter: blur(24px);
  position: absolute;
  top: 42%;
  left: -40px;
  transform: translate(-100%, -50%);
  z-index: 10;
`;

const StyledButtonForward = styled(ButtonNext)`
  border: none;
  width: 55px;
  height: 55px;
  background: rgba(255, 255, 255, 0.83);
  backdrop-filter: blur(24px);
  position: absolute;
  top: 42%;
  right: -40px;
  transform: translate(100%, -50%);
  z-index: 10;
`;



export {
  AfishaCarouselContainer,
  CarouselWrapper,
  StyledButtonBack,
  StyledButtonForward
}