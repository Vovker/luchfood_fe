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
import addressIcon from '../../../assets/corners/address-icon.svg';
import arrowIcon from '../../../assets/black-arrow.svg';

const CornersCarousel: React.FC<ICarouselProps> = ({slides}) => {
  return (
    <SliderWrapper>
      <CarouselProvider
        naturalSlideWidth={315}
        naturalSlideHeight={450}
        totalSlides={slides.length}
        visibleSlides={4}
        infinite={true}
        playDirection={'forward'}
        isPlaying={true}
      >
        <Slider>
          {
            slides.map((slide, index) =>
              <Slide index={index} key={index}>
                <Card
                  url={slide.url}
                  title={slide.title}
                  imageUrl={slide.imageUrl}
                  address={slide.address}
                  kitchenType={slide.kitchenType}
                />
              </Slide>
            )
          }
        </Slider>
        <DotsWrapper>
          <StyledDot slide={1}/>
          <StyledDot slide={5}/>
          <StyledDot slide={9}/>
        </DotsWrapper>
        <StyledButtonBack>
          <StyledButtonIcon isReverse={true} src={arrowIcon}/>
        </StyledButtonBack>
        <StyledButtonNext>
          <StyledButtonIcon isReverse={false} src={arrowIcon}/>
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
          <CardInfoLineIcon src={addressIcon}/>
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

export default CornersCarousel;
