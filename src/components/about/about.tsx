import React from "react";
import {BackButton} from "../common/backButton/backButton";
import {Title, Wrapper} from "../common/styled";
import {AboutContainer, AboutDescription, AboutMap, DescriptionLine, DescriptionLink} from "./styled";

export const About = () => {
  return (
    <>
      <BackButton title="Назад"/>
      <Wrapper width={956} paddingTop={72}>
        <AboutContainer>
          <Title>О нас</Title>
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
          <AboutMap>

          </AboutMap>
        </AboutContainer>
      </Wrapper>
    </>
  )
}