import React from "react";
import {IPhotoSectionProps} from "./photoSection.types";
import {
  PhotoSectionWrapper,
  PhotoSectionTitle,
  PhotoSectionInner,
  PhotoSectionImg,
  PhotoSectionLink,
  PhotoSectionLinkIcon
} from './styled';
import arrowIcon from '../../../assets/black-arrow.svg';

export const PhotoSection: React.FC<IPhotoSectionProps> = ({urls}) => {
  return (
    <PhotoSectionWrapper>
      <PhotoSectionTitle>Фотографии</PhotoSectionTitle>
      <PhotoSectionInner>
        {
          urls.map((url: string, index: number) => {
            return <PhotoSectionImg key={index} url={url}/>
          })
        }
      </PhotoSectionInner>
      <PhotoSectionLink>
        Перейти к галерее
        <PhotoSectionLinkIcon src={arrowIcon}/>
      </PhotoSectionLink>
    </PhotoSectionWrapper>
  );
}
