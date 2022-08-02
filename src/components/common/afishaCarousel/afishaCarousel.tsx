import React from "react";
import {CarouselProvider, Slide, Slider} from "pure-react-carousel";
import {AfishaCardImage, AfishaCardWrapper, AfishaTitle, CustomLink} from "../../afisha/styled";
import {AfishaCarouselContainer, AfishaCarouselTitle, CarouselWrapper, StyledButtonBack, StyledButtonForward} from "./styled";
import {StyledDate } from "../styled";
import {ReactComponent as ArrowIcon} from "../../../assets/black-arrow.svg";
import theme from "../../../theme";
import {EventTyped} from "../../../store/types/events.types";
import {API_URL} from "../../../store/endpoints";
import moment from "moment";

interface IAfishaCarouselProps {
  slides: EventTyped[]
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
                  <CustomLink to={`/afisha/${slide.id}`}>
                    <AfishaCardWrapper>
                      <AfishaCardImage image={`${API_URL}/${slide.img}`}/>
                      <StyledDate> {moment(slide.date).locale('ru').format('DD MMMM YYYY')} </StyledDate>
                      <AfishaTitle> {slide.name} </AfishaTitle>
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
