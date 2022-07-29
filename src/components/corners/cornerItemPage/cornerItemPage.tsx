import React from "react";
import {InfoDescription,} from "../../afisha/afishaItemPage/styled";
import {BackButton} from "../../common/backButton/backButton";
import {CardImg} from "../../common/card/styled";
import {InfoWrapper, ItemPageWrapper, Wrapper} from "../../common/styled";
import {
  CornerLogo,
  CornerWrapper,
  DeliveryButton,
  MenuTitle,
  MenuContainer,
  TitleWithLogo,
  StarsImg,
  MenuFooter,
  ItemRows,
  MenuRow,
  MenuItem,
  ItemChar,
  CharWeight,
  ItemTitle,
  CharPrice,
} from "./styled";
import {ReactComponent as ArrowIcon} from "../../../assets/black-arrow.svg";
import {ReactComponent as MenuIcon} from "../../../assets/corners/menu-icon.svg";
import stars from "../../../assets/corners/stars.svg";
import {CornerMenu} from "./cornerItemPage.types";
import useMediaQuery from "../../../hooks/useMatchMedia";

const data: CornerMenu[] = [
  {
    title: 'Peбра Кола-Барбекююююю фывфывфывфыввфывфыв',
    price: 18,
    weight: 200,
  },
  {
    title: 'Peбра Кола-Барбекю',
    price: 8,
    weight: 200,
  },
  {
    title: 'Peбра классические',
    price: 118,
    weight: 1200,
  },
  {
    title: 'Peбра Кола-Барбекю',
    price: 8,
    weight: 200,
  },
  {
    title: 'Peбра классические',
    price: 18,
    weight: 200,
  },
  {
    title: 'Peбра Кола-Барбекююююю фывфывфывфыввфывфыв',
    price: 8,
    weight: 1200,
  },
  {
    title: 'Peбра классические',
    price: 18,
    weight: 200,
  },
  {
    title: 'Peбра Кола-Барбекю',
    price: 8,
    weight: 200,
  },
  {
    title: 'Peбра классические',
    price: 18,
    weight: 200,
  },
  {
    title: 'Peбра Кола-Барбекююююю фывфывфывфыввфывфыв',
    price: 8,
    weight: 200,
  },
  {
    title: 'Peбра Кола-Барбекю',
    price: 8,
    weight: 200
  }

]


export const CornerItemPage = () => {

  // function formatDataToView<T>(array: Array<T>) {
  //   const itemsPerRow = array.length / 2
  //   let firstRow: Array<T> = []
  //   let secondRow: Array<T> = []
  //   array.forEach((el, index) => index < itemsPerRow ? firstRow.push(el) : secondRow.push(el))
  //   return [firstRow, secondRow]
  // }

  function formatDataToView<T>(array: Array<T>) {
    let rows: Array<T[]> = []
    array.forEach((el, index, arr) => index % 2 ? rows.push([arr[index], arr[index + 1]]) : '')
    return rows
  }

  const isDesktop = useMediaQuery('(min-width: 1073px)')

  return (
    <>
      <BackButton title="Все корнеры"/>
      <CornerWrapper>
        <Wrapper width={isDesktop ? 980 : 345} paddingTop={isDesktop ? 72 : 16}>
          <ItemPageWrapper gap={isDesktop ? 55 : 16} isDesktop={isDesktop}>
            <InfoWrapper gap={28}>
              <TitleWithLogo isDesktop={isDesktop}>
                <CornerLogo src={"https://brandlogos.net/wp-content/uploads/2021/11/mcdonalds-logo.png"}/>
                Vegan Fest
              </TitleWithLogo>
              {!isDesktop && <CardImg width={345} height={265}
									  image="https://sushichefarts.by/upload/iblock/ba7/ba79b531e47dfa1bec62fce7d1817916.jpg"/>}
              <InfoDescription isDesktop={isDesktop}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam convallis placerat iaculis. Donec vitae
                quam cursus, tempor quam non, euismod ipsum. Interdum et malesuada fames ac ante ipsum primis in
                faucibus.
                Nunc viverra mi lacus, id condimentum leo fringilla vitae. Etiam convallis placerat
              </InfoDescription>
              {/*<DeliveryButton>*/}
              {/*  Заказать доставку*/}
              {/*  <ArrowIcon fill={theme.colors.white}/>*/}
              {/*</DeliveryButton>*/}
            </InfoWrapper>
            <div>
              {isDesktop && <CardImg width={433} height={333}
									 image="https://sushichefarts.by/upload/iblock/ba7/ba79b531e47dfa1bec62fce7d1817916.jpg"/>}
            </div>
          </ItemPageWrapper>
        </Wrapper>
        <MenuContainer>
          {isDesktop && <StarsImg src={stars} alt="nothing special here, just stars"/>}
          <Wrapper width={isDesktop ? 980 : 345} paddingTop={isDesktop ? 44 : 27}>
            <MenuTitle>
              <MenuIcon/>
              Меню
            </MenuTitle>
            <ItemRows>
              {
                // formatDataToView(data).map((itemRow, index) =>
                //   <MenuRow key={index}>
                //     {
                //       itemRow.map((item, idx) =>
                //         <MenuItem key={idx} isDesktop={isDesktop}>
                //           {item.title}
                //           <ItemChar isDesktop={isDesktop}>
                //             <CharWeight>
                //               {`${item.weight} гр`}
                //             </CharWeight>
                //             {`${item.price} Br`}
                //           </ItemChar>
                //         </MenuItem>
                //       )
                //     }
                //   </MenuRow>
                // )
                formatDataToView(data).map((itemRow, index) =>
                  <MenuRow key={index} isDesktop={isDesktop}>
                    {
                      itemRow.map((item, idx) =>
                        <MenuItem key={idx} isDesktop={isDesktop}>
                          <ItemTitle isDesktop={isDesktop}>
                            {item.title}
                          </ItemTitle>
                          <ItemChar isDesktop={isDesktop}>
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
            {isDesktop && <MenuFooter>
				* Meню представлено для ознакомления, актуальное меню может отличаться
			</MenuFooter>}
          </Wrapper>
        </MenuContainer>
      </CornerWrapper>
    </>
  )
}
