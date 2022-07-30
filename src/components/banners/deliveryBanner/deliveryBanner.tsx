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
import useMediaQuery from "../../../hooks/useMatchMedia";
import React from "react";
import {IsDesktop} from "../../common/types/index.types";

export const DeliveryBanner = () => {

  const isDesktop = useMediaQuery('(min-width: 1073px)')

  return (
    <>
      <BannerWrapper isDesktop={isDesktop}>
        {!isDesktop && <BannerText isDesktop={false}/>}
        <ContentWrapper>
          <LeftBannerImage src={leftIcon} isDesktop={isDesktop}/>
          {isDesktop && <BannerText isDesktop={true}/>}
          <RightBannerImage src={rightIcon} isDesktop={isDesktop}/>
        </ContentWrapper>
        {!isDesktop &&
          <BannerButton>
          Заказать доставку
          </BannerButton>
        }
      </BannerWrapper>
      <Wave/>
    </>

  );
}

const BannerText: React.FC<IsDesktop> = ({isDesktop}) => {

  return(
    <BannerTextWrapper>
      <BannerTitle isDesktop={isDesktop}>
        Доставка в течении получаса
      </BannerTitle>
      <BannerSubtitle isDesktop={isDesktop}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat turpis lorem, eget dapibus dui
        feugiat sed. Interdum et malesuada fames
      </BannerSubtitle>
      {
        isDesktop &&
        <BannerButton>
        Заказать доставку
        <ArrowIcon fill={theme.colors.darkMain}/>
      </BannerButton>
      }
    </BannerTextWrapper>
  )
}