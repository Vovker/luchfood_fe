import CornersCarousel from "../common/cornersCarousel/cornersCarousel";
import {
  CornersSliderWrapper
} from "./styled";
import {PhotoSection} from "./photoSection/photoSection";
import {DeliveryBanner} from "../banners/deliveryBanner/deliveryBanner";
import {UpdatesCarousel} from "../common/updatesCarousel/updatesCarousel";
import {useEffect} from "react";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {getCorners} from "../../store/actions/corners.action";
import {useAppSelector} from "../../hooks/useAppSelector";
import Loader from "../common/loader/loader";
import {getEvents} from "../../store/actions/events.action";
import {getGallery} from "../../store/actions/gallery.action";
import {API_URL} from "../../store/endpoints";

export const Home = () => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCorners());
    dispatch(getEvents(10, 0))
    dispatch(getGallery(10, 0));
  }, [dispatch])

  const {corners, isLoading} = useAppSelector(state => state.corners);
  const {events} = useAppSelector(state => state.events);
  const {gallery} = useAppSelector(state => state.gallery);

  return (
    corners.length && events.length && gallery.length && !isLoading ?
      <>
        <CornersSliderWrapper>
          <CornersCarousel
            slides={corners}
          />
        </CornersSliderWrapper>
        {/*<DeliveryBanner/>*/}
        <UpdatesCarousel
          slides={events}
        />
        <PhotoSection urls={gallery.slice(0, 4).map(img => `${API_URL}/${img.img}`)}/>
      </>
      : <Loader/>
  );
}
