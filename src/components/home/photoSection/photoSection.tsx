import React from "react";
import {IPhotoSectionProps} from "./photoSection.types";
import {
  PhotoSectionWrapper,
  PhotoSectionTitle,
  PhotoSectionInner,
  PhotoSectionImg,
  PhotoSectionLink,
} from './styled';
import {ReactComponent as ArrowIcon} from '../../../assets/black-arrow.svg';
import {routes} from "../../../routes/routes";

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
      <PhotoSectionLink to={routes.gallery}>
        Перейти к галерее
        <ArrowIcon fill="#1E1E1E"/>
      </PhotoSectionLink>
    </PhotoSectionWrapper>
  );
}
