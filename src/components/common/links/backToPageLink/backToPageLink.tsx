import {
  BackToPageLinkText,
  BackToPageLinkIcon,
  BackToPageLinkWrapper,
  LinkWrapper
} from './styled'
import {BackToPageLinkTypes} from "./backToPageLink.types";
import React from "react";

export const BackToPageLink: React.FC<BackToPageLinkTypes> = ({text, url}) => {
  return(
    <LinkWrapper>
      <BackToPageLinkWrapper to={url}>
        <BackToPageLinkText>
          <BackToPageLinkIcon/>
          {text}
        </BackToPageLinkText>
      </BackToPageLinkWrapper>
    </LinkWrapper>
  )
}
