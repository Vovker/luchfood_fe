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
  MobileImage
} from './styled';
import "pure-react-carousel/dist/react-carousel.es.css";
import {ICarouselProps} from "./cornersCarousel.types";
import React from "react";
import kitchenTypeIcon from '../../../assets/corners/kitchen-type-icon.svg';
import {ReactComponent as AddressIcon} from '../../../assets/corners/address-icon.svg';
import {ReactComponent as ArrowIcon} from '../../../assets/black-arrow.svg';
import theme from "../../../theme";
import {isMobile} from "react-device-detect";
import {API_URL} from "../../../store/endpoints";
import {CornersTyped} from "../../../store/types/corners.types";
import {useNavigate} from "react-router-dom";

const ratio = 1.42

const slideWidth = window.innerWidth
const slideHeight = ratio*slideWidth

const CornersCarousel: React.FC<ICarouselProps> = ({slides}) => {

  return (
    <SliderWrapper>
      <CarouselProvider
        naturalSlideWidth={!isMobile ? 315 : slideWidth}
        naturalSlideHeight={!isMobile ? 450 : slideHeight}
        totalSlides={slides.length}
        visibleSlides={!isMobile ? 4 : 1}
        infinite={true}
        playDirection={'forward'}
        isPlaying={true}
      >
        <Slider>
          {
            slides.map((slide, index) =>
              <Slide index={index} key={index}>
                {
                  !isMobile
                    ? <Card {...slide}/>
                    :  <MobileCard {...slide}/>
                }
              </Slide>
            )
          }
        </Slider>
        <DotsWrapper>
          {!isMobile
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
            width={!isMobile ? '32px' : '25px'}
            height={!isMobile ? '32px' : '25px'}
          />
        </StyledButtonBack>
        <StyledButtonNext>
          <ArrowIcon
            fill={theme.colors.darkMain}
            width={!isMobile ? '32px' : '25px'}
            height={!isMobile ? '32px' : '25px'}
          />
        </StyledButtonNext>
      </CarouselProvider>
    </SliderWrapper>
  );
}

const Card: React.FC<CornersTyped> = ({
   name,
   address,
   kitchenType,
   id,
   mainImage
 }) => {

  const navigate = useNavigate();

  return (
    <CardWrapper
      onClick={() => navigate(`/corners/${id}`)}
      url={`${API_URL}/${mainImage}`}
    >
      <CardContentWrapper>
        <CardTitle>{name}</CardTitle>
        <CardInfoLineWrapper>
          <AddressIcon fill={theme.colors.white}/>
          {address}
        </CardInfoLineWrapper>
        <CardInfoLineWrapper>
          <CardInfoLineIcon src={kitchenTypeIcon}/>
          Кухня: {kitchenType.name}
        </CardInfoLineWrapper>
      </CardContentWrapper>
    </CardWrapper>
  );
}

const MobileCard: React.FC<CornersTyped> = ({
 mainImage
}) => {

  return (
      <MobileImage image={`${API_URL}/${mainImage}`} width={slideWidth} height={slideHeight}/>
  )
}

export default CornersCarousel;
