import React from "react";
import {IBackButtonProps} from "./backButton.types";
import {BackLink} from "./styled";
import {ReactComponent as BlackButton} from "../../../assets/black-arrow.svg";
import theme from "../../../theme";
import {isMobile} from "react-device-detect";

export const BackButton:React.FC<IBackButtonProps> = ({title, url}) => {

  return (
    <BackLink to={url}>
      <BlackButton
        fill={theme.colors.darkMain}
        style={{transform:'rotate(180deg)'}}
        width={!isMobile? '20px': '27px'}
        height={!isMobile? '20px': '27px'}
      />
      {!isMobile && title}
    </BackLink>
  )
}
