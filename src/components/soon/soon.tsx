import React from "react";
import soon from '../../assets/soon/soon.png'
import promoBurger from '../../assets/soon/promoBurger.png'
import promoWithTitle from '../../assets/soon/promoWithTitle.png'
import {MobileContainer, SocialLinks, SoonImg, SocialLink} from './styled'
import useMediaQuery from "../../hooks/useMatchMedia";
import telegramIcon from '../../assets/social_icons/telegram.svg';
import instagramIcon from '../../assets/social_icons/instagram.svg';

export const Soon = () => {

  const isDesktop = useMediaQuery('(min-width: 1073px)')


  return (
    <div>
      {
        isDesktop
          ? <SoonImg src={soon} alt='скоро'/>
          : <MobileContainer>
            <SoonImg isDesktop={isDesktop} width='345px' height='365px' src={promoWithTitle}/>
            <SoonImg isDesktop={isDesktop} width='345px' height='138px' src={promoBurger}/>
            <SocialLinks>
              <SocialLink>
                <img src={telegramIcon} alt=""/>
              </SocialLink>
              <SocialLink>
                <img src={instagramIcon} alt=""/>
              </SocialLink>
            </SocialLinks>
          </MobileContainer>
      }
    </div>
  )
}