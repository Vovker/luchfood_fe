import styled from "styled-components";
import {NavLink} from "react-router-dom";

const HeaderContainer = styled.header`
  
`

const HeaderWrapper = styled.div`
  position: relative;
  background: ${props => props.theme.colors.darkMain};
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 96px;
  padding: 0 90px;
  
  @media(max-width: 480px){
    padding: 15px 15px 19px 15px;
    justify-content: space-between;
    gap: 34px;
  }
`;

const AddressWrapper = styled.div`
  width: 400px;
  margin: auto auto auto 0;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  color: ${props => props.theme.colors.white};
  gap: 8px;
  
  @media(max-width: 480px){
    align-items: flex-end;
    justify-content: flex-end;
    margin: 0;
  }
`;

const Address = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 20px;
  color: ${props => props.theme.colors.white};
  
  @media(max-width: 480px){
    font-size: 11px;
    font-weight: 400;
    line-height: 14px;
    text-align: right;
    max-width: 119px;
  }
`;

const LogoWrapper = styled.a`
  margin: auto 0;
  display: flex;
  justify-content: center;
`;

const Logo = styled.img`
  width: 241px;
  
  @media(max-width: 480px){
    width: 137px;
  }
`;

const SocialNetworksWrapper = styled.div`
  width: 400px;
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 23px;
  
  @media(max-width: 480px){
    width: 100%;
    margin-left: 0;
  }
`;

const SocialNetworkLink = styled.a`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: ${props => props.theme.colors.white};
  text-decoration: none;
  
  &:nth-child(1) {
    margin-left: auto;
  }
  
  &:hover {
    text-decoration: underline;
    color: ${props => props.theme.colors.white} !important;
  }

  @media(max-width: 480px){
    line-height: 16px;
    font-size: 14px;
    white-space: nowrap;
    
    &:nth-child(1) {
      margin-left: 0;
    }
  }
`;

const SocialNetworkIcon = styled.img`
  width: 32px;
`;

const SubHeaderWrapper = styled.div`
  height: 54px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 90px;
  background: ${props => props.theme.colors.redMain};
  max-width: 100%;
  overflow-y: hidden;
  box-sizing: border-box;
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  white-space: nowrap;
  
  @media(max-width: 480px){
    height: 100%;
    padding: 20px 15px;
    gap: 50px;
    font-size: 14px;
    line-height: 17px;
  }
`;

const SubHeaderLink = styled(NavLink)`
  font-style: normal;
  color: ${props => props.theme.colors.darkMain};
  text-decoration: none;
  padding-bottom: 3px;
  border-bottom: 1px solid transparent;
  
  &:hover {
    border-bottom: 1px solid ${props => props.theme.colors.darkMain};
  }
  
  &.active {
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

const WorkHours = styled.div`
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  text-align: right;
`

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
  HeaderContainer,
  WorkHours
}
