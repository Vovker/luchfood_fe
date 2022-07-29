import React from "react";
import {CarouselProvider, Slide, Slider} from "pure-react-carousel";
import {IAfishaItemProps} from "../../afisha/afisha.types";
import {Card} from "../card/card";
import {AfishaTitle, CustomLink} from "../../afisha/styled";
import {AfishaCarouselContainer, CarouselWrapper, StyledButtonBack, StyledButtonForward} from "./styled";
import {StyledDate, Title } from "../styled";
import {StyledButtonIcon} from "../cornersCarousel/styled";
import {ReactComponent as ArrowIcon} from "../../../assets/black-arrow.svg";
import theme from "../../../theme";

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
                  <CustomLink to={slide.url}>
                    <Card width={300} height={230} imgUrl={slide.imageUrl}>
                      <StyledDate> {slide.date} </StyledDate>
                      <AfishaTitle> {slide.title} </AfishaTitle>
                    </Card>
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
