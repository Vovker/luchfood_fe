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
import {ItemWrapper, Wrapper} from "../common/styled";
import theme from "../../theme";
import {Search} from "../common/search/search";
import {Title} from '../common/title/title';
import useMediaQuery from "../../hooks/useMatchMedia";
import {Card} from "../common/card/card";
import {IsDesktop} from "../common/types/index.types";

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

  const isDesktop = useMediaQuery('(min-width: 1073px)')

  return (
    <>
      <BackButton title="Назад"/>
      <Wrapper width={980}
               paddingTop={isDesktop? 72 : 20}
               marginBottom={isDesktop? 60 : 36}>
        <ItemWrapper isDesktop={isDesktop}>
          <NewsHeaderWrapper isDesktop={isDesktop}>
            <Title>Новости</Title>
            <Search placeholder="Поиск по новостям"/>
          </NewsHeaderWrapper>
          <NewsListWrapper isDesktop={isDesktop}>
            {
              data.map((value, index) =>
                {
                  return isDesktop
                    ? <NewsItem
                      key={index}
                      image={value.image}
                      title={value.title}
                      publicationDate={value.publicationDate}
                      description={value.description}
                      url={value.url}
                    />
                    : <NewsItemMobile
                      key={index}
                      image={value.image}
                      title={value.title}
                      publicationDate={value.publicationDate}
                      description={value.description}
                      url={value.url}
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
      <CardImg height={150} width={230} image={image}/>
    </NewsListItemWrapper>
  );
}

const NewsItemMobile: React.FC<NewsItemProps> = ({
                                                   image,
                                                   title,
                                                   publicationDate,
                                                   description,
                                                   url
                                                 }) => {
  return (
    <Card
      width={345}
      height={225}
      imgUrl={image}
    >
      <NewsListItemContentInfoTitle>
        {title}
      </NewsListItemContentInfoTitle>
      <NewsListItemContentInfoDate>
        {publicationDate}
      </NewsListItemContentInfoDate>
      <NewsListItemContentText isMobile={true}>
        {description}
      </NewsListItemContentText>
      <NewsListItemLink to={url}>
        Читать новость
        <Arrow fill={theme.colors.redMain} width="27px" height="27px"/>
      </NewsListItemLink>
    </Card>
  )
}