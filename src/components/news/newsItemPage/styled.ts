import styled from "styled-components";
import {CardImg} from "../../common/card/styled";

const NewsItemWrapper = styled.div`
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

const NewsItemInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (max-width: 480px) {
    gap: 6px;
  }
`

const NewsItemTitle = styled.div`
  font-size: 40px;
  font-weight: 700;
  line-height: 47px;
  text-align: left;

  @media (max-width: 480px) {
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    margin-bottom: 20px;
    padding: 0 30px;
    word-break: break-word;
  }
`

const NewsItemImage = styled(CardImg)`
  width: 435px;
  height: 333px;
  
`

const NewsItemMobileImage = styled.img`
  width: 100%;
`

const NewsItemInfoDescription = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 25px;
  white-space: pre-wrap;
  
  @media (max-width: 480px) {
    font-size: 14px;
    line-height: 21px;
  }
`

export {
  NewsItemWrapper,
  NewsItemInfoWrapper,
  NewsItemTitle,
  NewsItemImage,
  NewsItemMobileImage,
  NewsItemInfoDescription
}
