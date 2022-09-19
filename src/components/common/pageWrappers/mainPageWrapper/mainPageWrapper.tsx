import {
  PageWrapperStyled,
  MobileSocialIcon,
  MobileSocialIconImg,
} from "./styled";
import React from "react";
import {PageWrapperProps} from "./mainPageWrapper.types";
import {isMobile} from "react-device-detect";
import instagramIcon from "../../../../assets/social_icons/instagram.svg";
import telegramIcon from "../../../../assets/social_icons/telegram.svg";

const MainPageWrapper = (props: PageWrapperProps) => {
  return (
    <PageWrapperStyled>
      {
        isMobile && (
          <>
            <MobileSocialIcon bottom={50} target={"_blank"} href="https://www.instagram.com/luchshaya_ulitsa/">
              <MobileSocialIconImg src={instagramIcon}/>
            </MobileSocialIcon>
            <MobileSocialIcon bottom={113} target={"_blank"} href="https://t.me/luchstreetfood">
              <MobileSocialIconImg src={telegramIcon}/>
            </MobileSocialIcon>
          </>
        )
      }
      {props.children}
    </PageWrapperStyled>
  )
}

export {
  MainPageWrapper
}
