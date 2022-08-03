import styled from "styled-components";

const PhotoSectionWrapper = styled.div`
  background: ${props => props.theme.colors.liteBackground};
  padding-top: 74px;
  padding-bottom: 47px;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  @media(max-width: 480px){
    padding-bottom: 40px;
    padding-top: 24px;
  }
`;


const PhotoSectionTitle = styled.div`
  margin-bottom: 24px;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 47px;
  color: ${props => props.theme.colors.darkMain};

  @media (max-width: 480px) {
    font-size: 20px;
    line-height: 24px;
  }
`;

const PhotoSectionInner = styled.div`
  display: flex;
  justify-content: center;
  gap: 2px;
  margin-bottom: 41px;
  width: 100%;
  
  @media(max-width: 480px){
    padding: 0 15px;
    margin-bottom: 24px;
    justify-content: flex-start;
  }
`;

interface IPhotoSectionImg{
  url: string;
}

const PhotoSectionImg = styled.div<IPhotoSectionImg>`
  flex-shrink: 0;
  width: 315px;
  height: 450px;
  background: url('${props => props.url}') center no-repeat;
  
  @media(max-width: 480px){
    width: 260px;
    height: 370px;
  }
`;

const PhotoSectionLinkIcon = styled.img`
  width: 20px;
  margin-left: 11px;
  transition: 0.5s;
`;

const PhotoSectionLink = styled.a`
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: ${props => props.theme.colors.darkMain};
  text-decoration: none;
  transition: 0.5s;
  gap: 11px;

  &:hover {
    cursor: pointer;
    gap: 20px;
  }
  
  @media(max-width: 480px){
    font-size: 16px;
    line-height: 19px;
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
