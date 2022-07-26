import styled from "styled-components";
import {IsDesktop} from "../common/types/index.types";

const SoonImg = styled.img<IsDesktop>`
  margin: ${props => props.isDesktop ? '40px 0' : 0};
  width: ${props => props.width ? props.width : '980px'};
  height: ${props => props.height ? props.height : '552px'};
`

const MobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 15px 15px 43px 15px;
`

const SocialLinks = styled.div`
  position: absolute;
  right: 10px;
  bottom: 16px;
  display: flex;
  flex-direction: column;
  gap: 13px;
`
const SocialLink = styled.div`
  background-color: ${props => props.theme.colors.redMain};
  width: 46px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const SocialIMG = styled.img`
  height: 27px;
`

export {
  SoonImg,
  MobileContainer,
  SocialLinks,
  SocialLink
}
