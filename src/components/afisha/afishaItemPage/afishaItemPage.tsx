import React, {useEffect} from "react";
import {AfishaInfoCategory, AfishaInfoDate, AfishaInfoDescription, AfishaInfoWrapper,
  AfishaItemImage,
  AfishaItemTitle, AfishaItemWrapper, AfishaMobileImage, MobileCategoryWrapper} from "./styled";
import {BackButton} from "../../common/backButton/backButton";
import {isMobile} from "react-device-detect";
import {routes} from "../../../routes/routes";
import {useParams} from "react-router-dom";
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import {getEventById} from "../../../store/actions/events.action";
import {useAppSelector} from "../../../hooks/useAppSelector";
import Loader from "../../common/loader/loader";
import {EventTyped} from "../../../store/types/events.types";
import {API_URL} from "../../../store/endpoints";
import moment from "moment";


export const AfishaItemPage: React.FC = () => {

  const {afishaId} = useParams();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEventById(Number(afishaId)));
  }, [dispatch]);

  const {event, isLoading} = useAppSelector(state => state.currentEvent);

  return (
    <>
      <BackButton title='Вся афиша' url={`/${routes.afisha}`}/>
      {
        !isLoading && event ? (
            !isMobile
              ? <AfishaItem {...event}/>
              : <AfishaItemMobile {...event}/>
          )
          : <Loader/>
      }
    </>
  )
}

const AfishaItem: React.FC<EventTyped> = ({
  name,
  date,
  type,
  description,
  img,
}) => {
  return (
    <AfishaItemWrapper>
        <AfishaInfoWrapper>
          <AfishaItemTitle>
            {name}
          </AfishaItemTitle>
          <AfishaInfoDate>
            {moment(date).locale('ru').format('llll')}
          </AfishaInfoDate>
          <AfishaInfoCategory>
            Категория: {type.name}
          </AfishaInfoCategory>
          <AfishaInfoDescription>
            {description}
          </AfishaInfoDescription>
        </AfishaInfoWrapper>
        <div>
          <AfishaItemImage
            src={`${API_URL}/${img}`}/>
        </div>
    </AfishaItemWrapper>
  )
}

const AfishaItemMobile: React.FC<EventTyped> = ({
  name,
  date,
  type,
  description,
  img,
}) => {
  return (
    <AfishaItemWrapper>
      <AfishaInfoWrapper>
        <AfishaItemTitle>
          {name}
        </AfishaItemTitle>
        <AfishaMobileImage
          src={`${API_URL}/${img}`}/>
        <MobileCategoryWrapper>
          <AfishaInfoDate>
            {moment(date).locale('ru').format('llll')}
          </AfishaInfoDate>
          <AfishaInfoCategory>
            Категория: <b>{type.name}</b>
          </AfishaInfoCategory>
        </MobileCategoryWrapper>
        <AfishaInfoDescription>
          {description}
        </AfishaInfoDescription>
      </AfishaInfoWrapper>
    </AfishaItemWrapper>
  )
}
