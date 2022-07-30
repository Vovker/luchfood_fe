import React from "react";
import {InfoWrapper, ItemPageWrapper, StyledDate, Wrapper} from "../../common/styled";
import {CardImg} from "../../common/card/styled";
import coloredIstagramIcon from "../../../assets/social_icons/instagramColored.svg";
import twitterIcon from "../../../assets/social_icons/twitter.svg";
import {BackButton} from "../../common/backButton/backButton";
import {InfoDescription, SocialImg, SocialLinks} from "../../afisha/afishaItemPage/styled";
import {Title} from "../../common/title/title";
import useMediaQuery from "../../../hooks/useMatchMedia";


export const NewsItemPage: React.FC = () => {

  const isDesktop = useMediaQuery('(min-width: 1073px)')

  return (
    <>
      <BackButton title='Все новости'/>
      <Wrapper width={isDesktop ? 980 : 345} paddingTop={isDesktop ? 72 : 16}>
        <ItemPageWrapper gap={isDesktop ? 55 : 26} isDesktop={isDesktop}>
          <InfoWrapper gap={isDesktop ? 16 : 6}>
            <Title marginBottom={14} align="center">
              Vegan Fest- фестиваль вегетарианской кухни
            </Title>
            {
              !isDesktop &&
				<CardImg width={345} height={225}
						 image='http://sun9-32.userapi.com/s/v1/if1/UCQ49DRyoh40eVZjeqLBnHNel6H3QZYEKD26sBErJ-xse4zEV-8ft3tsQJNGJhOpEW2WrTtZ.jpg?size=400x433&quality=96&crop=0,0,472,512&ava=1'/>
            }
            <StyledDate isDesktop={isDesktop}>
              Июль 16, 2022
            </StyledDate>
            <InfoDescription isDesktop={isDesktop}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam convallis placerat iaculis. Donec vitae
              quam cursus, tempor quam non, euismod ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Nunc viverra mi lacus, id condimentum leo fringilla vitae. Etiam convallis placerat
            </InfoDescription>
          </InfoWrapper>
          <div>
            {
              isDesktop &&
				<CardImg width={435} height={333}
						 image='http://sun9-32.userapi.com/s/v1/if1/UCQ49DRyoh40eVZjeqLBnHNel6H3QZYEKD26sBErJ-xse4zEV-8ft3tsQJNGJhOpEW2WrTtZ.jpg?size=400x433&quality=96&crop=0,0,472,512&ava=1'/>
            }
            <SocialLinks isDesktop={isDesktop}>
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
