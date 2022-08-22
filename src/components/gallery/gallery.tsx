import React, {useEffect, useState} from "react";
import {BackButton} from "../common/backButton/backButton";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {getGallery} from "../../store/actions/gallery.action";
import {useAppSelector} from "../../hooks/useAppSelector";
import {API_URL} from "../../store/endpoints";
import moment from "moment";
import {routes} from "../../routes/routes";
import {
  GalleryCardRow,
  GalleryCardWrapper,
  GalleryDate,
  GalleryImageMobile,
  GalleryTitle,
  GalleryWrapper
} from "./styled";
import {isMobile} from "react-device-detect";
import {GalleryTyped} from "../../store/types/gallery.types";
import Loader from "../common/loader/loader";
import InfiniteScroll from "react-infinite-scroller";
import {ImageWithPreview} from "../common/imageWithPreview/imageWithPreview";

export const Gallery = () => {

  const [page, setPage] = useState(0);

  const dispatch = useAppDispatch();

  const {gallery, isLoading, isMore} = useAppSelector(state => state.gallery);

  function loadMore() {
    if (!isLoading) {
      dispatch(getGallery(9, page))
      setPage(prevState => prevState + 1)
    }
  }

  useEffect(() => {
    loadMore();
  }, [dispatch]);

  return (
    <>
      <BackButton title="Назад" url={routes.home}/>
      <GalleryWrapper>
        <GalleryTitle>
          Галерея
        </GalleryTitle>
        <InfiniteScroll
          pageStart={page}
          loadMore={loadMore}
          hasMore={isMore}
          loader={<Loader/>}
        >
          <GalleryCardRow>
            {
              gallery.map((post) =>
                <GalleryCard key={post.id} {...post}/>
              )
            }
          </GalleryCardRow>
        </InfiniteScroll>
      </GalleryWrapper>
    </>
  )
}

const GalleryCard: React.FC<GalleryTyped> = ({created_at, img}) => {
  return (
    <GalleryCardWrapper>
      {
        !isMobile
          ? <ImageWithPreview url={`${API_URL}/${img}`} width={'300px'} height={'230px'}/>
          : <GalleryImageMobile src={`${API_URL}/${img}`}/>
      }
      <GalleryDate>
        {moment(created_at).locale('ru').format('DD MMMM YYYY')}
      </GalleryDate>
    </GalleryCardWrapper>
  )
}
