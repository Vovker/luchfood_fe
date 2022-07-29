import React from "react";
import {BackButton} from "../common/backButton/backButton";
import {ItemWrapper, StyledDate, Wrapper} from "../common/styled";
import {CardRow} from "../common/cardRow/cardRow";
import {Card} from "../common/card/card";
import useMediaQuery from "../../hooks/useMatchMedia";
import { Title } from "../common/title/title";

interface GalleryTypes {
  image: string,
  date: string
}

const data: GalleryTypes[] = [
  {
    image: 'https://games-walker.com/wp-content/uploads/2020/10/Fotkayushchiy-Papich.jpg',
    date: 'Июль 16, 2022'
  },
  {
    image: 'https://pikuco.ru/upload/test_stable/a1c/a1cbcaee3000f73003dfdb4314f5b18c.jpg',
    date: 'Июль 16, 2022'
  },
  {
    image: 'https://2ch.hk/fag/arch/2016-07-17/thumb/2282278/14646468054241s.jpg',
    date: 'Июль 16, 2022'
  },
  {
    image: 'https://sun9-40.userapi.com/impg/QDmlF1WM2KwgmoH1P58Vgy38JGQFZu7exzrMAQ/BiWuiX3Ex_Y.jpg?size=604x350&quality=96&sign=81a6c05ddfe63b44b6e30011b99c0327&type=album',
    date: 'Июль 16, 2022'
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSinCqWC6L4AQYECDvP-mI0YrLJvROXHzsmbA&usqp=CAU',
    date: 'Июль 16, 2022'
  },
  {
    image: 'https://static8.depositphotos.com/1004529/988/i/450/depositphotos_9887128-stock-photo-sharpei-dog.jpg',
    date: 'Июль 16, 2022'
  },
  {
    image: 'https://i.imgur.com/e6dCVDw.jpeg',
    date: 'Июль 16, 2022'
  },
]



export const Gallery = () => {

  const isDesktop = useMediaQuery('(min-width: 1073px)')

  return (
    <>
      <BackButton title="Назад"/>
      <Wrapper
        width={980}
        paddingTop={isDesktop ? 72 : 16}
        marginBottom={isDesktop ? 60 : 40}
      >
        <ItemWrapper isDesktop={isDesktop}>
          <Title marginBottom={isDesktop ? 40 : 19}>
            Галерея
          </Title>
          <CardRow
            itemsPerRow={isDesktop? 3 : 1}
            gap={isDesktop? 40 : 20}
            itemWidth={isDesktop ? 300 : 345}
          >
            {
              data.map(post=>
                <Card
                  width={isDesktop ? 300 : 345}
                  height={isDesktop ? 230 : 264}
                  imgUrl={post.image}
                  key={post.image}
                >
                  <StyledDate>
                    {post.date}
                  </StyledDate>
                </Card>
              )
            }
          </CardRow>
        </ItemWrapper>
      </Wrapper>
    </>
  )
}