import styled from "styled-components";

const PhotoSectionWrapper = styled.div`
  background: ${props => props.theme.colors.liteBackground};
  padding-top: 74px;
  padding-bottom: 47px;
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

const PhotoSectionInner = styled.div`
  display: flex;
  justify-content: center;
  gap: 2px;
  margin-bottom: 19px;
`;

interface IPhotoSectionImg {
  url: string;
}

const PhotoSectionImg = styled.div<IPhotoSectionImg>`
  width: 315px;
  height: 450px;
  background: url('${props => props.url}') center no-repeat;
`;

const PhotoSectionLinkIcon = styled.img`
  width: 20px;
  margin-left: 11px;
  transition: 0.5s;
`;

const PhotoSectionLink = styled.a`
  display: flex;
  align-items: center;
  margin-top: 39px;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
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
