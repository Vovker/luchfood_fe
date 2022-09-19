import React from "react";
import {BackButton} from "../common/backButton/backButton";
import {AboutDescription, AboutTitle, AboutWrapper, DescriptionLine, DescriptionLink} from "./styled";
import {routes} from "../../routes/routes";
import {isMobile} from "react-device-detect";
import {Map, Placemark, YMaps} from "react-yandex-maps";

export const About = () => {

  return (
    <>
      <BackButton title="Назад" url={routes.home}/>
      <AboutWrapper>
          <AboutTitle>
            О нас
          </AboutTitle>
          {isMobile && <AboutMap/>
          }
          <AboutDescription>
            <DescriptionLine>
              ЛУЧшая улица
            </DescriptionLine>
            {/*<DescriptionLine>*/}
            {/*  ООО "Рога и Копыта" УНП 11234556*/}
            {/*</DescriptionLine>*/}
            <DescriptionLine>
              Адрес: пр. Hезависимости 95, корпус 2 (территория завода "луч")
            </DescriptionLine>
            <DescriptionLine>
              Телефон:
              {' '}
              <DescriptionLink href="tel:+375295697777">
                +375 (29) 569-77-77
              </DescriptionLink>
            </DescriptionLine>
            <DescriptionLine>
              Часы работы : пн-вс с 12:00 по 22:00
            </DescriptionLine>
            <DescriptionLine>
              Почта:
              {' '}
              <DescriptionLink href="mailto:info@luch.com">
                info@luch.com
              </DescriptionLink>
            </DescriptionLine>
          </AboutDescription>
          {!isMobile && <AboutMap/>}
      </AboutWrapper>
    </>
  )
}

const AboutMap = () => {
  return(
    <YMaps>
        <Map defaultState={{ center: [53.927253, 27.615756], zoom: 17 }} width={'100%'}>
          <Placemark
            modules={[
              "geoObject.addon.balloon",
              "geoObject.addon.hint"
            ]}
            geometry={[53.927253, 27.615756]}
          />
        </Map>
    </YMaps>
  );
}
