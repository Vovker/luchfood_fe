import styled from "styled-components";
import {IsDesktop} from "../../common/types/index.types";

const CornerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  gap: 60px;
  height: 100%;
  justify-content: space-between;
  flex: 1 1 auto;
`

const TitleWithLogo = styled.div<IsDesktop>`
  display: flex;
  gap: ${props => props.isDesktop ? '8px' : '11px'};
  align-items: center;
  justify-content: ${props => props.isDesktop ? 'flex-start' : 'center'};
  font-size: 22px;
  font-weight: 700;
  line-height: 26px;
`

const CornerLogo = styled.img`
  width: 47px;
  height: 43px;
`

const DeliveryButton = styled.button`
  padding: 15px 18px;
  color: ${props => props.theme.colors.white};
  border-radius: 0;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: ${props => props.theme.colors.redMain};
  display: flex;
  align-items: center;
  width: fit-content;
  gap: 11px;
  font-family: Jura;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
`

const MenuContainer = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.darkMain};
  display: flex;
  justify-content: center;
  position: relative;
  color: ${props => props.theme.colors.white};
`

const MenuTitle = styled.div<IsDesktop>`
  font-size: ${props => props.isDesktop ? '22px' : '20px'};
  font-weight: 700;
  line-height: ${props => props.isDesktop ? '26px' : '24px'};
  display: flex;
  gap: ${props => props.isDesktop ? '17px' : '11px'};
  align-items: center;
  margin-bottom: 24px;
`

const StarsImg = styled.img`
  position: absolute;
  top: 0;
  right: 0;
`

const MenuFooter = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 25px;
`

const ItemRows = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 52px;
  flex-wrap: wrap;
  gap: 22px;
`

const MenuRow = styled.div<IsDesktop>`
  display: flex;
  flex-direction: ${props => props.isDesktop ? 'row' : 'column'};
  justify-content: space-between;
  gap: ${props => props.isDesktop ? '114px' : '22px'};
`

const MenuItem = styled.div<IsDesktop>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  width: ${props => props.isDesktop ? '433px' : '345px'};
  padding-bottom: ${props => props.isDesktop ? '22px' : '13px'};
  border-bottom: 1px solid ${props => props.theme.colors.white};
  font-size: ${props => props.isDesktop ? '20px' : '16px'};
  font-weight: 700;
  line-height: ${props => props.isDesktop ? '28px' : '22px'};
`

const ItemChar = styled.div<IsDesktop>`
  gap: ${props => props.isDesktop ? '12px' : '8px'};
  display: flex;
  align-items: center;
  font-size: ${props => props.isDesktop ? '18px' : '14px'};
  font-weight: 700;
  line-height: ${props => props.isDesktop ? '25px' : '19px'};
`

const CharWeight = styled.div`
  padding-right: 12px;
  border-right: 1px solid ${props => props.theme.colors.white};
  min-width: 42px;
`

const CharPrice = styled.div`
  min-width: 42px;
`


const ItemTitle = styled.div<IsDesktop>`
  max-width: ${props => props.isDesktop ? '279px' : '217px'};
`

export {
  TitleWithLogo,
  CornerLogo,
  DeliveryButton,
  CornerWrapper,
  MenuContainer,
  MenuTitle,
  StarsImg,
  MenuFooter,
  ItemRows,
  MenuRow,
  MenuItem,
  ItemChar,
  CharWeight,
  ItemTitle,
  CharPrice,
}