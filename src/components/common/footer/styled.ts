import styled from "styled-components";

const FooterWrapper = styled.div`
  background: ${props => props.theme.colors.darkMain};
  padding: 30px 44px 0 41px;
  height: 140px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  
  @media(max-width: 480px){
    padding: 24px 16px 26px 16px;
    height: 93px;
  }
`;

const FooterAddress = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 20px;
  color: ${props => props.theme.colors.white};
  
  @media(max-width: 480px){
    font-size: 14px;
  }
`

const Logo = styled.img`
  width: 140px;
  margin-bottom: 9px;
`;

const WorkHours = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  color: ${props => props.theme.colors.white};
  margin-left: 13px;
  margin-top: 0;
  
  @media(max-width: 480px){
    font-weight: 700;
    margin-left: 0;
    margin-top: 6px;
  }
`;

const Socials = styled.div`
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 23px;
`;

const SocialIcon = styled.img`
  width: 32px;
`;

const SocialLink = styled.a`
  text-decoration: none;
  color: ${props => props.theme.colors.white};
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: ${props => props.theme.colors.white} !important;
  }
`;

const Copyright = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  color: ${props => props.theme.colors.white};
  margin-top: 6px;
`;

export {
  FooterWrapper,
  Logo,
  WorkHours,
  Socials,
  SocialLink,
  SocialIcon,
  Copyright,
  FooterAddress
}
