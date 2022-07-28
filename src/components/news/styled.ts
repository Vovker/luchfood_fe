import styled from "styled-components";
import {NewsItemTypes} from "./news.types";
import {Link} from "react-router-dom";

const NewsHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const NewsHeaderTitle = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 47px;
  color: ${props => props.theme.colors.darkMain};
`;

const NewsListWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 40px;
`;

const NewsListItemWrapper = styled.div`
  display: flex;
  height: 150px;
  
`;

const NewsListItemImage = styled.div<NewsItemTypes>`
  width: 230px;
  height: 150px;
  background-image: url(${props => props.image});
`;

const NewsListItemContentWrapper = styled.div`
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
`;

const NewsListItemContentInfoDate = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 150%;
  color: ${props => props.theme.colors.darkMain};
`;

const NewsListItemContentText = styled.div`
  height: 75px;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 140%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 12px;
`;

const NewsListItemContentFooter = styled(Link)`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: ${props => props.theme.colors.redMain};
`;

const NewsListItemContentFooterIcon = styled.img`
  margin-left: 11px;
  width: 20px;
`;


export {
  NewsHeaderWrapper,
  NewsHeaderTitle,
  NewsListWrapper,
  NewsListItemWrapper,
  NewsListItemImage,
  NewsListItemContentFooter,
  NewsListItemContentFooterIcon,
  NewsListItemContentWrapper,
  NewsListItemContentInfo,
  NewsListItemContentInfoTitle,
  NewsListItemContentInfoDate,
  NewsListItemContentText
}
