import React from "react";
import {SocialImg, SocialLinks, StyledDate} from "../../common/styled";
import coloredIstagramIcon from "../../../assets/social_icons/instagramColored.svg";
import twitterIcon from "../../../assets/social_icons/twitter.svg";
import {BackButton} from "../../common/backButton/backButton";
import {isMobile} from 'react-device-detect';
import {NewsItemImage, NewsItemInfoDescription, NewsItemInfoWrapper, NewsItemMobileImage, NewsItemTitle, NewsItemWrapper } from "./styled";


export const NewsItemPage: React.FC = () => {

  return (
    <>
      <BackButton title='Все новости'/>
      {
        !isMobile
          ? <DesktopLayout/>
          : <MobileLayout/>
      }
    </>
  )
}

const DesktopLayout = () => {
  return (
    <NewsItemWrapper>
      <NewsItemInfoWrapper>
        <NewsItemTitle>
          Vegan Fest
        </NewsItemTitle>
        <StyledDate>
          Июль 16, 2022
        </StyledDate>
        <NewsItemInfoDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam convallis placerat iaculis. Donec vitae
          quam cursus, tempor quam non, euismod ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          Nunc viverra mi lacus, id condimentum leo fringilla vitae. Etiam convallis placerat
        </NewsItemInfoDescription>
      </NewsItemInfoWrapper>
      <div>
        <NewsItemImage
          image='http://sun9-32.userapi.com/s/v1/if1/UCQ49DRyoh40eVZjeqLBnHNel6H3QZYEKD26sBErJ-xse4zEV-8ft3tsQJNGJhOpEW2WrTtZ.jpg?size=400x433&quality=96&crop=0,0,472,512&ava=1'/>
        <SocialLinks>
          Поделиться:
          <SocialImg src={coloredIstagramIcon}/>
          <SocialImg src={twitterIcon}/>
        </SocialLinks>
      </div>
    </NewsItemWrapper>
  )
}

const MobileLayout = () => {
  return (
    <NewsItemWrapper>
      <NewsItemInfoWrapper>
        <NewsItemTitle>
          Vegan Fest- фестиваль вегетарианской кухни
        </NewsItemTitle>
        <NewsItemMobileImage
          src='http://sun9-32.userapi.com/s/v1/if1/UCQ49DRyoh40eVZjeqLBnHNel6H3QZYEKD26sBErJ-xse4zEV-8ft3tsQJNGJhOpEW2WrTtZ.jpg?size=400x433&quality=96&crop=0,0,472,512&ava=1'/>
        <StyledDate>
          Июль 16, 2022
        </StyledDate>
        <NewsItemInfoDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam convallis placerat iaculis. Donec vitae
          quam cursus, tempor quam non, euismod ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          Nunc viverra mi lacus, id condimentum leo fringilla vitae. Etiam convallis placerat
        </NewsItemInfoDescription>
      </NewsItemInfoWrapper>
      <SocialLinks>
        Поделиться:
        <SocialImg src={coloredIstagramIcon}/>
        <SocialImg src={twitterIcon}/>
      </SocialLinks>
    </NewsItemWrapper>
  )
}
