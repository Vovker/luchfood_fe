import {
  NewsHeaderWrapper,
  NewsListItemContentInfo,
  NewsListItemContentInfoDate,
  NewsListItemContentInfoTitle,
  NewsListItemContentText,
  NewsListItemLink,
  NewsListItemWrapper,
  NewsListWrapper
} from './styled'
import React, {useEffect} from "react";
import {NewsItemProps, NewsProps} from "./news.types";
import {ReactComponent as Arrow} from '../../assets/black-arrow.svg';
import {CardImg} from "../common/card/styled";
import {BackButton} from "../common/backButton/backButton";
import {ItemWrapper, Wrapper} from "../common/styled";
import theme from "../../theme";
import {Search} from "../common/search/search";
import {Title} from '../common/title/title';
import useMediaQuery from "../../hooks/useMatchMedia";
import {Card} from "../common/card/card";
import {IsDesktop} from "../common/types/index.types";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {getNews} from '../../store/actions/news.action';
import {useAppSelector} from "../../hooks/useAppSelector";
import moment from "moment";
import {API_URL} from "../../store/endpoints";


export const News: React.FC<NewsProps> = () => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getNews(10, 0));
  }, [])

  const {news, isLoading} = useAppSelector(state => state.news)

  const isDesktop = useMediaQuery('(min-width: 1073px)')

  return (
    <>
      <BackButton title="Назад"/>
      <Wrapper width={980}
               paddingTop={isDesktop ? 72 : 20}
               marginBottom={isDesktop ? 60 : 36}>
        <ItemWrapper isDesktop={isDesktop}>
          <NewsHeaderWrapper isDesktop={isDesktop}>
            <Title>Новости</Title>
            <Search placeholder="Поиск по новостям"/>
          </NewsHeaderWrapper>
          <NewsListWrapper isDesktop={isDesktop}>
            {
              news.map((value, index) => {
                  return isDesktop
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
        </ItemWrapper>
      </Wrapper>
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
      <CardImg height={150} width={230} image={`${API_URL}/${image}`}/>
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
    <Card
      width={345}
      height={225}
      imgUrl={`${API_URL}/${image}`}
    >
      <NewsListItemContentInfoTitle>
        {title}
      </NewsListItemContentInfoTitle>
      <NewsListItemContentInfoDate>
        {moment(publicationDate).locale('ru').format('DD MMMM YYYY')}
      </NewsListItemContentInfoDate>
      <NewsListItemContentText isMobile={true}>
        {description}
      </NewsListItemContentText>
      <NewsListItemLink to={`/news/${id}`}>
        Читать новость
        <Arrow fill={theme.colors.redMain} width="27px" height="27px"/>
      </NewsListItemLink>
    </Card>
  )
}
