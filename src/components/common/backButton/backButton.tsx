import React from "react";
import {IBackButtonProps} from "./backButton.types";
import {Button} from "./styled";
import {ReactComponent as BlackButton} from "../../../assets/black-arrow.svg";
import theme from "../../../theme";

export const BackButton:React.FC<IBackButtonProps> = ({title}) => {

  return (
    <Button>
      <BlackButton fill={theme.colors.darkMain} style={{transform:'rotate(180deg)'}}/>
      {title}
    </Button>
  )
}