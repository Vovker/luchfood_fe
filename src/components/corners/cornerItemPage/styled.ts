import styled from "styled-components";

const CornerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  gap: 60px;
`

const TitleWithLogo = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
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

const MenuTitle = styled.div`
  font-size: 22px;
  font-weight: 700;
  line-height: 26px;
  display: flex;
  gap: 17px;
  align-items: center;
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

export {
  TitleWithLogo,
  CornerLogo,
  DeliveryButton,
  CornerWrapper,
  MenuContainer,
  MenuTitle,
  StarsImg,
  MenuFooter
}