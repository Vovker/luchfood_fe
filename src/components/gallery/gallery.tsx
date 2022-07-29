import React from "react";
import {BackButton} from "../common/backButton/backButton";
import {StyledDate, Title, Wrapper} from "../common/styled";
import {CardRow} from "../common/cardRow/cardRow";
import {Card} from "../common/card/card";

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
  return (
    <>
      <BackButton title="Назад"/>
      <Wrapper
        width={980}
        paddingTop={72}
        marginBottom={60}
      >
        <Title marginBottom={40}>
          Галерея
        </Title>
        <CardRow itemsPerRow={3}>
          {
            data.map(post=>
              <Card height={230} width={300} imgUrl={post.image} key={post.image}>
                <StyledDate>
                  {post.date}
                </StyledDate>
              </Card>
            )
          }
        </CardRow>
      </Wrapper>
    </>
  )
}