import styled from "styled-components";
import {Link} from "react-router-dom";
import {IsDesktop} from "../common/types/index.types";

const NewsHeaderWrapper = styled.div<IsDesktop>`
  display: flex;
  align-items: center;
  justify-content: ${props => props.isDesktop ? 'space-between' : 'center'};
  margin-bottom: ${props => props.isDesktop ? '40px' : '20px'};
  width: 100%;
`;


const NewsListWrapper = styled.div<IsDesktop>`
  display: flex;
  flex-direction: column;
  gap: ${props => props.isDesktop ? '40px' : '30px'};
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

const NewsListItemContentText = styled.div<IsDesktop>`
  height: ${props => props.isMobile ? '42px' : '75px'};
  width: ${props => props.isMobile ? '345px' : '690px'};
  font-size: ${props => props.isMobile ? '14px' : '18px'};
  font-weight: 700;
  line-height: ${props => props.isMobile ? '21px' : '25px'};
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
