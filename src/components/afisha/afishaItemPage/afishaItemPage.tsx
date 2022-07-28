import React from "react";
import {InfoWrapper, ItemPageWrapper, Title, Wrapper } from "../../common/styled";
import { CardImg } from "../../common/card/styled";
import {InfoCategory, InfoDate, InfoDescription, SocialImg, SocialLinks } from "./styled";
import coloredIstagramIcon from "../../../assets/social_icons/instagramColored.svg";
import twitterIcon from "../../../assets/social_icons/twitter.svg";
import {BackButton} from "../../common/backButton/backButton";


export const AfishaItemPage:React.FC = () => {

  return(
    <>
      <BackButton title='Вся Афиша'/>
      <Wrapper width={980} paddingTop={72}>
        <ItemPageWrapper gap={54}>
          <InfoWrapper gap={16}>
            <Title>
              Vegan Fest- фестиваль вегетарианской кухни
            </Title>
            <InfoDate>
              Июль 16, 2022 в 10.00
            </InfoDate>
            <InfoCategory>
              Категория: Музыка
            </InfoCategory>
            <InfoDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam convallis placerat iaculis. Donec vitae quam cursus, tempor quam non, euismod ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc viverra mi lacus, id condimentum leo fringilla vitae. Etiam convallis placerat
            </InfoDescription>
          </InfoWrapper>
          <div>
            <CardImg width='435px' height='333px' image='http://sun9-32.userapi.com/s/v1/if1/UCQ49DRyoh40eVZjeqLBnHNel6H3QZYEKD26sBErJ-xse4zEV-8ft3tsQJNGJhOpEW2WrTtZ.jpg?size=400x433&quality=96&crop=0,0,472,512&ava=1'/>
            <SocialLinks>
              Поделиться:
              <SocialImg src={coloredIstagramIcon}/>
              <SocialImg src={twitterIcon}/>
            </SocialLinks>
          </div>
        </ItemPageWrapper>
      </Wrapper>
    </>
  )
}