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
        <SubHeaderLink to={`/${routes.corners}`}>Корнеры</SubHeaderLink>
        <SubHeaderLink to={`/${routes.news}`}>Новости</SubHeaderLink>
        <SubHeaderLink to={`/${routes.about}`}>О нас</SubHeaderLink>
        <SubHeaderLink to={`/${routes.afisha}`}>Афиша</SubHeaderLink>
        <SubHeaderLink to={`/${routes.gallery}`}>Галерея</SubHeaderLink>
      </SubHeaderWrapper>
    </HeaderContainer>
  );
}

const MainHeader = () => {
  return (
    <HeaderWrapper>
      <AddressWrapper>
        <Address>
          <b>Минск, пр. Hезависимости 95, корпус 2</b>
        </Address>
        <Address>
          Часы работы <b>: пн-вс с 12:00 до 02:00</b>
        </Address>
      </AddressWrapper>
      <LogoWrapper href={`/`}>
        <Logo src={logo}/>
      </LogoWrapper>
      <SocialNetworksWrapper>
        <SocialNetworkLink href={'tel:+375295697777'}>
          +375 (29) 569-77-77
        </SocialNetworkLink>
        <SocialNetworkLink href={'https://t.me/luchstreetfood'} target={'_blank'}>
          <SocialNetworkIcon src={telegramIcon}/>
        </SocialNetworkLink>
        <SocialNetworkLink href={'https://www.instagram.com/luchshaya_ulitsa/'} target={'_blank'}>
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
        <SocialNetworkLink href={'tel:+375295697777'}>
          +375 (29) 569-77-77
        </SocialNetworkLink>
      </div>
      <AddressWrapper>
        <Address>
          пр. Hезависимости 95 корпус 2
        </Address>
        <WorkHours>
          <b>пн-вс с 12:00 до 02:00</b>
        </WorkHours>
      </AddressWrapper>
    </HeaderWrapper>
  )
}
