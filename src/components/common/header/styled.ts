import styled from "styled-components";
import {IsDesktop} from "../types/index.types";

const HeaderContainer = styled.header`
  
`

const HeaderWrapper = styled.div<IsDesktop>`
  position: relative;
  background: ${props => props.theme.colors.darkMain};
  display: flex;
  flex-direction: ${props => props.isDesktop ? 'row' : 'column'};
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 96px;
  padding: ${props => props.isDesktop ? '0 90px' : '13px 0'};
  box-sizing: border-box;
`;

const AddressWrapper = styled.div`
  width: 450px;
  margin: auto auto auto 0;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  color: ${props => props.theme.colors.white};
  gap: 8px;
`;

const Address = styled.div<IsDesktop>`
  font-style: normal;
  font-weight: 700;
  font-size: ${props => props.isDesktop ? '17px' : '14px'};
  line-height: 20px;
  color: ${props => props.theme.colors.white};
`;

const LogoWrapper = styled.a`
  margin: auto 0;
  display: flex;
  justify-content: center;
`;

const Logo = styled.img<IsDesktop>`
  width: ${props => props.isDesktop ? '241px' : '159px'};
`;

const SocialNetworksWrapper = styled.div<IsDesktop>`
  width: ${props => props.isDesktop ? '450px' : '100%'};
  margin-left: ${props => props.isDesktop ? 'auto' : '0'};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 23px;
`;

const SocialNetworkLink = styled.a<IsDesktop>`
  font-style: normal;
  font-weight: 700;
  font-size: ${props => props.isDesktop ? '20px' : '15px'};
  line-height: ${props => props.isDesktop ? '24px' : '18px'};
  color: ${props => props.theme.colors.white};
  text-decoration: none;
  
  &:nth-child(1) {
    margin-left: ${props => props.isDesktop ? 'auto' : '0'};
  }
  
  &:hover {
    text-decoration: underline;
  }
`;

const SocialNetworkIcon = styled.img`
  width: 32px;
`;

const SubHeaderWrapper = styled.div<IsDesktop>`
  height: ${props => props.isDesktop ? '54px' : '100%'};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.isDesktop ? '0 90px' : '20px 15px'};
  background: ${props => props.theme.colors.redMain};
  max-width: 100%;
  overflow-y: hidden;
  box-sizing: border-box;
  gap: ${props => props.isDesktop ? 'none' : '50px'};
  font-weight: 700;
  font-size: ${props => props.isDesktop ? '20px' : '14px'};
  line-height: ${props => props.isDesktop ? '20px' : '17px'};
  white-space: nowrap;
`;

const SubHeaderLink = styled.a`
  font-style: normal;
  color: ${props => props.theme.colors.darkMain};
  text-decoration: none;
  padding-bottom: 3px;
  border-bottom: 1px solid transparent;
  
  &:hover {
    border-bottom: 1px solid ${props => props.theme.colors.darkMain};
  }
`;

const SearchComponentWrapper = styled.div`
  
`;

const SearchIcon = styled.img`
  width: 24px;
  
  &:hover {
    cursor: pointer;
  }
`;

export {
  HeaderWrapper,
  AddressWrapper,
  Address,
  LogoWrapper,
  Logo,
  SocialNetworksWrapper,
  SocialNetworkIcon,
  SocialNetworkLink,
  SubHeaderWrapper,
  SubHeaderLink,
  SearchComponentWrapper,
  SearchIcon,
  HeaderContainer
}
