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
  MobileLink, MobileTitle, MobileDescription, StyledButtonBack, StyledButtonNext
} from './styled';
import {ReactComponent as GreenArrow} from '../../../assets/green-arrow.svg';
import React from "react";
import {IUpdatesCarouselProps, UpdatesCarouselTypes} from "./updatesCarousel.types";
import {CarouselProvider, Slide, Slider} from "pure-react-carousel";
import useMediaQuery from "../../../hooks/useMatchMedia";
import {Card} from '../card/card';
import {StyledDate} from '../styled';
import {Title} from "../title/title";
import theme from "../../../theme";
import {ReactComponent as ArrowIcon} from "../../../assets/black-arrow.svg";

export const UpdatesCarousel: React.FC<IUpdatesCarouselProps> = ({slides}) => {

  const isDesktop = useMediaQuery('(min-width: 1073px)')

  return (
    <CarouselContainer isDesktop={isDesktop}>
      <Title
        marginBottom={43}
        align="center"
        color={theme.colors.white}
      >
        Последние обновления
      </Title>
      <SliderWrapper isDesktop={isDesktop}>
        <CarouselProvider
          naturalSlideWidth={isDesktop ? 380 : 346}
          naturalSlideHeight={isDesktop ? 480 : 456}
          totalSlides={slides.length}
          visibleSlides={isDesktop ? 3 : 1}
          infinite={true}
          playDirection={'forward'}
          isPlaying={true}
        >
          <Slider>
            {
              slides.map((slide, index: number) =>
                <Slide index={index} key={index}>
                  {
                    isDesktop
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
          {!isDesktop &&
			  <>
				  <StyledButtonBack>
					  <ArrowIcon
                fill={theme.colors.darkMain}
                style={{transform: "rotate(180deg)"}}
                width='25px'
                height='25px'
            />
				  </StyledButtonBack>
				  <StyledButtonNext>
					  <ArrowIcon
                fill={theme.colors.darkMain}
                width='25px'
                height='25px'
            />
				  </StyledButtonNext>
			  </>
          }
        </CarouselProvider>
      </SliderWrapper>
      {
        isDesktop &&
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
      <Card
        width={346}
        height={265}
        imgUrl={imageUrl}
        key={url}>
        <StyledDate> {date} </StyledDate>
        <MobileTitle> {title} </MobileTitle>
        <MobileDescription>
          {description}
        </MobileDescription>
        <MobileLink to={url}>
          Подробнее <GreenArrow/>
        </MobileLink>
      </Card>
    </MobileCardWrapper>
  )
}


