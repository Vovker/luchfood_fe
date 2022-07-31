import React, {useEffect} from "react";
import {BackButton} from "../common/backButton/backButton";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {getGallery} from "../../store/actions/gallery.action";
import {useAppSelector} from "../../hooks/useAppSelector";
import {API_URL} from "../../store/endpoints";
import moment from "moment";
import {routes} from "../../routes/routes";
import {GalleryCardRow, GalleryCardWrapper, GalleryDate, GalleryImage, GalleryImageMobile, GalleryTitle, GalleryWrapper} from "./styled";
import {isMobile} from "react-device-detect";
import {GalleryTyped} from "../../store/types/gallery.types";

export const Gallery = () => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getGallery(10, 0));
  }, []);

  const {gallery, isLoading, error} = useAppSelector(state => state.gallery);
  console.log(gallery)

  return (
    <>
      <BackButton title="Назад" url={routes.home}/>
      <GalleryWrapper>
          <GalleryTitle>
            Галерея
          </GalleryTitle>
          <GalleryCardRow>
            {
              gallery.map(post=>
                <GalleryCard key={post.id} {...post}/>
              )
            }
          </GalleryCardRow>
      </GalleryWrapper>
    </>
  )
}

const GalleryCard:React.FC<GalleryTyped> = ({created_at, img}) => {
  return (
    <GalleryCardWrapper>
      {
        !isMobile
        ? <GalleryImage image={img}/>
        : <GalleryImageMobile src={img}/>
      }
      <GalleryDate>
        {moment(created_at).locale('ru').format('DD MMMM YYYY')}
      </GalleryDate>
    </GalleryCardWrapper>
  )
}