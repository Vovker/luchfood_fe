import React from "react";
import {Card} from "../common/card/card";
import {AfishaFooterMobile, AfishaHeader, AfishaLink, AfishaTitle} from "./styled";
import {ReactComponent as OrangeArrow} from '../../assets/orange-arrow.svg'
import {IAfishaItemProps} from "./afisha.types";
import {CardRow} from "../common/cardRow/cardRow";
import {ItemWrapper, StyledDate, Wrapper} from "../common/styled";
import {AfishaCarousel} from "../common/afishaCarousel/afishaCarousel";
import {BackButton} from "../common/backButton/backButton";
import {Search} from "../common/search/search";
import {Title} from "../common/title/title";
import useMediaQuery from "../../hooks/useMatchMedia";


const data: IAfishaItemProps[] = [
  {
    url: '312',
    imageUrl: 'https://thumbs.dreamstime.com/t/%D0%BD%D0%B5%D1%83%D0%BD%D1%8B%D0%B2%D0%B0%D1%8E%D1%89%D0%B0%D1%8F-%D0%BA%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B4%D0%B5%D0%B2%D1%83%D1%88%D0%B5%D0%BA-%D0%B8-%D0%BF%D0%B0%D1%80%D0%BD%D0%B5%D0%B9-%D0%B5%D1%81%D1%82%D1%8C-%D0%B3%D1%80%D0%BE%D0%BC%D0%BA%D0%BE-%D0%B2%D0%B5%D1%81%D0%B5%D0%BB%D0%BE-%D1%81%D0%BC%D0%B5%D0%B5%D1%82%D1%81%D1%8F-%D0%BF%D0%B8%D1%82%D1%8C-186428414.jpg',
    title: 'Vegan Fest - фестиваль вегетарианской кухни',
    date: 'Июль 16, 2022'
  },
  {
    url: '123',
    imageUrl: 'https://cdn.create.vista.com/api/media/medium/254299084/stock-photo-tasty-meat-burger-sesame-wooden?token=',
    title: 'Бургерная вечеринка',
    date: 'Июль 16, 2022'
  },
  {
    url: '1233',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiFbjZWpx6HCENmF7ueirI1Uv1YwRicrP0qg&usqp=CAU',
    title: 'Фестиваль Букетов Цветов Букетов 🌼🌸🌼',
    date: 'Июль 16, 2022'
  },
  {
    url: '12313',
    imageUrl: 'https://cdn.create.vista.com/api/media/medium/254299084/stock-photo-tasty-meat-burger-sesame-wooden?token=',
    title: 'Бургерная вечеринка Лето 2022',
    date: 'Июль 16, 2022'
  },
  {
    url: '12333',
    imageUrl: 'https://tengrinews.kz/userdata/news/2020/news_404073/thumb_m/photo_322748.jpeg',
    title: 'Summer Fest',
    date: 'Июль 16, 2022'
  },
  {
    url: '22222',
    imageUrl: 'https://www.onetwotrip.com/ru/blog/wp-content/uploads/2017/01/festival-in-world.jpg',
    title: 'Фестиваль Букетов Цветов Букетов 🌼🌸🌼',
    date: 'Июль 16, 2022'
  },
]


export const Afisha = () => {

  const isDesktop = useMediaQuery('(min-width: 1073px)')

  return (
    <>
      <BackButton title="Назад"/>
      <Wrapper
        width={980}
        paddingTop={isDesktop ? 72 : 20}
        marginBottom={isDesktop ? 0 : 48}
      >
        <ItemWrapper isDesktop={isDesktop}>
          <AfishaHeader isDesktop={isDesktop}>
            <Title>Афиша</Title>
            <Search placeholder='Найти мероприятие'/>
          </AfishaHeader>
          <CardRow
            itemsPerRow={isDesktop ? 3 : 1}
            itemWidth={isDesktop ? 300 : 345}
            gap={isDesktop? 40 : 30}
          >
            {
              data.map(afisha =>
                <Card
                  width={isDesktop ? 300 : 345}
                  height={isDesktop ? 230 : 265}
                  imgUrl={afisha.imageUrl}
                  key={afisha.url}>
                  {
                    isDesktop
                      ? <>
                        <StyledDate> {afisha.date} </StyledDate>
                        <AfishaTitle> {afisha.title} </AfishaTitle>
                        <AfishaLink to={afisha.url}>
                          Подробнее <OrangeArrow/>
                        </AfishaLink>
                      </>
                      : <>
                        <AfishaTitle> {afisha.title} </AfishaTitle>
                        <AfishaFooterMobile>
                          <StyledDate> {afisha.date} </StyledDate>
                          <AfishaLink to={afisha.url}>
                            Подробнее <OrangeArrow width="27px" height="27px"/>
                          </AfishaLink>
                        </AfishaFooterMobile>
                      </>
                  }
                </Card>
              )
            }
          </CardRow>
          {isDesktop && <AfishaCarousel slides={data}/>}
        </ItemWrapper>
      </Wrapper>
    </>
  )
}

const AfishaCard = () => {

}

