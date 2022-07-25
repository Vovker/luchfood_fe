import styled from "styled-components";

const BannerWrapper = styled.div`
  background: ${props => props.theme.colors.redMain};
  width: 100%;
  height: 357px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LeftBannerImage = styled.img`
  width: 395px;
  margin-right: -40px;
`;

const RightBannerImage = styled.img`
  width: 489px;
  margin-left: -120px;
`;

const BannerTextWrapper = styled.div`
  width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BannerTitle = styled.div`
  margin-bottom: 24px;
  color: ${props => props.theme.colors.darkMain};
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 47px;
  text-align: center;
`;

const BannerSubtitle = styled.div`
  font-style: normal;
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
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
`;

export {
  BannerWrapper,
  LeftBannerImage,
  RightBannerImage,
  BannerSubtitle,
  BannerTitle,
  BannerTextWrapper,
  BannerButton,
  BannerButtonIcon
}
