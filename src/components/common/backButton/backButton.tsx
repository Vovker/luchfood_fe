import React from "react";
import {IBackButtonProps} from "./backButton.types";
import {Button} from "./styled";
import {ReactComponent as BlackButton} from "../../../assets/black-arrow.svg";

export const BackButton:React.FC<IBackButtonProps> = ({title}) => {

  return (
    <Button>
      <BlackButton style={{transform:'rotate(180deg)'}}/>
      {title}
    </Button>
  )
}