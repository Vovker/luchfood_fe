import styled from "styled-components";

const FooterWrapper = styled.div`
  background: ${props => props.theme.colors.darkMain};
  padding: 30px 44px 0 41px;
  height: 140px;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 171px;
  margin-bottom: 9px;
`;

const WorkHours = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  color: ${props => props.theme.colors.white};
  margin-left: 13px;
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
  }
`;

const Copyright = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  color: ${props => props.theme.colors.white};
`;

export {
  FooterWrapper,
  Logo,
  WorkHours,
  Socials,
  SocialLink,
  SocialIcon,
  Copyright
}
