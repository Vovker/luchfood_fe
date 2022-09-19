import React, {useEffect, useState} from "react";
import {
  AfishaCardImage, AfishaCardRow, AfishaCardWrapper, AfishaFooterMobile, AfishaHeader,
  AfishaHeaderTitle, AfishaLink, AfishaTitle,
  AfishaWrapper, MobileAfishaCardImage
} from "./styled";
import {ReactComponent as OrangeArrow} from '../../assets/orange-arrow.svg'
import {StyledDate} from "../common/styled";
import {BackButton} from "../common/backButton/backButton";
import {isMobile} from "react-device-detect";
import {routes} from "../../routes/routes";
import moment from "moment";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {useAppSelector} from "../../hooks/useAppSelector";
import {getEvents} from "../../store/actions/events.action";
import Loader from "../common/loader/loader";
import InfiniteScroll from "react-infinite-scroller";
import {EventTyped} from "../../store/types/events.types";
import {API_URL} from "../../store/endpoints";

export const Afisha = () => {

  const [page, setPage] = useState(0);

  const dispatch = useAppDispatch();

  const {events, isLoading, isMore} = useAppSelector(state => state.events);

  function loadMore() {
    if (!isLoading) {
      dispatch(getEvents(9, page))
      setPage(prevState => prevState + 1)
    }
  }

  useEffect(() => {
    loadMore();
  }, [dispatch]);


  return (
    <>
      <BackButton title="Назад" url={routes.home}/>
      <AfishaWrapper>
        <AfishaHeader>
          <AfishaHeaderTitle>Афиша</AfishaHeaderTitle>
        </AfishaHeader>
        <InfiniteScroll
          pageStart={page}
          loadMore={loadMore}
          hasMore={isMore}
          loader={<Loader/>}
        >
          <AfishaCardRow key={page}>
            {
              events.map(afisha => {
                  return !isMobile
                    ? <AfishaCard key={afisha.id} {...afisha}/>
                    : <MobileAfishaCard key={afisha.id} {...afisha}/>
                }
              )
            }
          </AfishaCardRow>
        </InfiniteScroll>
      </AfishaWrapper>
    </>
  )
}


const AfishaCard:React.FC<EventTyped> = ({
  id,
  name,
  img,
  date,
 }) => {
  return (
    <AfishaCardWrapper>
      <AfishaCardImage image={`${API_URL}/${img}`}/>
      <StyledDate>
        {moment(date).locale('ru').format('DD MMMM YYYY')}
      </StyledDate>
      <AfishaTitle> {name} </AfishaTitle>
      <AfishaLink to={`/afisha/${id}`}>
        Подробнее <OrangeArrow/>
      </AfishaLink>
    </AfishaCardWrapper>
  )
}

const MobileAfishaCard:React.FC<EventTyped> = ({
   id,
   name,
   img,
   date,
 }) => {
  return (
    <AfishaCardWrapper>
      <MobileAfishaCardImage src={`${API_URL}/${img}`}/>
      <AfishaTitle>{name}</AfishaTitle>
      <AfishaFooterMobile>
        <StyledDate>
          {moment(date).locale('ru').format('DD MMMM YYYY')}
        </StyledDate>
        <AfishaLink to={`/afisha/${id}`}>
          Подробнее <OrangeArrow width="27px" height="27px"/>
        </AfishaLink>
      </AfishaFooterMobile>
    </AfishaCardWrapper>
  )
}
