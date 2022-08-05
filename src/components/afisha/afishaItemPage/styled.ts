import styled from "styled-components";
import {CardImg} from "../../common/card/styled";

const AfishaItemWrapper = styled.div`
  width: 980px;
  padding-top: 72px;
  margin-bottom: 60px;
  max-width: 100%;
  display: flex;
  flex-direction: row;
  gap: 55px;

  @media (max-width: 480px) {
    width: 100%;
    margin-bottom: 40px;
    flex-direction: column;
    gap: 26px;
    padding: 16px 15px 0 15px;
  }
`

const AfishaInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const AfishaInfoDate = styled.div`
  width: fit-content;
  padding: 8px;
  background-color: ${props => props.theme.colors.white};
  font-size: 22px;
  font-weight: 700;
  line-height: 32px;
  @media (max-width: 480px) {
    padding: 6px 14px;
    font-size: 14px;
    line-height: 20px;
  }
`

const AfishaInfoCategory = styled.div`
  font-size: 22px;
  font-weight: 600;
  line-height: 32px;
  @media (max-width: 480px) {
    font-size: 16px;
    line-height: 24px;
  }
`

const AfishaInfoDescription = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 25px;
  
  @media (max-width: 480px) {
    font-size: 14px;
    line-height: 21px;
  }
`

const MobileCategoryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const AfishaItemTitle = styled.div`
  font-size: 40px;
  font-weight: 700;
  line-height: 47px;
  text-align: left;

  @media (max-width: 480px) {
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    margin-bottom: 14px;
    padding: 0 30px;
    word-break: break-word;
  }
`
const AfishaMobileImage = styled.img`
  width: 100%;
`

const AfishaItemImage = styled(CardImg)`
  width: 435px;
  height: 333px;
`

export {
  AfishaInfoDate,
  AfishaInfoCategory,
  AfishaInfoDescription,
  MobileCategoryWrapper,
  AfishaItemWrapper,
  AfishaInfoWrapper,
  AfishaItemTitle,
  AfishaMobileImage,
  AfishaItemImage
}
