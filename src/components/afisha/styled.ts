import styled from "styled-components";
import {Link} from "react-router-dom";
import {CardImg} from "../common/card/styled";


const AfishaWrapper = styled.div`
  width: 980px;
  padding-top: 72px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 480px) {
    padding-top: 20px;
    margin-bottom: 48px;
    align-items: center;
  }
`

const AfishaHeader = styled.div`
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media (max-width: 480px) {
    margin-bottom: 20px;
    width: fit-content;
  }
`

const AfishaHeaderTitle = styled.div`
  font-size: 40px;
  font-weight: 700;
  line-height: 47px;
  text-align: left;

  @media (max-width: 480px) {
    font-size: 20px;
    line-height: 24px;
    text-align: center;
  }
`

const AfishaCardRow = styled.div`
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 980px;
  
  @media (max-width: 480px) {  
    gap: 30px;
    width: 345px;
  }
`


const AfishaTitle = styled.h4`
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
`

const AfishaFooterMobile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const AfishaLink = styled(Link)`
  text-decoration: none;
  gap: 11px;
  line-height: 21px;
  font-size: 18px;
  font-weight: 700;
  color: ${props => props.theme.colors.redMain};
  display: flex;
  align-items: center;
  @media (max-width: 480px) {
    gap: 15px;
    line-height: 18px;
    font-size: 16px;
  }
`

const CustomLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

const AfishaCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 300px;
  @media (max-width: 480px) {
    padding: 0 15px;
    width: 100%;
  }
`

const AfishaCardImage = styled(CardImg)`
  width: 300px;
  height: 230px;
`

const MobileAfishaCardImage = styled.img`
  width: 100%;
`

export {
  AfishaWrapper,
  AfishaHeader,
  AfishaTitle,
  AfishaLink,
  CustomLink,
  AfishaFooterMobile,
  AfishaCardWrapper,
  AfishaCardImage,
  MobileAfishaCardImage,
  AfishaCardRow,
  AfishaHeaderTitle,
}