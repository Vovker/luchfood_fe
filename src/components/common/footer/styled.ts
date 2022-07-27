import styled from "styled-components";
import {IsDesktop} from "../types/index.types";

const FooterWrapper = styled.div<IsDesktop>`
  background: ${props => props.theme.colors.darkMain};
  padding: ${props => props.isDesktop ? '30px 44px 0 41px' : '24px 16px 26px 16px'};
  height: ${props => props.isDesktop ? '140px' : '93px'};
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
`;

const Logo = styled.img`
  width: 171px;
  margin-bottom: 9px;
`;

const WorkHours = styled.div<IsDesktop>`
  font-style: normal;
  font-weight: ${props => props.isDesktop ? '400' : '700'};
  font-size: 17px;
  line-height: 20px;
  color: ${props => props.theme.colors.white};
  margin-left: ${props => props.isDesktop ? '13px' : '0'};
  margin-top: ${props => props.isDesktop ? '0' : '6px'};
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
