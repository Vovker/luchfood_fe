import {
  BannerWrapper,
  LeftBannerImage,
  RightBannerImage,
  BannerSubtitle,
  BannerTitle,
  BannerTextWrapper,
  BannerButtonIcon,
  BannerButton,
  Wave,
  ContentWrapper
} from './styled';
import leftIcon from '../../../assets/delivery_banner/leftImage.png';
import rightIcon from '../../../assets/delivery_banner/rightImage.png';
import {ReactComponent as ArrowIcon} from '../../../assets/black-arrow.svg';
import theme from "../../../theme";
import React from "react";
import {IsDesktop} from "../../common/types/index.types";
import {isMobile} from "react-device-detect";

export const DeliveryBanner = () => {

  return (
    <>
      <BannerWrapper>
        {isMobile && <BannerText isDesktop={false}/>}
        <ContentWrapper>
          <LeftBannerImage src={leftIcon}/>
          {!isMobile && <BannerText isDesktop={true}/>}
          <RightBannerImage src={rightIcon}/>
        </ContentWrapper>
        {isMobile &&
          <BannerButton>
          Заказать доставку
          </BannerButton>
        }
      </BannerWrapper>
      <Wave/>
    </>

  );
}

const BannerText: React.FC<IsDesktop> = () => {

  return(
    <BannerTextWrapper>
      <BannerTitle>
        Доставка в течении получаса
      </BannerTitle>
      <BannerSubtitle>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat turpis lorem, eget dapibus dui
        feugiat sed. Interdum et malesuada fames
      </BannerSubtitle>
      {
        !isMobile &&
        <BannerButton>
        Заказать доставку
        <ArrowIcon fill={theme.colors.darkMain}/>
      </BannerButton>
      }
    </BannerTextWrapper>
  )
}