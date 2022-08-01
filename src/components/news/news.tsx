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
import React, {useEffect, useRef, useState} from "react";
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
import {routes} from "../../routes/routes";
import Loader from "../common/loader/loader";
import InfiniteScroll from "react-infinite-scroller";

export const News: React.FC<NewsProps> = () => {

  const ref = useRef(null);

  const [page, setPage] = useState(0);

  const dispatch = useAppDispatch();

  const {news, isLoading, error, isMore} = useAppSelector(state => state.news)

  useEffect(() => {
    dispatch(getNews(5, page));
  }, []);

  function loadMore(){
    if (!isLoading) {
      dispatch(getNews(10, page + 1))
      setPage(prevState => prevState + 1)
    }
  }

  return (
    <>
      <BackButton title="Назад" url={routes.home}/>
      <NewsWrapper>
        <NewsHeaderWrapper>
          <Title>Новости</Title>
          <Search placeholder="Поиск по новостям"/>
        </NewsHeaderWrapper>
        <NewsListWrapper ref={ref}>
          <InfiniteScroll
            data-testid="episodes-infinite-scroll"
            pageStart={0}
            loadMore={loadMore}
            hasMore={isMore}
            loader={<Loader/>}
          >
            {
                news.map((value, index) => {
                    return !isMobile
                      ? <NewsItem
                        key={value.id}
                        image={value.img}
                        title={value.title}
                        publicationDate={value.created_at}
                        description={value.description}
                        id={value.id}
                      />
                      : <NewsItemMobile
                        key={value.id}
                        image={value.img}
                        title={value.title}
                        publicationDate={value.created_at}
                        description={value.description}
                        id={value.id}
                      />
                  }
                )
            }

          </InfiniteScroll>
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
            {moment(publicationDate).locale('ru').format('DD MMMM YYYY')}
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
