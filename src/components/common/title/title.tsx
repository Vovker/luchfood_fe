import React from "react";
import { StyledTitle } from "./styled";
import { ITitleProps } from "./title.types";
import useMediaQuery from "../../../hooks/useMatchMedia";



export const Title:React.FC<ITitleProps> = ({marginBottom,children, align, color}) => {

  const isDesktop = useMediaQuery('(min-width: 1073px)')

  return (
    <StyledTitle marginBottom={marginBottom} isDesktop={isDesktop} align={align} color={color}>
      {children}
    </StyledTitle>
  )
}