import React from "react";
import {CarouselProvider, Slide, Slider} from "pure-react-carousel";
import {IAfishaItemProps} from "../../afisha/afisha.types";
import {AfishaCardImage, AfishaCardWrapper, AfishaTitle, CustomLink} from "../../afisha/styled";
import {AfishaCarouselContainer, AfishaCarouselTitle, CarouselWrapper, StyledButtonBack, StyledButtonForward} from "./styled";
import {StyledDate } from "../styled";
import {ReactComponent as ArrowIcon} from "../../../assets/black-arrow.svg";
import theme from "../../../theme";

interface IAfishaCarouselProps {
  slides: IAfishaItemProps[]
}

export const AfishaCarousel:React.FC<IAfishaCarouselProps> = ({slides}) => {
  return (
    <AfishaCarouselContainer>
      <AfishaCarouselTitle>Архив</AfishaCarouselTitle>
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
                  <CustomLink to={slide.url}>
                    <AfishaCardWrapper>
                      <AfishaCardImage image={slide.imageUrl}/>
                      <StyledDate> {slide.date} </StyledDate>
                      <AfishaTitle> {slide.title} </AfishaTitle>
                    </AfishaCardWrapper>
                  </CustomLink>
                </Slide>
              )
            }
          </Slider>
          <StyledButtonBack>
            <ArrowIcon fill={theme.colors.darkMain} style={{transform:"rotate(180deg)"}}/>
          </StyledButtonBack>
          <StyledButtonForward>
            <ArrowIcon fill={theme.colors.darkMain}/>
          </StyledButtonForward>
        </CarouselProvider>
      </CarouselWrapper>
    </AfishaCarouselContainer>
  )
}
