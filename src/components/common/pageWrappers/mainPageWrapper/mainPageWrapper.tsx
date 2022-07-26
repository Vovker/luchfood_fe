import {
  PageWrapperStyled
} from "./styled";
import React from "react";
import {PageWrapperProps} from "./mainPageWrapper.types";

const MainPageWrapper = (props: PageWrapperProps) => {
  return (
    <PageWrapperStyled>
      {props.children}
    </PageWrapperStyled>
  )
}

export {
  MainPageWrapper
}
