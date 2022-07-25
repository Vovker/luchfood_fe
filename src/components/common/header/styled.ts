import styled from "styled-components";

const HeaderWrapper = styled.div`
  position: relative;
  background: ${props => props.theme.colors.darkMain};
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 96px;
  padding: 0 90px;
  box-sizing: border-box;
`;

const AddressWrapper = styled.div`
  width: 400px;
  margin: auto auto auto 0;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  color: ${props => props.theme.colors.white};
  gap: 8px;
`;

const Address = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 20px;
  color: ${props => props.theme.colors.white};
`;

const LogoWrapper = styled.a`
  margin: auto 0;
  display: flex;
`;

const Logo = styled.img`
  width: 241px;
`;

const SocialNetworksWrapper = styled.div`
  width: 400px;
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 23px;
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
`;

const SubHeaderLink = styled.a`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
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
  SearchIcon
}
