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
  SearchComponentWrapper
} from './styled';
import logo from '../../../assets/logo.svg';
import telegramIcon from '../../../assets/social_icons/telegram.svg';
import instagramIcon from '../../../assets/social_icons/instagram.svg';
import searchIcon from '../../../assets/search_icon.svg';

export const Header = () => {
  return (
    <header>
      <HeaderWrapper>
        <AddressWrapper>
          <Address>
            <b>Ул. Толбухина 4б (территория завода “Луч”)</b>
          </Address>
          <Address>
            Часы работы <b>: пн-вс с 08:00 до 02.00</b>
          </Address>
        </AddressWrapper>
        <LogoWrapper href={'/'}>
          <Logo src={logo}/>
        </LogoWrapper>
        <SocialNetworksWrapper>
          <SocialNetworkLink href={'tel:+375291234567'}>
            +375(29) 123-45-67
          </SocialNetworkLink>
          <SocialNetworkLink href={'#'}>
            <SocialNetworkIcon src={telegramIcon}/>
          </SocialNetworkLink>
          <SocialNetworkLink href={'#'}>
            <SocialNetworkIcon src={instagramIcon}/>
          </SocialNetworkLink>
        </SocialNetworksWrapper>
      </HeaderWrapper>
      <SubHeaderWrapper>
        <SubHeaderLink href={'/'}>Операторы</SubHeaderLink>
        <SubHeaderLink href={'/'}>Новости</SubHeaderLink>
        <SubHeaderLink href={'/'}>О нас</SubHeaderLink>
        <SubHeaderLink href={'/'}>Афиша</SubHeaderLink>
        <SubHeaderLink href={'/'}>Галерея</SubHeaderLink>
        <Search/>
      </SubHeaderWrapper>
    </header>
  );
}

const Search = () => {
  return (
    <SearchComponentWrapper>
      <SearchIcon src={searchIcon}/>
    </SearchComponentWrapper>
  );
}
