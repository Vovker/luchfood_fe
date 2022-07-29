import {
  BannerWrapper,
  LeftBannerImage,
  RightBannerImage,
  BannerSubtitle,
  BannerTitle,
  BannerTextWrapper,
  BannerButtonIcon,
  BannerButton,
  Wave
} from './styled';
import leftIcon from '../../../assets/delivery_banner/leftImage.png';
import rightIcon from '../../../assets/delivery_banner/rightImage.png';
import {ReactComponent as ArrowIcon} from '../../../assets/black-arrow.svg';
import theme from "../../../theme";

export const DeliveryBanner = () => {
  return (
    <>
      <BannerWrapper>
        <LeftBannerImage src={leftIcon}/>
        <BannerTextWrapper>
          <BannerTitle>
            Доставка в течении получаса
          </BannerTitle>
          <BannerSubtitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat turpis lorem, eget dapibus dui
            feugiat sed. Interdum et malesuada fames
          </BannerSubtitle>
          <BannerButton>
            Заказать доставку
            <ArrowIcon fill={theme.colors.darkMain}/>
          </BannerButton>
        </BannerTextWrapper>
        <RightBannerImage src={rightIcon}/>
      </BannerWrapper>
      <Wave/>
    </>

  );
}
