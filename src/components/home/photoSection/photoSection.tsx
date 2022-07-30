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
import {ReactComponent as ArrowIcon} from '../../../assets/black-arrow.svg';
import {Title} from "../../common/title/title";
import useMediaQuery from "../../../hooks/useMatchMedia";

export const PhotoSection: React.FC<IPhotoSectionProps> = ({urls}) => {

  const isDesktop = useMediaQuery('(min-width: 1073px)')

  return (
    <PhotoSectionWrapper>
      <Title align="center" marginBottom={24}>Фотографии</Title>
      <PhotoSectionInner isDesktop={isDesktop}>
        {
          urls.map((url: string, index: number) => {
            return <PhotoSectionImg key={index} url={url} isDesktop={isDesktop}/>
          })
        }
      </PhotoSectionInner>
      <PhotoSectionLink isDesktop={isDesktop}>
        Перейти к галерее
        <ArrowIcon fill="#1E1E1E"/>
      </PhotoSectionLink>
    </PhotoSectionWrapper>
  );
}
