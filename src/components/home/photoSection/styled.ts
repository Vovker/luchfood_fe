import styled from "styled-components";
import {IsDesktop} from "../../common/types/index.types";

const PhotoSectionWrapper = styled.div<IsDesktop>`
  background: ${props => props.theme.colors.liteBackground};
  padding-top: ${props => props.isDesktop ? '74px' : '24px'};
  padding-bottom: ${props => props.isDesktop ? '47px' : '40px'};
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const PhotoSectionTitle = styled.div`
  margin-bottom: 24px;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 47px;
  color: ${props => props.theme.colors.darkMain};
`;

const PhotoSectionInner = styled.div<IsDesktop>`
  display: flex;
  justify-content: ${props => props.isDesktop ? 'center' : 'flex-start'};
  gap: 2px;
  margin-bottom: ${props => props.isDesktop ? '41px' : '24px'};
  width: 100%;
  overflow: scroll;
  padding: ${props => props.isDesktop ? '0' : '0 15px'};
`;

interface IPhotoSectionImg extends IsDesktop{
  url: string;
}

const PhotoSectionImg = styled.div<IPhotoSectionImg>`
  flex-shrink: 0;
  width: ${props => props.isDesktop ? '315px' : '260px'};
  height: ${props => props.isDesktop ? '450px' : '370px'};
  background: url('${props => props.url}') center no-repeat;
`;

const PhotoSectionLinkIcon = styled.img`
  width: 20px;
  margin-left: 11px;
  transition: 0.5s;
`;

const PhotoSectionLink = styled.a<IsDesktop>`
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: 700;
  font-size: ${props => props.isDesktop ? '20px' : '16px'};
  line-height: ${props => props.isDesktop ? '24px' : '19px'};
  color: ${props => props.theme.colors.darkMain};
  text-decoration: none;
  transition: 1s;

  &:hover {
    cursor: pointer;
    
    ${PhotoSectionLinkIcon} {
      margin-left: 20px;
    }
  }
`;

export {
  PhotoSectionWrapper,
  PhotoSectionTitle,
  PhotoSectionInner,
  PhotoSectionImg,
  PhotoSectionLink,
  PhotoSectionLinkIcon
}
