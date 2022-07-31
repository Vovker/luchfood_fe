import styled from "styled-components";
import {CardImg} from "../../common/card/styled";

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

const CornerItemWrapper = styled.div`
  width: 980px;
  padding-top: 72px;
  margin-bottom: 60px;
  max-width: 100%;
  display: flex;
  flex-direction: row;
  gap: 55px;

  @media (max-width: 480px) {
    width: 345px;
    margin-bottom: 40px;
    flex-direction: column;
    gap: 16px;
    padding: 16px 15px 0 15px;
  }
`

const CornerInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`

const CornerTitleWithLogo = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: flex-start;
  font-size: 22px;
  font-weight: 700;
  line-height: 26px;
  
  @media (max-width: 480px) {
    gap: 11px;
    justify-content: center;

  }
`

const CornerLogo = styled.img`
  width: 47px;
  height: 43px;
`

const CornerItemImage = styled(CardImg)`
  width: 435px;
  height: 333px;
`

const MobileCornerItemImage = styled.img`
  width: 100%;
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

const CornerInfoDescription = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 25px;
  
  @media (max-width: 480px) {
    font-size: 14px;
    line-height: 21px;
  }
`

const MenuContainer = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.darkMain};
  display: flex;
  justify-content: center;
  position: relative;
  color: ${props => props.theme.colors.white};
`

const MenuTitle = styled.div`
  font-size: 22px;
  font-weight: 700;
  line-height: 26px;
  display: flex;
  gap: 17px;
  align-items: center;
  margin-bottom: 24px;
  
  @media(max-width: 480px){
    font-size: 20px;
    line-height: 24px;
    gap: 11px;
  }
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

const MenuRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 114px;

  @media(max-width: 480px){
    flex-direction: column;
    gap: 22px;
  }
`

const MenuItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  width: 433px;
  padding-bottom: 22px;
  border-bottom: 1px solid ${props => props.theme.colors.white};
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  
  @media(max-width: 480px){
    width: 345px;
    padding-bottom: 13px;
    font-size: 16px;
    line-height: 22px;
  }
`

const ItemChar = styled.div`
  gap: 12px;
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
  line-height: 25px;
  
  @media(max-width: 480px){
    gap: 8px;
    font-size: 14px;
    line-height: 19px;
  }
`

const CharWeight = styled.div`
  padding-right: 12px;
  border-right: 1px solid ${props => props.theme.colors.white};
  min-width: 42px;
`

const CharPrice = styled.div`
  min-width: 42px;
`


const ItemTitle = styled.div`
  max-width: 279px;
  
  @media(max-width: 480px){
    max-width: 217px;
  }
`
const CornerMenuWrapper = styled.div`
  width: 980px;
  padding-top: 44px;
  max-width: 100%;
  
  @media(max-width: 480px) {
    width: 345px;
    padding-top: 27px;
  }
`

export {
  CornerTitleWithLogo,
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
  CornerItemWrapper,
  CornerInfoDescription,
  CornerItemImage,
  MobileCornerItemImage,
  CornerInfoWrapper,
  CornerMenuWrapper
}