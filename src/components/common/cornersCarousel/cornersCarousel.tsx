import {
  CarouselProvider,
  Slider,
  Slide,
} from "pure-react-carousel";
import {
  SliderWrapper,
  CardWrapper,
  CardContentWrapper,
  CardTitle,
  CardInfoLineIcon,
  CardInfoLineWrapper,
  DotsWrapper,
  StyledDot,
  StyledButtonBack,
  StyledButtonNext,
  StyledButtonIcon
} from './styled';
import "pure-react-carousel/dist/react-carousel.es.css";
import {ICarouselProps, ISlideProps} from "./cornersCarousel.types";
import React from "react";
import kitchenTypeIcon from '../../../assets/corners/kitchen-type-icon.svg';
import {ReactComponent as AddressIcon} from '../../../assets/corners/address-icon.svg';
import {ReactComponent as ArrowIcon} from '../../../assets/black-arrow.svg';
import theme from "../../../theme";
import useMediaQuery from "../../../hooks/useMatchMedia";
import { CardImg } from "../card/styled";

const CornersCarousel: React.FC<ICarouselProps> = ({slides}) => {

  const isDesktop = useMediaQuery('(min-width: 1073px)')

  return (
    <SliderWrapper isDesktop={isDesktop}>
      <CarouselProvider
        naturalSlideWidth={isDesktop ? 315 : 345}
        naturalSlideHeight={isDesktop ? 450 : 493}
        totalSlides={slides.length}
        visibleSlides={isDesktop ? 4 : 1}
        infinite={true}
        playDirection={'forward'}
        isPlaying={true}
      >
        <Slider>
          {
            slides.map((slide, index) =>
              <Slide index={index} key={index}>
                {
                  isDesktop
                    ? <Card
                      url={slide.url}
                      title={slide.title}
                      imageUrl={slide.imageUrl}
                      address={slide.address}
                      kitchenType={slide.kitchenType}
                    />
                    :  <MobileCard
                      url={slide.url}
                      title={slide.title}
                      imageUrl={slide.imageUrl}
                      address={slide.address}
                      kitchenType={slide.kitchenType}
                    />
                }
              </Slide>
            )
          }
        </Slider>
        <DotsWrapper>
          {isDesktop
            ? <>
              <StyledDot slide={1}/>
              <StyledDot slide={5}/>
              <StyledDot slide={9}/>
            </>
            : <>
              {
                slides.map((slide,index)=>
                  <StyledDot slide={index+1} key={index}/>
                )
              }
            </>
          }


        </DotsWrapper>
        <StyledButtonBack>
          <ArrowIcon
            fill={theme.colors.darkMain}
            style={{transform:"rotate(180deg)"}}
            width={isDesktop ? '32px' : '25px'}
            height={isDesktop ? '32px' : '25px'}
          />
        </StyledButtonBack>
        <StyledButtonNext>
          <ArrowIcon
            fill={theme.colors.darkMain}
            width={isDesktop ? '32px' : '25px'}
            height={isDesktop ? '32px' : '25px'}
          />
        </StyledButtonNext>
      </CarouselProvider>
    </SliderWrapper>
  );
}

const Card: React.FC<ISlideProps> = ({
   title,
   address,
   kitchenType,
   url,
   imageUrl
 }) => {
  return (
    <CardWrapper
      url={imageUrl}
    >
      <CardContentWrapper>
        <CardTitle>{title}</CardTitle>
        <CardInfoLineWrapper>
          <AddressIcon fill={theme.colors.white}/>
          {address}
        </CardInfoLineWrapper>
        <CardInfoLineWrapper>
          <CardInfoLineIcon src={kitchenTypeIcon}/>
          Кухня: {kitchenType}
        </CardInfoLineWrapper>
      </CardContentWrapper>
    </CardWrapper>
  );
}

const MobileCard: React.FC<ISlideProps> = ({
 title,
 address,
 kitchenType,
 url,
 imageUrl
}) => {
  return (
    <CardImg image={imageUrl}/>
  )
}

export default CornersCarousel;
