import React from "react";
import {BackButton} from "../common/backButton/backButton";
import {AboutDescription, AboutMap, AboutTitle, AboutWrapper, DescriptionLine, DescriptionLink} from "./styled";
import {routes} from "../../routes/routes";
import {isMobile} from "react-device-detect";

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
            <DescriptionLine>
              ООО "Рога и Копыта" УНП 11234556
            </DescriptionLine>
            <DescriptionLine>
              Адрес: Ул. Толбухина 4 (территория завода "луч")
            </DescriptionLine>
            <DescriptionLine>
              Менеджер: Ольга
              {' '}
              <DescriptionLink href="tel:">
                +3754555454545
              </DescriptionLink>
            </DescriptionLine>
            <DescriptionLine>
              Часы работы : пн-вс с 9.00 по 22.00
            </DescriptionLine>
            <DescriptionLine>
              Почта:
              {' '}
              <DescriptionLink href="mailto:">
                info@luch.com
              </DescriptionLink>
            </DescriptionLine>
          </AboutDescription>
          {!isMobile && <AboutMap/>}
      </AboutWrapper>
    </>
  )
}