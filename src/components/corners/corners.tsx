import React, {useEffect, useState} from "react";
import {BackButton} from "../common/backButton/backButton";
import {
  CornerAddress, CornerCardImage, CornerCardRow,
  CornerCardWrapper,
  CornerDescription,
  CornerFilter,
  CornerHeader,
  CornerHeaderTitle,
  CornerTitle,
  CornerWrapper,
  FilterOption,
  MobileCornerCardImage, MobileCornerItemDescription,
  OptionLabel,
} from "./styled";
import {ReactComponent as AddressIcon} from "../../assets/corners/address-icon.svg";
import {CustomLink} from "../afisha/styled";
import theme from "../../theme";
import {isMobile} from "react-device-detect";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {getKitchenTypes} from "../../store/actions/kitchenTypes.action";
import {useAppSelector} from "../../hooks/useAppSelector";
import {getCorners} from "../../store/actions/corners.action";
import Loader from "../common/loader/loader";
import {CornersTyped} from "../../store/types/corners.types";
import {API_URL} from "../../store/endpoints";
import {KITCHEN_TYPES_SELECT} from "../../store/types/kitchenTypes.types";

export const Corners = () => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getKitchenTypes());
    dispatch(getCorners());
  }, [dispatch]);


  const {kitchenType, selectedKitchenType} = useAppSelector(state => state.kitchenTypes);
  const {corners, isLoading} = useAppSelector(state => state.corners);

  const [activeOption, setActiveOption] = useState(selectedKitchenType);

  useEffect(() => {
    dispatch({type: KITCHEN_TYPES_SELECT, payload: [{id: activeOption}]})
  }, [activeOption]);

  return (
    <>
      <BackButton title="Назад" url="/"/>
      <CornerWrapper>
        <CornerHeader>
          <CornerHeaderTitle>
            Корнеры
          </CornerHeaderTitle>
          <CornerFilter>
            <OptionLabel
              key={0}
              isChecked={activeOption === 0}
            >
              <FilterOption
                checked={activeOption === 0}
                type="radio"
                name={"Все"}
                value={"Все"}
                onClick={() => setActiveOption(0)}
                onChange={() => undefined}
              />
              Все
            </OptionLabel>
            {
              kitchenType.map(option =>
                <OptionLabel
                  key={option.id}
                  isChecked={activeOption === option.id}
                >
                  <FilterOption
                    checked={activeOption === option.id}
                    type="radio"
                    name={option.name}
                    value={option.name}
                    onClick={() => setActiveOption(option.id)}
                    onChange={() => undefined}
                  />
                  {option.name}
                </OptionLabel>
              )
            }
          </CornerFilter>
        </CornerHeader>
        <CornerCardRow>
          {
            !isLoading ?
              (corners.length && kitchenType &&
                corners.filter(corner =>
                  activeOption !== 0 ? corner.kitchenType.id === activeOption : true
                ).map((corner) => {
                    return !isMobile
                      ? <CornerCard key={corner.id} {...corner}/>
                      : <CornerCardMobile key={corner.id} {...corner}/>
                  }
                )
              ) : <Loader/>
          }
        </CornerCardRow>
      </CornerWrapper>
    </>
  )
}

const CornerCard: React.FC<CornersTyped> = ({id, mainImage, name, address, description}) => {
  return (
    <CustomLink to={`/corners/${id}`}>
      <CornerCardWrapper>
        <CornerCardImage image={`${API_URL}/${mainImage}`}/>
        <CornerTitle>
          {name}
        </CornerTitle>
        <CornerAddress>
          <AddressIcon fill={theme.colors.darkMain}/>
          {address}
        </CornerAddress>
        <CornerDescription>
          {description}
        </CornerDescription>
      </CornerCardWrapper>
    </CustomLink>
  )
}

const CornerCardMobile: React.FC<CornersTyped> = ({id, mainImage, name, address, description}) => {
  return (
    <CustomLink to={`/corners/${id}`}>
      <CornerCardWrapper>
        <MobileCornerCardImage src={`${API_URL}/${mainImage}`}/>
        <CornerTitle>
          {name}
        </CornerTitle>
        <CornerAddress>
          <AddressIcon fill={theme.colors.darkMain}/>
          {address}
        </CornerAddress>
        <MobileCornerItemDescription>
          {description}
        </MobileCornerItemDescription>
      </CornerCardWrapper>
    </CustomLink>
  )
}
