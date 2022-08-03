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


const photos = [
  'https://incrussia.ru/wp-content/uploads/2020/11/iStock-1175505781.jpg',
  'https://flomaster.club/uploads/posts/2021-10/1634761592_9-flomaster-club-p-nabroski-yedi-krasivii-risunok-9.jpg',
  'https://e0.edimdoma.ru/data/posts/0002/2597/22597-ed4_wide.jpg?1631189893',
  'https://avatars.mds.yandex.net/get-altay/2960979/2a0000017260a9d9f85eb44d3ab634dd7d7f/XXL',
]

export const Home = () => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCorners());
    dispatch(getEvents(10, 0))
  }, [dispatch])

  const {corners, isLoading} = useAppSelector(state => state.corners);
  const {events} = useAppSelector(state => state.events);

  return (
    corners.length && events.length && !isLoading ?
      <>
        <CornersSliderWrapper>
          <CornersCarousel
            slides={corners}
          />
        </CornersSliderWrapper>
        <DeliveryBanner/>
        <UpdatesCarousel
          slides={events}
        />
        <PhotoSection urls={photos}/>
      </>
      : <Loader/>
  );
}
