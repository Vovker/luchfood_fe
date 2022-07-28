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
  NewsListItemImage,
  NewsListItemWrapper,
  NewsListWrapper
} from './styled'
import React from "react";
import {NewsItemProps, NewsProps} from "./news.types";
import moment from "moment";
import arrow from '../../assets/orange-arrow.svg';
import {CardImg} from "../common/card/styled";

const data: NewsItemProps[] = [
  {
    image: "https://qame.info/wp-content/uploads/2022/01/maxresdefault-1.webp",
    title: 'Ведущий Виталий Цаль проиграл в казино!',
    publicationDate: '08.05.2000',
    description: 'В шоке был даже кот....',
    url: 'google.com'
  },
  {
    image: "https://qame.info/wp-content/uploads/2022/01/maxresdefault-1.webp",
    title: 'Ведущий Виталий Цаль проиграл в казино!',
    publicationDate: '08.05.2000',
    description: 'В шоке был даже кот....',
    url: 'google.com'
  },
  {
    image: "https://qame.info/wp-content/uploads/2022/01/maxresdefault-1.webp",
    title: 'Ведущий Виталий Цаль проиграл в казино!',
    publicationDate: '08.05.2000',
    description: 'В шоке был даже кот....',
    url: 'google.com'
  },
  {
    image: "https://qame.info/wp-content/uploads/2022/01/maxresdefault-1.webp",
    title: 'Ведущий Виталий Цаль проиграл в казино!',
    publicationDate: '08.05.2000',
    description: 'В шоке был даже кот....',
    url: 'google.com'
  },
  {
    image: "https://qame.info/wp-content/uploads/2022/01/maxresdefault-1.webp",
    title: 'Ведущий Виталий Цаль проиграл в казино!',
    publicationDate: '08.05.2000',
    description: 'В шоке был даже кот....',
    url: 'google.com'
  }
]


export const News: React.FC<NewsProps> = ({news}) => {
  return(
    <BlockWrapper backgroundColor={theme.colors.liteBackground}>
      <NewsHeaderWrapper>
        <NewsHeaderTitle>Новости</NewsHeaderTitle>
        <NewsListWrapper>
          {
            data.map((value, index) =>
              <NewsItem
                image={value.image}
                title={value.title}
                publicationDate={value.publicationDate}
                description={value.description}
                url={value.url}
              />
            )
          }
        </NewsListWrapper>
      </NewsHeaderWrapper>
    </BlockWrapper>
  )
}

const NewsItem: React.FC<NewsItemProps> = ({image, title, publicationDate, description, url}) => {
  return (
    <NewsListItemWrapper>
      <NewsListItemContentWrapper>
        <NewsListItemContentHeader>
          <NewsListItemContentHeaderTitle>{title}</NewsListItemContentHeaderTitle>
          <NewsListItemContentHeaderDate>{moment(publicationDate).format()}</NewsListItemContentHeaderDate>
        </NewsListItemContentHeader>
        <NewsListItemContentText>{description}</NewsListItemContentText>
        <NewsListItemContentFooter to={url}>
          Читать новость
          <NewsListItemContentFooterIcon src={arrow}/>
        </NewsListItemContentFooter>
      </NewsListItemContentWrapper>
      <CardImg height='150px' width='230px' image={image}/>
    </NewsListItemWrapper>
  );
}
