import React from "react";
import {InfoWrapper, ItemPageWrapper, SocialImg, SocialLinks, Wrapper} from "../../common/styled";
import {CardImg} from "../../common/card/styled";
import {InfoCategory, InfoDate, InfoDescription, MobileCategoryWrapper} from "./styled";
import coloredIstagramIcon from "../../../assets/social_icons/instagramColored.svg";
import twitterIcon from "../../../assets/social_icons/twitter.svg";
import {BackButton} from "../../common/backButton/backButton";
import {Title} from "../../common/title/title";
import useMediaQuery from "../../../hooks/useMatchMedia";


export const AfishaItemPage: React.FC = () => {

  const isDesktop = useMediaQuery('(min-width: 1073px)')

  return (
    <>
      <BackButton title='Вся Афиша'/>
      <Wrapper width={isDesktop ? 980 : 345} paddingTop={isDesktop ? 72 : 16}>
        <ItemPageWrapper gap={isDesktop ? 55 : 26} isDesktop={isDesktop}>
          <InfoWrapper gap={16}>
            <Title align="center">
              Vegan Fest- фестиваль вегетарианской кухни
            </Title>
            {!isDesktop && <CardImg
									image='http://sun9-32.userapi.com/s/v1/if1/UCQ49DRyoh40eVZjeqLBnHNel6H3QZYEKD26sBErJ-xse4zEV-8ft3tsQJNGJhOpEW2WrTtZ.jpg?size=400x433&quality=96&crop=0,0,472,512&ava=1'/>}
            {
              isDesktop
                ? <>
                  <InfoDate isDesktop={isDesktop}>
                    Июль 16, 2022 в 10.00
                  </InfoDate>
                  <InfoCategory isDesktop={isDesktop}>
                    Категория: Музыка
                  </InfoCategory>
                </>
                : <>
                  <MobileCategoryWrapper>
                    <InfoDate isDesktop={isDesktop}>
                      Июль 16, 2022 в 10.00
                    </InfoDate>
                    <InfoCategory isDesktop={isDesktop}>
                      Категория: Музыка
                    </InfoCategory>
                  </MobileCategoryWrapper>
                </>
            }
            <InfoDescription isDesktop={isDesktop}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam convallis placerat iaculis. Donec vitae
              quam cursus, tempor quam non, euismod ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Nunc viverra mi lacus, id condimentum leo fringilla vitae. Etiam convallis placerat
            </InfoDescription>
          </InfoWrapper>
          <div>
            {isDesktop && <CardImg
								   image='http://sun9-32.userapi.com/s/v1/if1/UCQ49DRyoh40eVZjeqLBnHNel6H3QZYEKD26sBErJ-xse4zEV-8ft3tsQJNGJhOpEW2WrTtZ.jpg?size=400x433&quality=96&crop=0,0,472,512&ava=1'/>}
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