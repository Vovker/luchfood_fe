import styled from "styled-components";
import {Link} from "react-router-dom";
import {CardImg} from "../common/card/styled";


const NewsWrapper = styled.div`
  width: 980px;
  padding-top: 72px;
  margin-bottom: 60px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 480px) {
    padding-top: 20px;
    margin-bottom: 36px;
    align-items: center;
  }
`

const NewsTitle = styled.div`
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

const NewsHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
  width: 100%;

  @media (max-width: 480px) {
    justify-content: center;
    margin-bottom: 20px;
  }
`;


const NewsListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const NewsListItemWrapper = styled.div`
  display: flex;
  height: 150px;
  justify-content: space-between;
  gap: 60px;
  margin-bottom: 40px;

  @media (max-width: 480px) {
    margin-bottom: 30px;
  }
`;


const NewsListItemContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
`;

const NewsListItemContentInfoTitle = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: ${props => props.theme.colors.darkMain};
  display: flex;
  align-items: center;
  gap: 12px;
`;

const NewsListItemContentInfoDate = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 20.62px;
`;

const NewsListItemContentText = styled.div`
  height: 75px;
  width: 690px;
  font-size: 18px;
  font-weight: 700;
  line-height: 25px;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 480px) {
    height: 42px;
    width: 345px;
    font-size: 14px;
    line-height: 21px;
  }
`;

const NewsListItemLink = styled(Link)`
  text-decoration: none;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: ${props => props.theme.colors.redMain};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 11px;

  @media (max-width: 480px) {
    font-size: 16px;
    line-height: 19px;
    gap: 15px;
  }
`;

const MobileNewsListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  
  @media (max-width: 480px) {
    padding: 0 15px;
  }
`

const NewsListImage = styled(CardImg)`
  width: 230px;
  height: 150px;

  @media (max-width: 480px) {
    width: 345px;
    height: 225px;
  }
`

const MobileNewsListImage = styled.img`
  width: 100%;
`

export {
  NewsWrapper,
  NewsHeaderWrapper,
  NewsListWrapper,
  NewsListItemWrapper,
  NewsListItemLink,
  NewsListItemContentInfo,
  NewsListItemContentInfoTitle,
  NewsListItemContentInfoDate,
  NewsListItemContentText,
  MobileNewsListWrapper,
  NewsListImage,
  MobileNewsListImage,
  NewsTitle
}
