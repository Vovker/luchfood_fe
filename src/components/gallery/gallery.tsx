import React, {useEffect} from "react";
import {BackButton} from "../common/backButton/backButton";
import {ItemWrapper, StyledDate, Wrapper} from "../common/styled";
import {CardRow} from "../common/cardRow/cardRow";
import {Card} from "../common/card/card";
import useMediaQuery from "../../hooks/useMatchMedia";
import { Title } from "../common/title/title";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {getGallery} from "../../store/actions/gallery.action";
import {useAppSelector} from "../../hooks/useAppSelector";
import {API_URL} from "../../store/endpoints";
import moment from "moment";
import {routes} from "../../routes/routes";

export const Gallery = () => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getGallery(10, 0));
  }, []);

  const {gallery, isLoading, error} = useAppSelector(state => state.gallery);
  console.log(gallery)
  const isDesktop = useMediaQuery('(min-width: 1073px)')

  return (
    <>
      <BackButton title="Назад" url={routes.home}/>
      <Wrapper
        width={980}
        paddingTop={isDesktop ? 72 : 16}
        marginBottom={isDesktop ? 60 : 40}
      >
        <ItemWrapper isDesktop={isDesktop}>
          <Title marginBottom={isDesktop ? 40 : 19}>
            Галерея
          </Title>
          <CardRow
            itemsPerRow={isDesktop? 3 : 1}
            gap={isDesktop? 40 : 20}
            itemWidth={isDesktop ? 300 : 345}
          >
            {
              gallery.map(post=>
                <Card
                  width={isDesktop ? 300 : 345}
                  height={isDesktop ? 230 : 264}
                  imgUrl={`${API_URL}/${post.img}`}
                  key={post.id}
                >
                  <StyledDate>
                    {moment(post.created_at).locale('ru').format('DD MMMM YYYY')}
                  </StyledDate>
                </Card>
              )
            }
          </CardRow>
        </ItemWrapper>
      </Wrapper>
    </>
  )
}
