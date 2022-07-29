import React, {useState} from "react";
import {BackButton} from "../common/backButton/backButton";
import {CardRow} from "../common/cardRow/cardRow";
import {Title, Wrapper} from "../common/styled";
import {CornersTypes, IFilterOption} from "./corners.types";
import {Card} from "../common/card/card";
import {CornerAddress, CornerDescription, CornerFilter, CornerHeader, CornerTitle, FilterOption, OptionLabel} from "./styled";
import {ReactComponent as AddressIcon} from "../../assets/corners/address-icon.svg";
import { CustomLink } from "../afisha/styled";
import theme from "../../theme";
import {Search} from "../common/search/search";

const data: CornersTypes[] = [
  {
    url:'1',
    image: 'https://sushichefarts.by/upload/iblock/ba7/ba79b531e47dfa1bec62fce7d1817916.jpg',
    name: 'Sushi House',
    address: 'павильон A21',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam convallis placerat iaculis. Donec vitae '
  },
  {
    url:'2',
    image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/donut-1545256064.jpg?crop=1xw:1xh;center,top&resize=480:*',
    name: 'Crazy Donuts',
    address: 'павильон A21',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam convallis placerat iaculis. Donec vitae '
  },
  {
    url:'3',
    image: 'https://i.ytimg.com/vi/yCiYfMD8TpU/maxresdefault.jpg',
    name: 'U Papicha',
    address: 'павильон A21',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam convallis placerat iaculis. Donec vitae '
  },
  {
    url:'4',
    image: 'https://n1s1.hsmedia.ru/35/63/eb/3563ebfbd1d187b4d22bf92126dc9a85/728x494_1_708e275a0b7462e5ac5a688d0d9fd5b0@1920x1302_0xac120003_155459551638713911.jpeg',
    name: 'Winx & Ribs',
    address: 'павильон A21',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam convallis placerat iaculis. Donec vitae '
  },
  {
    url:'5',
    image: 'https://e0.edimdoma.ru/data/recipes/0008/0452/80452-ed4_wide.jpg?1628793992',
    name: 'Winx & Ribs',
    address: 'павильон A21',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam convallis placerat iaculis. Donec vitae '
  },
  {
    url:'6',
    image: 'https://tn.fishki.net/26/upload/post/2020/11/03/3464403/1_27dc82f015500b3bd055adc6fdf51375.jpg',
    name: 'Sushi House',
    address: 'павильон A21',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam convallis placerat iaculis. Donec vitae '
  },
  {
    url:'7',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL3rYZQqHkSJgqrT_OGu-UYyO_jEEooD-mFqFHuIELsYDGvr-s2SlkMyeVAWofwkb4B9k&usqp=CAU',
    name: "Papa John's",
    address: 'павильон A21',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam convallis placerat iaculis. Donec vitae '
  },
  {
    url:'8',
    image: 'https://s.ura.news/1200/images/news/upload/news/475/512/1052475512/2060391cabfcd0709165b36a84442d6c_760x0_450.313.0.0.jpg',
    name: "McDonald's",
    address: 'павильон A21',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam convallis placerat iaculis. Donec vitae '
  },
]

const filterOptions: IFilterOption[] = [
  {
    value: 'all',
    name: 'category',
    title: 'Всё'
  },
  {
    value: 'sushi',
    name: 'category',
    title: 'Суши'
  },
  {
    value: 'burger',
    name: 'category',
    title: 'Бургеры'
  },
  {
    value: 'desert',
    name: 'category',
    title: 'Десерты'
  },
  {
    value: 'pizza',
    name: 'category',
    title: 'Пицца'
  }
]

export const Corners = () => {

  const [activeOption, setActiveOption] = useState('all')

  return (
    <>
      <BackButton title="Назад"/>
      <Wrapper width={980} marginBottom={60}>
        <CornerHeader>
          <Title>
            Корнеры
          </Title>
          <CornerFilter>
            {
              filterOptions.map(option =>
                <OptionLabel key={option.value} isChecked={activeOption === option.value}>
                  <FilterOption
                    checked={activeOption === option.value}
                    type="radio"
                    name={option.name}
                    value={option.value}
                    onClick={()=>setActiveOption(option.value)}
                    onChange={()=>undefined}
                  />
                  {option.title}
                </OptionLabel>
              )
            }
          </CornerFilter>
          <Search placeholder="Поиск"/>
        </CornerHeader>
        <CardRow itemsPerRow={3}>
          {
            data.map((corner) =>
              <CustomLink to={corner.url} key={corner.url}>
                <Card
                  width={300}
                  height={230}
                  imgUrl={corner.image
                  }>
                  <CornerTitle>
                    {corner.name}
                  </CornerTitle>
                  <CornerAddress>
                    <AddressIcon fill={theme.colors.darkMain}/>
                    {corner.address}
                  </CornerAddress>
                  <CornerDescription>
                    {corner.description}
                  </CornerDescription>
                </Card>
              </CustomLink>
            )
          }
        </CardRow>
      </Wrapper>
    </>
  )
}