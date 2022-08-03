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
  HeaderContainer,
  WorkHours
} from './styled';
import logo from '../../../assets/logo.svg';
import telegramIcon from '../../../assets/social_icons/telegram.svg';
import instagramIcon from '../../../assets/social_icons/instagram.svg';
import {routes} from "../../../routes/routes";
import {isMobile} from 'react-device-detect';

export const Header = () => {

  return (
    <HeaderContainer>
      {
        isMobile
          ? <MainHeaderMobile/>
          : <MainHeader/>
      }
      <SubHeaderWrapper>
        <SubHeaderLink href={`/${routes.corners}`}>Корнеры</SubHeaderLink>
        <SubHeaderLink href={`/${routes.news}`}>Новости</SubHeaderLink>
        <SubHeaderLink href={`/${routes.about}`}>О нас</SubHeaderLink>
        <SubHeaderLink href={`/${routes.afisha}`}>Афиша</SubHeaderLink>
        <SubHeaderLink href={`/${routes.gallery}`}>Галерея</SubHeaderLink>
      </SubHeaderWrapper>
    </HeaderContainer>
  );
}

const MainHeader = () => {
  return (
    <HeaderWrapper>
      <AddressWrapper>
        <Address>
          <b>Минск, Пр. Hезависимости 95, корпус 2</b>
        </Address>
        <Address>
          Часы работы <b>: пн-вс с 09:00 до 02.00</b>
        </Address>
      </AddressWrapper>
      <LogoWrapper href={`/`}>
        <Logo src={logo}/>
      </LogoWrapper>
      <SocialNetworksWrapper>
        <SocialNetworkLink href={'tel:+375296707088'}>
          +375(29) 670-70-88
        </SocialNetworkLink>
        <SocialNetworkLink href={'#'}>
          <SocialNetworkIcon src={telegramIcon}/>
        </SocialNetworkLink>
        <SocialNetworkLink href={'#'}>
          <SocialNetworkIcon src={instagramIcon}/>
        </SocialNetworkLink>
      </SocialNetworksWrapper>
    </HeaderWrapper>
  )
}

const MainHeaderMobile = () => {
  return (
    <HeaderWrapper>
      <div>
        <LogoWrapper href={'/'}>
          <Logo src={logo}/>
        </LogoWrapper>
        <SocialNetworkLink href={'tel:+375296707088'}>
          +375(29) 670-70-88
        </SocialNetworkLink>
      </div>
      <AddressWrapper>
        <Address>
          Пр. Hезависимости 95 корпус 2
        </Address>
        <WorkHours>
          <b>пн-вс с 09:00 до 02.00</b>
        </WorkHours>
      </AddressWrapper>
    </HeaderWrapper>
  )
}
