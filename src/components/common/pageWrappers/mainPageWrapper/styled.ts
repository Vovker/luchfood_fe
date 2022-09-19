import styled from "styled-components";

const PageWrapperStyled = styled.div`
  background: ${props => props.theme.colors.background};
  font-family: ${props => props.theme.fonts.jura};
  padding: 0;
  margin: 0;
`;

const MobileSocialIcon = styled.a<{bottom: number}>`
  width: 46px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: ${props => props.bottom}px;
  right: 10px;
  background: ${props => props.theme.colors.redMain};
  z-index: 100;
`;

const MobileSocialIconImg = styled.img`
  width: 28px;
`;

export {
  PageWrapperStyled,
  MobileSocialIcon,
  MobileSocialIconImg
}
