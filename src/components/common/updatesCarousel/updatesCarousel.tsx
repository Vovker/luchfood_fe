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
  MobileLink,
  MobileTitle,
  MobileDescription,
  StyledButtonBack,
  StyledButtonNext,
  MobileCardImage,
  UpdatesCarouselTitle
} from './styled';
import {ReactComponent as GreenArrow} from '../../../assets/green-arrow.svg';
import React from "react";
import {IUpdatesCarouselProps} from "./updatesCarousel.types";
import {CarouselProvider, Slide, Slider} from "pure-react-carousel";
import {StyledDate} from '../styled';
import theme from "../../../theme";
import {ReactComponent as ArrowIcon} from "../../../assets/black-arrow.svg";
import {isMobile} from "react-device-detect";
import {API_URL} from "../../../store/endpoints";
import moment from "moment";
import {EventTyped} from "../../../store/types/events.types";


const ratio = 0.76589
const padding = 30
const otherContentHeight = 191

const slideWidth = window.innerWidth-padding
const pictureHeight = Math.round(ratio*slideWidth)
const slideHeight = (pictureHeight)+otherContentHeight


export const UpdatesCarousel: React.FC<IUpdatesCarouselProps> = ({slides}) => {

  return (
    <CarouselContainer>
      <UpdatesCarouselTitle>
        Последние обновления
      </UpdatesCarouselTitle>
      <SliderWrapper>
        <CarouselProvider
          naturalSlideWidth={!isMobile ? 380 : slideWidth}
          naturalSlideHeight={!isMobile ? 480 : slideHeight}
          totalSlides={slides.length}
          visibleSlides={!isMobile ? 3 : 1}
          infinite={true}
          playDirection={'forward'}
          isPlaying={false}
        >
          <Slider>
            {
              slides.map((slide, index: number) =>
                <Slide index={index} key={index}>
                  {
                    !isMobile
                      ? <CardDesktop {...slide}/>
                      : <CardMobile {...slide}/>
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
		  <PosterLink to={'/afisha'}>
			  Вся афиша
			  <GreenArrow/>
		  </PosterLink>
      }
    </CarouselContainer>
  );
}

const CardDesktop: React.FC<EventTyped> = ({img, name, description, id, date}) => {
  return (
    <CardWrapper>
      <CardImage url={`${API_URL}/${img}`}/>
      <PublicationDate>{moment(date).locale('ru').format('DD MMMM YYYY')}</PublicationDate>
      <PublicationTitle>{name}</PublicationTitle>
      <PublicationDescription>{description}</PublicationDescription>
    </CardWrapper>
  );
}

const CardMobile: React.FC<EventTyped> = ({img, name, description, id, date}) => {

  return (
    <MobileCardWrapper>
      <MobileCardImage width={slideWidth} height={pictureHeight} image={`${API_URL}/${img}`}/>
      <StyledDate> {moment(date).locale('ru').format('DD MMMM YYYY')} </StyledDate>
      <MobileTitle> {name} </MobileTitle>
      <MobileDescription>
        {description}
      </MobileDescription>
      <MobileLink to={`/afisha/${id}`}>
        Подробнее <GreenArrow/>
      </MobileLink>
    </MobileCardWrapper>
  )
}


