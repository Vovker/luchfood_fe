import {
  CarouselContainer,
  PosterLink,
  SliderWrapper,
  CardWrapper,
  CardImage,
  PublicationDate,
  PublicationDescription,
  PublicationTitle,
  MobileCardWrapper,
  MobileLink, MobileTitle, MobileDescription, StyledButtonBack, StyledButtonNext, MobileCardImage, UpdatesCarouselTitle
} from './styled';
import {ReactComponent as GreenArrow} from '../../../assets/green-arrow.svg';
import React from "react";
import {IUpdatesCarouselProps, UpdatesCarouselTypes} from "./updatesCarousel.types";
import {CarouselProvider, Slide, Slider} from "pure-react-carousel";
import {StyledDate} from '../styled';
import theme from "../../../theme";
import {ReactComponent as ArrowIcon} from "../../../assets/black-arrow.svg";
import {isMobile} from "react-device-detect";

export const UpdatesCarousel: React.FC<IUpdatesCarouselProps> = ({slides}) => {


  return (
    <CarouselContainer>
      <UpdatesCarouselTitle>
        Последние обновления
      </UpdatesCarouselTitle>
      <SliderWrapper>
        <CarouselProvider
          naturalSlideWidth={!isMobile ? 380 : 346}
          naturalSlideHeight={!isMobile ? 480 : 456}
          totalSlides={slides.length}
          visibleSlides={!isMobile ? 3 : 1}
          infinite={true}
          playDirection={'forward'}
          isPlaying={true}
        >
          <Slider>
            {
              slides.map((slide, index: number) =>
                <Slide index={index} key={index}>
                  {
                    !isMobile
                      ? <CardDesktop
                        title={slide.title}
                        date={slide.date}
                        description={slide.description}
                        imageUrl={slide.imageUrl}
                        url={slide.url}
                      />
                      : <CardMobile
                        title={slide.title}
                        date={slide.date}
                        description={slide.description}
                        imageUrl={slide.imageUrl}
                        url={slide.url}
                      />
                  }
                </Slide>
              )
            }
          </Slider>
          <StyledButtonBack>
            <ArrowIcon
              fill={isMobile ? theme.colors.darkMain : theme.colors.white}
              style={{transform: "rotate(180deg)"}}
              width={isMobile ? '25px' : '30px'}
              height={isMobile ? '25px' : '30px'}
            />
          </StyledButtonBack>
          <StyledButtonNext>
            <ArrowIcon
              fill={isMobile ? theme.colors.darkMain : theme.colors.white}
              width={isMobile ? '25px' : '30px'}
              height={isMobile ? '25px' : '30px'}
            />
          </StyledButtonNext>
        </CarouselProvider>
      </SliderWrapper>
      {
        !isMobile &&
		  <PosterLink>
			  Вся афиша
			  <GreenArrow/>
		  </PosterLink>
      }
    </CarouselContainer>
  );
}

const CardDesktop: React.FC<UpdatesCarouselTypes> = ({title, date, description, imageUrl, url}) => {
  return (
    <CardWrapper>
      <CardImage url={imageUrl}/>
      <PublicationDate>{date}</PublicationDate>
      <PublicationTitle>{title}</PublicationTitle>
      <PublicationDescription>{description}</PublicationDescription>
    </CardWrapper>
  );
}

const CardMobile: React.FC<UpdatesCarouselTypes> = ({title, date, description, imageUrl, url}) => {
  return (
    <MobileCardWrapper>
      <MobileCardImage image={imageUrl}/>
      <StyledDate> {date} </StyledDate>
      <MobileTitle> {title} </MobileTitle>
      <MobileDescription>
        {description}
      </MobileDescription>
      <MobileLink to={url}>
        Подробнее <GreenArrow/>
      </MobileLink>
    </MobileCardWrapper>
  )
}


