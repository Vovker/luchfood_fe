import {
  FooterWrapper,
  Logo,
  WorkHours,
  Socials,
  SocialLink,
  SocialIcon,
  Copyright,
  FooterAddress
} from './styled';
import logo from '../../../assets/logo.svg';
import telegramIcon from '../../../assets/social_icons/telegram.svg';
import instagramIcon from '../../../assets/social_icons/instagram.svg';
import {isMobile} from "react-device-detect";


export const Footer = () => {


  return (
    <FooterWrapper>
      <div>
        {!isMobile && <Logo src={logo}/>}
        {
          isMobile &&
			<FooterAddress>
				<b>Минск, пр. Hезависимости 95, корпус 2</b>
			</FooterAddress>
        }
        <WorkHours>
          {!isMobile && "Часы работы:"} <b>пн-вс с 12:00 до 02:00</b>
        </WorkHours>
      </div>
      {
        !isMobile &&
		  <div style={{display: 'flex', alignItems: 'flex-end', flexDirection: 'column'}}>
			  <Socials>
				  <SocialLink href={'tel:+375296707088'}>+375 (29) 670-70-88</SocialLink>
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
