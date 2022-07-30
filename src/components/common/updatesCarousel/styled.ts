import styled from "styled-components";
import {IsDesktop} from "../types/index.types";
import {Link} from "react-router-dom";
import {ButtonBack, ButtonNext} from "pure-react-carousel";

const CarouselContainer = styled.div<IsDesktop>`
  width: 100%;
  height: ${props => props.isDesktop ? '706px' : 'fit-content'};
  background: ${props => props.theme.colors.darkMain};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: ${props => props.isDesktop ? '42px 0' : '67px 0 40px 0'};
  box-sizing: border-box;
`;


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

  &:hover {
    cursor: pointer;

    ${PosterLinkIcon} {
      margin-left: 20px;
    }
  }
`;

const SliderWrapper = styled.div<IsDesktop>`
  width: ${props => props.isDesktop ? '1200px' : '345px'};
  height: ${props => props.isDesktop ? '480px' : '456px'};
  position: relative;
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
  color: white;
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
  width: 345px;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  overflow: hidden;
  text-overflow: ellipsis;
`

const StyledButtonBack = styled(ButtonBack)`
  border: none;
  width: 43px;
  height: 43px;
  background: rgba(255, 255, 255, 0.83);
  position: absolute;
  backdrop-filter: blur(18.7636px);
  top: 50%;
  left: 8px;
  transform: translateY(-50%);
  z-index: 10;
`;

const StyledButtonNext = styled(ButtonNext)`
  border: none;
  width: 43px;
  height: 43px;
  background: rgba(255, 255, 255, 0.83);
  position: absolute;
  backdrop-filter: blur(18.7636px);
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  z-index: 10;
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
  StyledButtonNext
}

