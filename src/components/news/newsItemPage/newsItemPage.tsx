import React, {useEffect} from "react";
import {SocialImg, SocialLinks, StyledDate} from "../../common/styled";
import coloredIstagramIcon from "../../../assets/social_icons/instagramColored.svg";
import twitterIcon from "../../../assets/social_icons/twitter.svg";
import {BackButton} from "../../common/backButton/backButton";
import {isMobile} from 'react-device-detect';
import {
  NewsItemImage,
  NewsItemInfoDescription,
  NewsItemInfoWrapper,
  NewsItemMobileImage,
  NewsItemTitle,
  NewsItemWrapper
} from "./styled";
import {routes} from "../../../routes/routes";
import {useParams} from "react-router-dom";
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import {getNewsById} from "../../../store/actions/news.action";
import {useAppSelector} from "../../../hooks/useAppSelector";
import {NewsItemTypes} from "./newsItemPage.types";
import {API_URL} from "../../../store/endpoints";
import moment from "moment";


export const NewsItemPage: React.FC = () => {

  const dispatch = useAppDispatch();
  const {newsId} = useParams();

  useEffect(() => {
    dispatch(getNewsById(Number(newsId)));
  }, [dispatch])

  const {news, isLoading, error} = useAppSelector(state => state.currentNews);

  return (
    <>
      <BackButton title='Все новости' url={`/${routes.news}`}/>
      {
        news && (
          !isMobile
          ? <NewsItem
            id={news.id}
            title={news.title}
            description={news.description}
            body={news.body}
            img={news.img}
            created_at={news.created_at}
          />
          : <NewsItemMobile
            id={news.id}
            title={news.title}
            description={news.description}
            body={news.body}
            img={news.img}
            created_at={news.created_at}
          />
        )
      }
    </>
  )
}

const NewsItem: React.FC<NewsItemTypes> = ({id, description, body, title, img, created_at}) => {
  return (
    <NewsItemWrapper key={id}>
      <NewsItemInfoWrapper>
        <NewsItemTitle>
          {title}
        </NewsItemTitle>
        <StyledDate>
          {moment(created_at).locale('ru').format('DD MMMM YYYY')}
        </StyledDate>
        <NewsItemInfoDescription>
          {body}
        </NewsItemInfoDescription>
      </NewsItemInfoWrapper>
      <div>
        <NewsItemImage image={`${API_URL}/${img}`}/>
        <SocialLinks>
          Поделиться:
          <SocialImg src={coloredIstagramIcon}/>
          <SocialImg src={twitterIcon}/>
        </SocialLinks>
      </div>
    </NewsItemWrapper>
  )
}

const NewsItemMobile: React.FC<NewsItemTypes> = ({id, description, body, title, img, created_at}) => {
  return (
    <NewsItemWrapper key={id}>
      <NewsItemInfoWrapper>
        <NewsItemTitle>
          {title}
        </NewsItemTitle>
        <NewsItemMobileImage src={`${API_URL}/${img}`}/>
        <StyledDate>
          {moment(created_at).locale('ru').format('DD MMMM YYYY')}
        </StyledDate>
        <NewsItemInfoDescription>
          {body}
        </NewsItemInfoDescription>
      </NewsItemInfoWrapper>
      <SocialLinks>
        Поделиться:
        <SocialImg src={coloredIstagramIcon}/>
        <SocialImg src={twitterIcon}/>
      </SocialLinks>
    </NewsItemWrapper>
  )
}
