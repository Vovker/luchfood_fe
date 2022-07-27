import {
  FooterWrapper,
  Logo,
  WorkHours,
  Socials,
  SocialLink,
  SocialIcon,
  Copyright
} from './styled';
import logo from '../../../assets/logo.svg';
import telegramIcon from '../../../assets/social_icons/telegram.svg';
import instagramIcon from '../../../assets/social_icons/instagram.svg';
import useMediaQuery from "../../../hooks/useMatchMedia";
import {Address} from "../header/styled";


export const Footer = () => {

  const isDesktop = useMediaQuery('(min-width: 1073px)')

  return (
    <FooterWrapper isDesktop={isDesktop}>
      <div>
        {isDesktop && <Logo src={logo}/>}
        {
          !isDesktop &&
			<Address isDesktop={isDesktop}>
				<b>Ул. Толбухина 4б (территория завода “Луч”)</b>
			</Address>
        }
        <WorkHours isDesktop={isDesktop}>
          {isDesktop && "Часы работы:"} <b>пн-вс с 08:00 до 02.00</b>
        </WorkHours>
      </div>
      {
        isDesktop &&
		  <div style={{display: 'flex', alignItems: 'flex-end', flexDirection: 'column'}}>
			  <Socials>
				  <SocialLink href={'tel:+375291234567'}>+375(29) 123-45-67</SocialLink>
				  <SocialLink>
					  <SocialIcon src={telegramIcon}/>
				  </SocialLink>
				  <SocialLink>
					  <SocialIcon src={instagramIcon}/>
				  </SocialLink>
			  </Socials>
			  <Copyright>
				  Разработано ООО «Айфортекс». Все права защищены
			  </Copyright>
		  </div>
      }
    </FooterWrapper>
  );
}
