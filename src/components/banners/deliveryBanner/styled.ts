import styled from "styled-components";
import wave from '../../../assets/delivery_banner/wave.svg'
import {IsDesktop} from "../../common/types/index.types";

const BannerWrapper = styled.div<IsDesktop>`
  background: ${props => props.theme.colors.redMain};
  width: 100%;
  height: ${props => props.isDesktop ? '357px' : ''};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${props => props.isDesktop ? 'row' : 'column'};
  overflow: hidden;
`;

const LeftBannerImage = styled.img<IsDesktop>`
  height: ${props => props.isDesktop ? '357px ' : '170px'};
  margin-right: ${props => props.isDesktop ? '-40px ' : '0'};
`;

const RightBannerImage = styled.img<IsDesktop>`
  pointer-events: none;
  width: ${props => props.isDesktop ? '489px ' : '245px'};
  margin-left: ${props => props.isDesktop ? '-120px' : '0'};
`;

const BannerTextWrapper = styled.div`
  width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100%;
`;

const BannerTitle = styled.div<IsDesktop>`
  margin-bottom: ${props => props.isDesktop ? '24px' : '16px'};
  margin-top: ${props => props.isDesktop ? '0' : '24px'};
  color: ${props => props.theme.colors.darkMain};
  font-style: normal;
  font-weight: 700;
  font-size: ${props => props.isDesktop ? '40px' : '20px'};
  line-height: ${props => props.isDesktop ? '47px' : '24px'};
  text-align: center;
`;

const BannerSubtitle = styled.div<IsDesktop>`
  font-style: normal;
  margin-bottom: ${props => props.isDesktop ? '20px' : '8px'};
  font-weight: 700;
  font-size: ${props => props.isDesktop ? '18px' : '14px'};
  line-height: ${props => props.isDesktop ? '27px' : '21px'};
  text-align: center;
  width: ${props => props.isDesktop ? 'fit-content' : '344px'};
`;

const BannerButtonIcon = styled.img`
  transition: 0.5s;
  margin-left: 11px;
`;

const BannerButton = styled.button<IsDesktop>`
  width: ${props => props.isDesktop ? '266px ' : '236px'};
  height: ${props => props.isDesktop ? '54px ' : '44px'};
  background: ${props => props.theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  box-sizing: border-box;
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 24px;
  color: ${props => props.theme.colors.darkMain};  
  transition: 0.5s;
  font-family: ${props => props.theme.fonts.jura};
  margin-top: ${props => props.isDesktop ? '0 ' : '40px'};
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    
    ${BannerButtonIcon} {
      margin-left: 20px;
    }
  }
`;

const Wave = styled.div`
  height: 76px;
  width: 100%;
  background-image: url(${wave});
  background-color: ${props => props.theme.colors.darkMain};
`

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export {
  BannerWrapper,
  LeftBannerImage,
  RightBannerImage,
  BannerSubtitle,
  BannerTitle,
  BannerTextWrapper,
  BannerButton,
  BannerButtonIcon,
  Wave,
  ContentWrapper
}
