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
import React from "react";
import {NewsItemProps, NewsProps} from "./news.types";
import {ReactComponent as Arrow} from '../../assets/black-arrow.svg';
import {CardImg} from "../common/card/styled";
import {BackButton} from "../common/backButton/backButton";
import {Title, Wrapper} from "../common/styled";
import theme from "../../theme";
import {Search} from "../common/search/search";

const data: NewsItemProps[] = [
  {
    image: "https://qame.info/wp-content/uploads/2022/01/maxresdefault-1.webp",
    title: 'Vegan Fest',
    publicationDate: 'Июль 16, 2022',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam convallis placerat iaculis. Donec vitae quam cursus, tempor quam non, euismod ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus...',
    url: '1'
  },
  {
    image: "https://qame.info/wp-content/uploads/2022/01/maxresdefault-1.webp",
    title: 'В шоке был даже кот....',
    publicationDate: '08.05.2000',
    description: 'Ведущий Виталий Цаль проиграл в казино!',
    url: '2'
  },
  {
    image: "https://qame.info/wp-content/uploads/2022/01/maxresdefault-1.webp",
    title: 'В шоке был даже кот....',
    publicationDate: '08.05.2000',
    description: 'Ведущий Виталий Цаль проиграл в казино!',
    url: '3'
  },
  {
    image: "https://qame.info/wp-content/uploads/2022/01/maxresdefault-1.webp",
    title: 'В шоке был даже кот....',
    publicationDate: '08.05.2000',
    description: 'Ведущий Виталий Цаль проиграл в казино!',
    url: '4'
  },
  {
    image: "https://qame.info/wp-content/uploads/2022/01/maxresdefault-1.webp",
    title: 'В шоке был даже кот....',
    publicationDate: '08.05.2000',
    description: 'Ведущий Виталий Цаль проиграл в казино!',
    url: '5'
  },
  {
    image: "https://qame.info/wp-content/uploads/2022/01/maxresdefault-1.webp",
    title: 'В шоке был даже кот....',
    publicationDate: '08.05.2000',
    description: 'Ведущий Виталий Цаль проиграл в казино!',
    url: '6'
  },
]


export const News: React.FC<NewsProps> = ({news}) => {
  return (
    <>
      <BackButton title="Назад"/>
      <Wrapper width={980} paddingTop={72} marginBottom={60}>
        <NewsHeaderWrapper>
          <Title>Новости</Title>
          <Search placeholder="Поиск по новостям"/>
        </NewsHeaderWrapper>
        <NewsListWrapper>
          {
            data.map((value, index) =>
              <NewsItem
                key={index}
                image={value.image}
                title={value.title}
                publicationDate={value.publicationDate}
                description={value.description}
                url={value.url}
              />
            )
          }
        </NewsListWrapper>
      </Wrapper>
    </>
  )
}

const NewsItem: React.FC<NewsItemProps> = ({image, title, publicationDate, description, url}) => {
  return (
    <NewsListItemWrapper>
      <NewsListItemContentInfo>
        <NewsListItemContentInfoTitle>
          {title}
          <NewsListItemContentInfoDate>
            {publicationDate}
          </NewsListItemContentInfoDate>
        </NewsListItemContentInfoTitle>
        <NewsListItemContentText>
          {description}
        </NewsListItemContentText>
        <NewsListItemLink to={url}>
          Читать новость
          <Arrow fill={theme.colors.redMain}/>
        </NewsListItemLink>
      </NewsListItemContentInfo>
      <CardImg height='150px' width='230px' image={image}/>
    </NewsListItemWrapper>
  );
}
