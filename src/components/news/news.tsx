import {BlockWrapper} from "../common/pageWrappers/blockWrapper/styled";
import theme from "../../theme";
import {
  NewsHeaderTitle,
  NewsHeaderWrapper,
  NewsListItemContentFooter,
  NewsListItemContentFooterIcon,
  NewsListItemContentHeader,
  NewsListItemContentHeaderDate,
  NewsListItemContentHeaderTitle,
  NewsListItemContentText,
  NewsListItemContentWrapper,
  NewsListItemWrapper,
  NewsListWrapper
} from './styled'
import React, {useEffect} from "react";
import {NewsItemProps} from "./news.types";
import moment from "moment";
import arrow from '../../assets/orange-arrow.svg';
import {CardImg} from "../common/card/styled";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {getNews} from "../../store/actions/news.action";
import {useAppSelector} from "../../hooks/useAppSelector";
import {API_URL} from "../../store/endpoints";

export const News = () => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getNews(10,0));
  }, [])

  const {news, isLoading} = useAppSelector(state => state.news)

  return(
    <BlockWrapper backgroundColor={theme.colors.liteBackground}>
      <NewsHeaderWrapper>
        <NewsHeaderTitle>Новости</NewsHeaderTitle>
        <NewsListWrapper>
          {
            news.map((value, index) =>
              <NewsItem
                key={index}
                image={`${API_URL}/${value.img}`}
                title={value.title}
                publicationDate={value.created_at}
                description={value.description}
                id={value.id}
              />
            )
          }
        </NewsListWrapper>
      </NewsHeaderWrapper>
    </BlockWrapper>
  )
}

const NewsItem: React.FC<NewsItemProps> = ({image, title, publicationDate, description, id}) => {
  return (
    <NewsListItemWrapper>
      <NewsListItemContentWrapper>
        <NewsListItemContentHeader>
          <NewsListItemContentHeaderTitle>{title}</NewsListItemContentHeaderTitle>
          <NewsListItemContentHeaderDate>{moment(publicationDate).locale('ru').format('DD MMMM YYYY')}</NewsListItemContentHeaderDate>
        </NewsListItemContentHeader>
        <NewsListItemContentText>{description}</NewsListItemContentText>
        <NewsListItemContentFooter to={`/news/${id}`}>
          Читать новость
          <NewsListItemContentFooterIcon src={arrow}/>
        </NewsListItemContentFooter>
      </NewsListItemContentWrapper>
      <CardImg height='150px' width='230px' image={image}/>
    </NewsListItemWrapper>
  );
}
