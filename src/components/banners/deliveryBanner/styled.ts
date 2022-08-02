import styled from "styled-components";
import wave from '../../../assets/delivery_banner/wave.svg'

const BannerWrapper = styled.div`
  background: ${props => props.theme.colors.redMain};
  width: 100%;
  height: 357px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  overflow: hidden;

  @media(max-width: 480px){
    flex-direction: column;
    height: fit-content;
  }
`;

const LeftBannerImage = styled.img`
  height: 357px;
  margin-right: -40px;
  
  @media(max-width: 480px){
    height: 170px;
    margin-right: 0;
  }
`;

const RightBannerImage = styled.img`
  pointer-events: none;
  width: 489px;
  margin-left: -120px;

  @media(max-width: 480px){
    width: 245px;
    margin-left: 0;
  }
`;

const BannerTextWrapper = styled.div`
  width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100%;
`;

const BannerTitle = styled.div`
  margin-bottom: 24px;
  margin-top: 0;
  color: ${props => props.theme.colors.darkMain};
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 47px;
  text-align: center;
  
  @media(max-width: 480px){
    margin-top: 24px;
    line-height: 24px;
    font-size: 20px;
    margin-bottom: 16px;
  }
`;

const BannerSubtitle = styled.div`
  font-style: normal;
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  width: fit-content;
  
  @media(max-width: 480px){
    width: 344px;
    line-height: 21px;
    font-size: 14px;
    margin-bottom: 8px;

  }
`;

const BannerButtonIcon = styled.img`
  transition: 0.5s;
  margin-left: 11px;
`;

const BannerButton = styled.button`
  width: 266px;
  height: 54px;
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
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    
    ${BannerButtonIcon} {
      margin-left: 20px;
    }
  }
  gap: 11px;
  
  @media(max-width: 480px){
    height: 44px;
    width: 236px;
    margin-top: 40px;
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
