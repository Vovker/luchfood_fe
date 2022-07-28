import React from "react";
import {InfoDescription,} from "../../afisha/afishaItemPage/styled";
import {BackButton} from "../../common/backButton/backButton";
import {CardImg} from "../../common/card/styled";
import {InfoWrapper, ItemPageWrapper, Wrapper} from "../../common/styled";
import {CornerLogo, CornerWrapper, DeliveryButton, MenuTitle, MenuContainer, TitleWithLogo, StarsImg, MenuFooter} from "./styled";
import {ReactComponent as ArrowIcon} from "../../../assets/black-arrow.svg";
import {ReactComponent as MenuIcon} from "../../../assets/corners/menu-icon.svg";
import stars from "../../../assets/corners/stars.svg";

export const CornerItemPage = () => {
  return (
    <>
      <BackButton title="Все корнеры"/>
      <CornerWrapper>
        <Wrapper width={980} paddingTop={72}>
          <ItemPageWrapper gap={56}>
            <InfoWrapper gap={28}>
              <TitleWithLogo>
                <CornerLogo src={"https://brandlogos.net/wp-content/uploads/2021/11/mcdonalds-logo.png"}/>
                Vegan Fest- фестиваль вегетарианской кухни
              </TitleWithLogo>
              <InfoDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam convallis placerat iaculis. Donec vitae
                quam cursus, tempor quam non, euismod ipsum. Interdum et malesuada fames ac ante ipsum primis in
                faucibus.
                Nunc viverra mi lacus, id condimentum leo fringilla vitae. Etiam convallis placerat
              </InfoDescription>
              {/*<DeliveryButton>*/}
              {/*  Заказать доставку*/}
              {/*  <ArrowIcon fill="white"/>*/}
              {/*</DeliveryButton>*/}
            </InfoWrapper>
            <div>
              <CardImg width="433px" height="333px"
                       image="https://sushichefarts.by/upload/iblock/ba7/ba79b531e47dfa1bec62fce7d1817916.jpg"/>
            </div>
          </ItemPageWrapper>
        </Wrapper>
        <MenuContainer>
          <StarsImg src={stars} alt="nothing special here, just stars"/>
          <Wrapper width={980} paddingTop={44}>
            <MenuTitle>
              <MenuIcon/>
              Меню
            </MenuTitle>
            <></>
            <MenuFooter>
              * Meню представлено для ознакомления, актуальное меню может отличаться
            </MenuFooter>
          </Wrapper>
        </MenuContainer>
      </CornerWrapper>
    </>
  )
}