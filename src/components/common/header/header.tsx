import {
  HeaderWrapper,
  AddressWrapper,
  Address,
  Logo,
  LogoWrapper,
  SocialNetworkIcon,
  SocialNetworkLink,
  SocialNetworksWrapper,
  SubHeaderLink,
  SubHeaderWrapper,
  SearchIcon,
  SearchComponentWrapper,
  HeaderContainer
} from './styled';
import logo from '../../../assets/logo.svg';
import telegramIcon from '../../../assets/social_icons/telegram.svg';
import instagramIcon from '../../../assets/social_icons/instagram.svg';
import searchIcon from '../../../assets/search_icon.svg';
import useMediaQuery from "../../../hooks/useMatchMedia";

export const Header = () => {

  const isDesktop = useMediaQuery('(min-width: 1073px)')

  return (
    <HeaderContainer>
      <HeaderWrapper isDesktop={isDesktop}>
        {
          isDesktop && <AddressWrapper>
				<Address>
					<b>Проспект Независимости 95 к 2 (территория завода “Луч”)</b>
				</Address>
				<Address>
					Часы работы <b>: пн-вс с 12:00 до 02.00</b>
				</Address>
			</AddressWrapper>
        }
        <LogoWrapper href={'/'}>
          <Logo src={logo} isDesktop={isDesktop}/>
        </LogoWrapper>
        <SocialNetworksWrapper isDesktop={isDesktop}>
          <SocialNetworkLink href={'tel:+375296707088'} isDesktop={isDesktop}>
            +375 (29) 670-70-88
          </SocialNetworkLink>
          {
            isDesktop &&
			  <>
				  <SocialNetworkLink href={'#'}>
					  <SocialNetworkIcon src={telegramIcon}/>
				  </SocialNetworkLink>
				  <SocialNetworkLink href={'https://instagram.com/luchshaya_ulitsa?igshid=YmMyMTA2M2Y='}>
					  <SocialNetworkIcon src={instagramIcon}/>
				  </SocialNetworkLink>
			  </>
          }

        </SocialNetworksWrapper>
      </HeaderWrapper>
      <SubHeaderWrapper isDesktop={isDesktop}>
        <SubHeaderLink href={'/'}>Операторы</SubHeaderLink>
        <SubHeaderLink href={'/'}>Новости</SubHeaderLink>
        <SubHeaderLink href={'/'}>О нас</SubHeaderLink>
        <SubHeaderLink href={'/'}>Афиша</SubHeaderLink>
        <SubHeaderLink href={'/'}>Галерея</SubHeaderLink>
        {isDesktop && <Search/>}
      </SubHeaderWrapper>
    </HeaderContainer>
  );
}

const Search = () => {
  return (
    <SearchComponentWrapper>
      <SearchIcon src={searchIcon}/>
    </SearchComponentWrapper>
  );
}
