import styled from "styled-components";
import {Link} from "react-router-dom";

const NewsHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`;


const NewsListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const NewsListItemWrapper = styled.div`
  display: flex;
  height: 150px;
  justify-content: space-between;
  gap: 60px;
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
`;



export {
  NewsHeaderWrapper,
  NewsListWrapper,
  NewsListItemWrapper,
  NewsListItemLink,
  NewsListItemContentInfo,
  NewsListItemContentInfoTitle,
  NewsListItemContentInfoDate,
  NewsListItemContentText
}
