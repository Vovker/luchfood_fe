import React from "react";
import {BackButton} from "../../common/backButton/backButton";
import {
  CornerLogo,
  CornerWrapper,
  DeliveryButton,
  MenuTitle,
  MenuContainer,
  CornerItemImage,
  StarsImg,
  MenuFooter,
  ItemRows,
  MenuRow,
  MenuItem,
  ItemChar,
  CharWeight,
  ItemTitle,
  CharPrice,
  CornerItemWrapper,
  CornerInfoDescription, CornerTitleWithLogo, MobileCornerItemImage, CornerInfoWrapper, CornerMenuWrapper,
} from "./styled";
import {ReactComponent as ArrowIcon} from "../../../assets/black-arrow.svg";
import {ReactComponent as MenuIcon} from "../../../assets/corners/menu-icon.svg";
import stars from "../../../assets/corners/stars.svg";
import {CornerMenu} from "./cornerItemPage.types";
import {routes} from "../../../routes/routes";
import {isMobile} from "react-device-detect";

const data: CornerMenu[] = [
  {
    title: 'Peбра Кола-Барбекююююю фывфывфывфыввфывфыв',
    price: 1,
    weight: 200,
  },
  {
    title: 'Peбра Кола-Барбекю',
    price: 2,
    weight: 200,
  },
  {
    title: 'Peбра классические',
    price: 3,
    weight: 1200,
  },
  {
    title: 'Peбра Кола-Барбекю',
    price: 4,
    weight: 200,
  },
  {
    title: 'Peбра классические',
    price: 5,
    weight: 200,
  },
  {
    title: 'Peбра Кола-Барбекююююю фывфывфывфыввфывфыв',
    price: 6,
    weight: 1200,
  },
  {
    title: 'Peбра классические',
    price: 7,
    weight: 200,
  },
  {
    title: 'Peбра Кола-Барбекю',
    price: 8,
    weight: 200,
  },
  {
    title: 'Peбра классические',
    price: 9,
    weight: 200,
  },
  {
    title: 'Peбра Кола-Барбекююююю фывфывфывфыввфывфыв',
    price: 10,
    weight: 200,
  },
  {
    title: 'Peбра Кола-Барбекю',
    price: 11,
    weight: 200
  }

]

function formatDataToView<T>(array: Array<T>) {
  let rows: Array<T[]> = []
  array.forEach((el, index, arr) => {
    if (index % 2 !== 1) {
      arr[index + 1] ? rows.push([el, arr[index + 1]]) : rows.push([el])
    }
  })
  return rows
}

export const CornerItemPage = () => {


  return (
    <>
      <BackButton title="Все корнеры" url={`/${routes.corners}`}/>
      <CornerWrapper>
        <CornerItemWrapper>
          <CornerInfoWrapper>
            <CornerTitleWithLogo>
              <CornerLogo src={"https://brandlogos.net/wp-content/uploads/2021/11/mcdonalds-logo.png"}/>
              Vegan Fest
            </CornerTitleWithLogo>
            {isMobile && <MobileCornerItemImage
				src="https://sushichefarts.by/upload/iblock/ba7/ba79b531e47dfa1bec62fce7d1817916.jpg"/>}
            <CornerInfoDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam convallis placerat iaculis. Donec vitae
              quam cursus, tempor quam non, euismod ipsum. Interdum et malesuada fames ac ante ipsum primis in
              faucibus.
              Nunc viverra mi lacus, id condimentum leo fringilla vitae. Etiam convallis placerat
            </CornerInfoDescription>
            {/*<DeliveryButton>*/}
            {/*  Заказать доставку*/}
            {/*  <ArrowIcon fill={theme.colors.white}/>*/}
            {/*</DeliveryButton>*/}
          </CornerInfoWrapper>
          <div>
            {!isMobile && <CornerItemImage
				image="https://sushichefarts.by/upload/iblock/ba7/ba79b531e47dfa1bec62fce7d1817916.jpg"/>}
          </div>
        </CornerItemWrapper>
        <MenuContainer>
          {!isMobile && <StarsImg src={stars} alt="nothing special here, just stars"/>}
          <CornerMenuWrapper>
            <MenuTitle>
              <MenuIcon/>
              Меню
            </MenuTitle>
            <ItemRows>
              {
                formatDataToView(data).map((itemRow, index) =>
                  <MenuRow key={index}>
                    {
                      itemRow.map((item, idx) =>
                        <MenuItem key={idx}>
                          <ItemTitle>
                            {item.title}
                          </ItemTitle>
                          <ItemChar>
                            <CharWeight>
                              {`${item.weight} гр`}
                            </CharWeight>
                            <CharPrice>
                              {`${item.price} Br`}
                            </CharPrice>
                          </ItemChar>
                        </MenuItem>
                      )
                    }
                  </MenuRow>
                )
              }
            </ItemRows>

            {
              !isMobile &&
				<MenuFooter>
					* Meню представлено для ознакомления, актуальное меню может отличаться
				</MenuFooter>
            }
          </CornerMenuWrapper>
        </MenuContainer>
      </CornerWrapper>
    </>
  )
}
