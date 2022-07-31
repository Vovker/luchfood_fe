import React from "react";
import {SocialImg, SocialLinks} from "../../common/styled";
import {AfishaInfoCategory, AfishaInfoDate, AfishaInfoDescription, AfishaInfoWrapper,
  AfishaItemImage,
  AfishaItemTitle, AfishaItemWrapper, AfishaMobileImage, MobileCategoryWrapper} from "./styled";
import coloredIstagramIcon from "../../../assets/social_icons/instagramColored.svg";
import twitterIcon from "../../../assets/social_icons/twitter.svg";
import {BackButton} from "../../common/backButton/backButton";
import {isMobile} from "react-device-detect";
import {routes} from "../../../routes/routes";


export const AfishaItemPage: React.FC = () => {

  return (
    <>
      <BackButton title='Вся Афиша' url={`/${routes.afisha}`}/>
      {
        !isMobile
          ? <AfishaItem/>
          : <AfishaItemMobile/>
      }
    </>
  )
}

const AfishaItem = () => {
  return (
    <AfishaItemWrapper>
        <AfishaInfoWrapper>
          <AfishaItemTitle>
            Vegan Fest- фестиваль вегетарианской кухни
          </AfishaItemTitle>
          <AfishaInfoDate>
            Июль 16, 2022 в 10.00
          </AfishaInfoDate>
          <AfishaInfoCategory>
            Категория: Музыка
          </AfishaInfoCategory>
          <AfishaInfoDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam convallis placerat iaculis. Donec vitae
            quam cursus, tempor quam non, euismod ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus.
            Nunc viverra mi lacus, id condimentum leo fringilla vitae. Etiam convallis placerat
          </AfishaInfoDescription>
        </AfishaInfoWrapper>
        <div>
          <AfishaItemImage
            image='http://sun9-32.userapi.com/s/v1/if1/UCQ49DRyoh40eVZjeqLBnHNel6H3QZYEKD26sBErJ-xse4zEV-8ft3tsQJNGJhOpEW2WrTtZ.jpg?size=400x433&quality=96&crop=0,0,472,512&ava=1'/>
          <SocialLinks>
            Поделиться:
            <SocialImg src={coloredIstagramIcon}/>
            <SocialImg src={twitterIcon}/>
          </SocialLinks>
        </div>
    </AfishaItemWrapper>
  )
}

const AfishaItemMobile = () => {
  return (
    <AfishaItemWrapper>
      <AfishaInfoWrapper>
        <AfishaItemTitle>
          Vegan Fest- фестиваль вегетарианской кухни
        </AfishaItemTitle>
        <AfishaMobileImage
          src='http://sun9-32.userapi.com/s/v1/if1/UCQ49DRyoh40eVZjeqLBnHNel6H3QZYEKD26sBErJ-xse4zEV-8ft3tsQJNGJhOpEW2WrTtZ.jpg?size=400x433&quality=96&crop=0,0,472,512&ava=1'/>
        <MobileCategoryWrapper>
          <AfishaInfoDate>
            Июль 16, 2022 в 10.00
          </AfishaInfoDate>
          <AfishaInfoCategory>
            Категория: Музыка
          </AfishaInfoCategory>
        </MobileCategoryWrapper>
        <AfishaInfoDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam convallis placerat iaculis. Donec vitae
          quam cursus, tempor quam non, euismod ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          Nunc viverra mi lacus, id condimentum leo fringilla vitae. Etiam convallis placerat
        </AfishaInfoDescription>
      </AfishaInfoWrapper>
      <SocialLinks>
        Поделиться:
        <SocialImg src={coloredIstagramIcon}/>
        <SocialImg src={twitterIcon}/>
      </SocialLinks>
    </AfishaItemWrapper>
  )
}