import styled from "styled-components";
import {Link} from "react-router-dom";
import {IsDesktop} from "../common/types/index.types";

const AfishaHeader = styled.div<IsDesktop>`
  margin-bottom: ${props => props.isDesktop ? '40px' : '20px'};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${props => props.isDesktop ? '100%' : 'fit-content'};
`


const AfishaTitle = styled.h4`
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
`

const AfishaFooterMobile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const AfishaLink = styled(Link)`
  text-decoration: none;
  gap: 11px;
  line-height: 21px;
  font-size: 18px;
  font-weight: 700;
  color: ${props => props.theme.colors.redMain};
  display: flex;
  align-items: center;
`

const CustomLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

export {
  AfishaHeader,
  AfishaTitle,
  AfishaLink,
  CustomLink,
  AfishaFooterMobile
}