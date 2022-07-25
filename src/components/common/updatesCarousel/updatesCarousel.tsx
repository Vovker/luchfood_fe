import {
  CarouselTitle,
  CarouselContainer,
  PosterLink,
  PosterLinkIcon,
  SliderWrapper,
  CardWrapper,
  CardImage,
  PublicationDate,
  PublicationDescription,
  PublicationTitle
} from './styled';
import greenArrow from '../../../assets/green-arrow.svg';
import React from "react";
import {IUpdatesCarouselProps, UpdatesCarouselTypes} from "./updatesCarousel.types";
import {CarouselProvider, Slide, Slider} from "pure-react-carousel";

export const UpdatesCarousel: React.FC<IUpdatesCarouselProps> = ({slides}) => {
  return (
    <CarouselContainer>
      <CarouselTitle>Последние обновления</CarouselTitle>
      <SliderWrapper>
        <CarouselProvider
          naturalSlideWidth={380}
          naturalSlideHeight={480}
          totalSlides={slides.length}
          visibleSlides={3}
          infinite={true}
          playDirection={'forward'}
          isPlaying={true}
        >
          <Slider>
            {
              slides.map((slide, index: number) =>
                <Slide index={index} key={index}>
                  <Card
                    title={slide.title}
                    date={slide.date}
                    description={slide.description}
                    imageUrl={slide.imageUrl}
                    url={slide.url}
                  />
                </Slide>
              )
            }
          </Slider>
        </CarouselProvider>
      </SliderWrapper>
      <PosterLink>
        Вся афиша
        <PosterLinkIcon src={greenArrow}/>
      </PosterLink>
    </CarouselContainer>
  );
}

const Card: React.FC<UpdatesCarouselTypes> = ({title, date, description, imageUrl, url}) => {
  return (
    <CardWrapper>
      <CardImage url={imageUrl}/>
      <PublicationDate>{date}</PublicationDate>
      <PublicationTitle>{title}</PublicationTitle>
      <PublicationDescription>{description}</PublicationDescription>
    </CardWrapper>
  );
}
