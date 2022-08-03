import React, {useEffect} from "react";
import {BackButton} from "../../common/backButton/backButton";
import {
  CornerLogo,
  CornerWrapper,
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
import {ReactComponent as MenuIcon} from "../../../assets/corners/menu-icon.svg";
import stars from "../../../assets/corners/stars.svg";
import {routes} from "../../../routes/routes";
import {isMobile} from "react-device-detect";
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import {getCornerById} from "../../../store/actions/corners.action";
import {useParams} from "react-router-dom";
import {useAppSelector} from "../../../hooks/useAppSelector";
import Loader from "../../common/loader/loader";
import {API_URL} from "../../../store/endpoints";
import {getMenuByCornerId} from "../../../store/actions/menu.action";

export const CornerItemPage = () => {

  const dispatch = useAppDispatch();

  const {cornerId} = useParams();

  useEffect(() => {
    dispatch(getCornerById(Number(cornerId)));
    dispatch(getMenuByCornerId(Number(cornerId)));
  }, [dispatch]);

  const {corner, isLoading} = useAppSelector(state => state.corner);
  const {menu} = useAppSelector(state => state.menu)



  return (
    <>
      <BackButton title="Все корнеры" url={`/${routes.corners}`}/>
      {
        corner && !isLoading && menu ?
          (
            <CornerWrapper>
              <CornerItemWrapper>
                <CornerInfoWrapper>
                  <CornerTitleWithLogo>
                    <CornerLogo src={`${API_URL}/${corner.logo}`}/>
                    {corner.name}
                  </CornerTitleWithLogo>
                  {isMobile && <MobileCornerItemImage src={`${API_URL}/${corner.mainImage}`}/>}
                  <CornerInfoDescription>
                    {corner.description}
                  </CornerInfoDescription>
                  {/*<DeliveryButton>*/}
                  {/*  Заказать доставку*/}
                  {/*  <ArrowIcon fill={theme.colors.white}/>*/}
                  {/*</DeliveryButton>*/}
                </CornerInfoWrapper>
                <div>
                  {!isMobile && <CornerItemImage
                      image={`${API_URL}/${corner.mainImage}`}/>}
                </div>
              </CornerItemWrapper>
              <MenuContainer>
                {!isMobile && <StarsImg src={stars} alt="nothing special here, just stars"/>}
                {
                  menu.map(menuCategory =>
                    <CornerMenuWrapper>
                      <MenuTitle>
                        <MenuIcon/>
                        {menuCategory.name}
                      </MenuTitle>
                      <ItemRows>
                            <MenuRow key={menuCategory.id}>
                              {
                                menuCategory.menu.map((item, idx) =>
                                  <MenuItem key={idx}>
                                    <ItemTitle>
                                      {item.name}
                                    </ItemTitle>
                                    <ItemChar>
                                      <CharWeight>
                                        {`${item.weight} г`}
                                      </CharWeight>
                                      <CharPrice>
                                        {`${item.price/100} BYN`}
                                      </CharPrice>
                                    </ItemChar>
                                  </MenuItem>
                                )
                              }
                            </MenuRow>
                      </ItemRows>
                    </CornerMenuWrapper>
                  )
                }
                {
                  !isMobile &&
                    <MenuFooter>
                        * Meню представлено для ознакомления, актуальное меню может отличаться
                    </MenuFooter>
                }
              </MenuContainer>
            </CornerWrapper>
          ) : <Loader/>
      }
    </>
  )
}
