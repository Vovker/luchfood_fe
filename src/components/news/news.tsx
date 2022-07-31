import {
  MobileNewsListImage,
  MobileNewsListWrapper,
  NewsHeaderWrapper,
  NewsListImage,
  NewsListItemContentInfo,
  NewsListItemContentInfoDate,
  NewsListItemContentInfoTitle,
  NewsListItemContentText,
  NewsListItemLink,
  NewsListItemWrapper,
  NewsListWrapper,
  NewsWrapper
} from './styled'
import React, {useEffect} from "react";
import {NewsItemProps, NewsProps} from "./news.types";
import {ReactComponent as Arrow} from '../../assets/black-arrow.svg';
import {BackButton} from "../common/backButton/backButton";
import theme from "../../theme";
import {Search} from "../common/search/search";
import {Title} from '../common/title/title';
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {getNews} from '../../store/actions/news.action';
import {useAppSelector} from "../../hooks/useAppSelector";
import moment from "moment";
import {API_URL} from "../../store/endpoints";
import {isMobile} from 'react-device-detect';


export const News: React.FC<NewsProps> = () => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getNews(10, 0));
  }, [])

  const {news, isLoading} = useAppSelector(state => state.news)

  return (
    <>
      <BackButton title="Назад"/>
      <NewsWrapper>
          <NewsHeaderWrapper>
            <Title>Новости</Title>
            <Search placeholder="Поиск по новостям"/>
          </NewsHeaderWrapper>
          <NewsListWrapper>
            {
              news.map((value, index) => {
                  return !isMobile
                    ? <NewsItem
                      key={index}
                      image={value.img}
                      title={value.title}
                      publicationDate={value.created_at}
                      description={value.description}
                      id={value.id}
                    />
                    : <NewsItemMobile
                      key={index}
                      image={value.img}
                      title={value.title}
                      publicationDate={value.created_at}
                      description={value.description}
                      id={value.id}
                    />
                }
              )
            }
          </NewsListWrapper>
      </NewsWrapper>
    </>
  )
}

const NewsItem: React.FC<NewsItemProps> = ({image, title, publicationDate, description, id}) => {
  return (
    <NewsListItemWrapper>
      <NewsListItemContentInfo>
        <NewsListItemContentInfoTitle>
          {title}
          <NewsListItemContentInfoDate>
            {moment(publicationDate).locale('ru').format('DD MM YYYY')}
          </NewsListItemContentInfoDate>
        </NewsListItemContentInfoTitle>
        <NewsListItemContentText>
          {description}
        </NewsListItemContentText>
        <NewsListItemLink to={`/news/${id}`}>
          Читать новость
          <Arrow fill={theme.colors.redMain}/>
        </NewsListItemLink>
      </NewsListItemContentInfo>
      <NewsListImage image={`${API_URL}/${image}`}/>
    </NewsListItemWrapper>
  );
}

const NewsItemMobile: React.FC<NewsItemProps> = ({
     image,
     title,
     publicationDate,
     description,
     id
   }) => {
  return (
    <MobileNewsListWrapper>
      <MobileNewsListImage src={`${API_URL}/${image}`}/>
      <NewsListItemContentInfoTitle>
        {title}
      </NewsListItemContentInfoTitle>
      <NewsListItemContentInfoDate>
        {moment(publicationDate).locale('ru').format('DD MMMM YYYY')}
      </NewsListItemContentInfoDate>
      <NewsListItemContentText>
        {description}
      </NewsListItemContentText>
      <NewsListItemLink to={`/news/${id}`}>
        Читать новость
        <Arrow fill={theme.colors.redMain} width="27px" height="27px"/>
      </NewsListItemLink>
    </MobileNewsListWrapper>
  )
}
