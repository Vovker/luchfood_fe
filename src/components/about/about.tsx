import React from "react";
import {BackButton} from "../common/backButton/backButton";
import {ItemPageWrapper, Wrapper} from "../common/styled";
import {Title} from "../common/title/title";
import {AboutContainer, AboutDescription, AboutMap, DescriptionLine, DescriptionLink} from "./styled";
import useMediaQuery from "../../hooks/useMatchMedia";
import {routes} from "../../routes/routes";

export const About = () => {

  const isDesktop = useMediaQuery('(min-width: 1073px)')

  return (
    <>
      <BackButton title="Назад" url={routes.home}/>
      <Wrapper
        width={isDesktop ? 956 : 345} paddingTop={isDesktop ? 72 : 16}
        marginBottom={60}
      >
        <ItemPageWrapper gap={isDesktop ? 16 : 24}>
          <Title align="center" marginBottom={isDesktop ? 0 : -5}>
            О нас
          </Title>
          {!isDesktop && <AboutMap isDesktop={isDesktop}/>
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
          {isDesktop && <AboutMap isDesktop={isDesktop}/>}
        </ItemPageWrapper>
      </Wrapper>
    </>
  )
}