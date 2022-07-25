import {
  PageWrapperStyled
} from "./styled";
import React from "react";

type PageWrapperProps = {
  children: React.ReactNode
}

const PageWrapper = (props: PageWrapperProps) => {
  return (
    <PageWrapperStyled>
      {props.children}
    </PageWrapperStyled>
  )
}

export {
  PageWrapper
}
