import styled from "styled-components/macro";
import {Link} from "react-router-dom";
import {ButtonBack, ButtonNext} from "pure-react-carousel";
import {MobileImage} from "../cornersCarousel/styled";

const CarouselContainer = styled.div`
  width: 100%;
  height: 706px;
  background: ${props => props.theme.colors.darkMain};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 42px 0;
  box-sizing: border-box;

  @media (max-width: 480px) {
    padding: 67px 0 40px 0;
    height: fit-content;
  }
`;

const UpdatesCarouselTitle = styled.div`
  font-size: 40px;
  font-weight: 700;
  line-height: 47px;
  text-align: center;
  margin-bottom: 34px;
  color: ${props => props.theme.colors.white};

  @media (max-width: 480px) {
    font-size: 20px;
    line-height: 24px;
  }
`

const PosterLinkIcon = styled.img`
  margin-left: 11px;
  width: 20px;
  transition: 0.5s;
`;

const PosterLink = styled.a`
  margin-top: 40px;
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: ${props => props.theme.colors.mint};
  gap:11px;
  transition: 0.5s ease;

  &:hover {
    cursor: pointer;
    gap: 20px;
  }
`;

const SliderWrapper = styled.div`
  width: 1200px;
  position: relative;

  @media (max-width: 480px) {
    width: 100%;
    padding: 0 15px;
  }
`;

const CardWrapper = styled.div`
  width: 380px;
  height: 480px;
  padding: 20px;
  background: transparent;
  border: 1px solid ${props => props.theme.colors.greyBorder};
  box-sizing: border-box;
`;

interface ICardImage {
  url: string;
}

const CardImage = styled.div<ICardImage>`
  height: 230px;
  width: 340px;
  background: url('${props => props.url}') center no-repeat;
  background-size: cover;
`;

const PublicationDate = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 150%;
  color: ${props => props.theme.colors.white};
`;

const PublicationTitle = styled.div`
  margin-bottom: 16px;
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 150%;
  text-transform: uppercase;
  color: ${props => props.theme.colors.mint};
`;

const PublicationDescription = styled.div`
  height: 110px;
  width: 340px;
  text-overflow: ellipsis;
  white-space: pre-wrap;
  overflow: hidden;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  color: ${props => props.theme.colors.white};
`;

const MobileCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: white;
`

const MobileCardImage = styled(MobileImage)`
`

const MobileLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colors.mint};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 15px;
`

const MobileTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  color: ${props => props.theme.colors.mint};
`

const MobileDescription = styled.div`
  height: 84px;
  width: 100%;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  overflow: hidden;
  text-overflow: ellipsis;
`

const StyledButtonBack = styled(ButtonBack)`
  width: 55px;
  height: 55px;
  background: rgba(255, 255, 255, 0.37);
  backdrop-filter: blur(24px);
  border: none;
  position: absolute;
  top: 50%;
  z-index: 10;
  left: -13px;
  transform: translate(-100%, -50%);

  @media (max-width: 480px) {
    background: rgba(255, 255, 255, 0.83);
    width: 43px;
    height: 43px;
    backdrop-filter: blur(18.7636px);
    left: 23px;
    top: 30%;
    transform: translate(0);
  }
`;

const StyledButtonNext = styled(ButtonNext)`
  
  width: 55px;
  height: 55px;
  background: rgba(255, 255, 255, 0.37);
  backdrop-filter: blur(24px);
  border: none;
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translate(100%, -50%);
  z-index: 10;

  @media (max-width: 480px) {
    background: rgba(255, 255, 255, 0.83);
    width: 43px;
    height: 43px;
    backdrop-filter: blur(18.7636px);
    top: 30%;
    right: 23px;
    transform: translate(0);
  }
`;


export {
  CarouselContainer,
  PosterLink,
  PosterLinkIcon,
  SliderWrapper,
  CardWrapper,
  CardImage,
  PublicationDate,
  PublicationTitle,
  PublicationDescription,
  MobileCardWrapper,
  MobileLink,
  MobileTitle,
  MobileDescription,
  StyledButtonBack,
  StyledButtonNext,
  MobileCardImage,
  UpdatesCarouselTitle
}

