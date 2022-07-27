import React from "react";
import {CarouselProvider, Slide, Slider} from "pure-react-carousel";
import {IAfishaItemProps} from "../../afisha/afisha.types";
import {Card} from "../card/card";
import {AfishaDate, AfishaTitle} from "../../afisha/styled";
import {AfishaCarouselContainer, CarouselWrapper, StyledButtonBack, StyledButtonForward} from "./styled";
import { Title } from "../styled";
import {StyledButtonIcon} from "../cornersCarousel/styled";
import arrowIcon from "../../../assets/black-arrow.svg";

interface IAfishaCarouselProps {
  slides: IAfishaItemProps[]
}

export const AfishaCarousel:React.FC<IAfishaCarouselProps> = ({slides}) => {
  return (
    <AfishaCarouselContainer>
      <Title marginBottom={55}>Архив</Title>
      <CarouselWrapper>
        <CarouselProvider
          naturalSlideWidth={300}
          naturalSlideHeight={321}
          totalSlides={slides.length}
          visibleSlides={3}
          infinite={true}
          playDirection={'forward'}
          isPlaying={true}
        >
          <Slider>
            {
              slides.map((slide, index)=>
                <Slide index={index} key={index}>
                  <Card width={300} height={230} imgUrl={slide.imageUrl} style={{padding: '0 10px'}}>
                    <AfishaDate> {slide.date} </AfishaDate>
                    <AfishaTitle> {slide.title} </AfishaTitle>
                  </Card>
                </Slide>
              )
            }
          </Slider>
          <StyledButtonBack>
            <StyledButtonIcon isReverse={true} src={arrowIcon}/>
          </StyledButtonBack>
          <StyledButtonForward>
            <StyledButtonIcon isReverse={false} src={arrowIcon}/>
          </StyledButtonForward>
        </CarouselProvider>
      </CarouselWrapper>
    </AfishaCarouselContainer>
  )
}
