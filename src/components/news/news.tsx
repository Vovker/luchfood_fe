import {BlockWrapper} from "../common/pageWrappers/blockWrapper/styled";
import theme from "../../theme";
import {
  NewsHeaderTitle,
  NewsHeaderWrapper,
  NewsListItemContentFooter,
  NewsListItemContentFooterIcon,
  NewsListItemContentInfo,
  NewsListItemContentInfoDate,
  NewsListItemContentInfoTitle,
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
    title: 'Vegan Fest',
    publicationDate: 'Июль 16, 2022',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam convallis placerat iaculis. Donec vitae quam cursus, tempor quam non, euismod ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus...',
    url: ''
  },
  {
    image: "https://qame.info/wp-content/uploads/2022/01/maxresdefault-1.webp",
    title: 'В шоке был даже кот....',
    publicationDate: '08.05.2000',
    description: 'Ведущий Виталий Цаль проиграл в казино!',
    url: 'google.com'
  },
  {
    image: "https://qame.info/wp-content/uploads/2022/01/maxresdefault-1.webp",
    title: 'В шоке был даже кот....',
    publicationDate: '08.05.2000',
    description: 'Ведущий Виталий Цаль проиграл в казино!',
    url: 'google.com'
  },
  {
    image: "https://qame.info/wp-content/uploads/2022/01/maxresdefault-1.webp",
    title: 'В шоке был даже кот....',
    publicationDate: '08.05.2000',
    description: 'Ведущий Виталий Цаль проиграл в казино!',
    url: 'google.com'
  },
  {
    image: "https://qame.info/wp-content/uploads/2022/01/maxresdefault-1.webp",
    title: 'В шоке был даже кот....',
    publicationDate: '08.05.2000',
    description: 'Ведущий Виталий Цаль проиграл в казино!',
    url: 'google.com'
  },
  {
    image: "https://qame.info/wp-content/uploads/2022/01/maxresdefault-1.webp",
    title: 'В шоке был даже кот....',
    publicationDate: '08.05.2000',
    description: 'Ведущий Виталий Цаль проиграл в казино!',
    url: 'google.com'
  },
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
        <NewsListItemContentInfo>
          <NewsListItemContentInfoTitle>
            {title}
            <NewsListItemContentInfoDate>
              {moment(publicationDate).format()}
            </NewsListItemContentInfoDate>
          </NewsListItemContentInfoTitle>
          <NewsListItemContentText>
            {description}
          </NewsListItemContentText>
        </NewsListItemContentInfo>

      </NewsListItemContentWrapper>
      <CardImg height='150px' width='230px' image={image}/>
    </NewsListItemWrapper>
  );
}
