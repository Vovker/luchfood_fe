import {
  BannerWrapper,
  LeftBannerImage,
  RightBannerImage,
  BannerSubtitle,
  BannerTitle,
  BannerTextWrapper,
  BannerButtonIcon,
  BannerButton
} from './styled';
import leftIcon from '../../../assets/delivery_banner/leftImage.png';
import rightIcon from '../../../assets/delivery_banner/rightImage.png';
import {ReactComponent as ArrowIcon} from '../../../assets/black-arrow.svg';

export const DeliveryBanner = () => {
  return (
    <BannerWrapper>
      <LeftBannerImage src={leftIcon}/>
      <BannerTextWrapper>
        <BannerTitle>
          Доставка в течении получаса
        </BannerTitle>
        <BannerSubtitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat turpis lorem, eget dapibus dui feugiat sed. Interdum et malesuada fames
        </BannerSubtitle>
        <BannerButton>
          Заказать доставку
          <ArrowIcon fill="#1E1E1E"/>
        </BannerButton>
      </BannerTextWrapper>
      <RightBannerImage src={rightIcon}/>
    </BannerWrapper>
  );
}
