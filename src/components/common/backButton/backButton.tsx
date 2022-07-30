import React from "react";
import {IBackButtonProps} from "./backButton.types";
import {Button} from "./styled";
import {ReactComponent as BlackButton} from "../../../assets/black-arrow.svg";
import theme from "../../../theme";
import useMediaQuery from "../../../hooks/useMatchMedia";

export const BackButton:React.FC<IBackButtonProps> = ({title}) => {

  const isDesktop = useMediaQuery('(min-width: 1073px)')

  return (
    <Button isDesktop={isDesktop}>
      <BlackButton
        fill={theme.colors.darkMain}
        style={{transform:'rotate(180deg)'}}
        width={isDesktop? '20px': '27px'}
        height={isDesktop? '20px': '27px'}
      />
      {isDesktop && title}
    </Button>
  )
}