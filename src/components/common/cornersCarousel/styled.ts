import styled from "styled-components";
import {ButtonBack, ButtonNext, Dot} from "pure-react-carousel";
import {CardImg} from "../card/styled";


const SliderContainer = styled.div`
  background: ${props => props.theme.colors.liteBackground};
  width: 100%;
  height: 567px;
  display: flex;
  align-items: center;
  justify-content: center;
`;


const SliderWrapper = styled.div`
  position: relative;
  width: 1260px;
  
  @media(max-width: 480px){
    width: 345px;
  }
`;

const CardContentWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: none;
  background: none;
  transition: 1s;
  padding: 25px 16px;
  box-sizing: border-box;
`;

interface ICardWrapper {
  url: string
}

const CardWrapper = styled.div<ICardWrapper>`
  width: 315px;
  height: 450px;
  background: url('${props => props.url}') center no-repeat;
  background-size: cover;
  border: 2px solid ${props => props.theme.colors.liteBackground};
  position: relative;
  transition: 1s;
  
  &:hover{
    ${CardContentWrapper}{
      display: flex;
      align-items: flex-start;
      justify-content: flex-end;
      flex-direction: column;
      backdrop-filter: blur(2px);
      background: linear-gradient(360deg, #020101 0%, rgba(2, 1, 1, 0.2) 36.57%, rgba(1, 0, 0, 0) 96.17%);
    }
  }
`;

const MobileImage = styled(CardImg)`
  width: 345px;
  height: 493px;
`

const CardTitle = styled.div`
  margin-bottom: 8px;
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 35px;
  color: ${props => props.theme.colors.mint};
`;

const CardInfoLineWrapper = styled.div`
  display: flex;
  margin-bottom: 8px;
  align-items: center;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: ${props => props.theme.colors.white};
`;


const CardInfoLineIcon = styled.img`
  width: 20px;
  margin-right: 5px;
`;

const DotsWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 25px;
  height: 10px;
  align-items: center;
  justify-content: center;
`;

const StyledDot = styled(Dot)`
  width: 100%;
  height: 100%;
  max-height: 9px;
  max-width: 9px;
  border-radius: 50%;
  background: ${props => props.theme.colors.darkMain};
  border: none;
  padding: 0;
  
  &.carousel__dot--selected {
    background: ${props => props.theme.colors.redMain};
  }
`;

const StyledButtonBack = styled(ButtonBack)`
  border: none;
  width: 55px;
  height: 55px;
  background: rgba(255, 255, 255, 0.83);
  backdrop-filter: blur(24px);
  position: absolute;
  top: 45%;
  left: 10px;
  transform: translateY(-50%);
  z-index: 10;
`;

const StyledButtonNext = styled(ButtonNext)`
  border: none;
  width: 55px;
  height: 55px;
  background: rgba(255, 255, 255, 0.83);
  backdrop-filter: blur(24px);
  position: absolute;
  top: 45%;
  right: 10px;
  transform: translateY(-50%);
  z-index: 10;
`;

interface IStyledButtonIcon {
  isReverse: boolean
}

const StyledButtonIcon = styled.img<IStyledButtonIcon>`
  width: 32px;
  transform: ${props => props.isReverse ? 'rotate(180deg)' : 'rotate(0deg)'};
`;

export {
  SliderContainer,
  SliderWrapper,
  CardWrapper,
  CardContentWrapper,
  CardTitle,
  CardInfoLineIcon,
  CardInfoLineWrapper,
  DotsWrapper,
  StyledDot,
  StyledButtonBack,
  StyledButtonNext,
  StyledButtonIcon,
  MobileImage
}
