import styled from "styled-components";
import {IsDesktop} from "../common/types/index.types";


const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const AboutDescription = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 25px;
  display: flex;
  flex-direction: column;
`

const DescriptionLine = styled.span`

`
const DescriptionLink = styled.a`
  color: inherit;
  text-decoration: none;
`

const AboutMap = styled.div<IsDesktop>`
  //TOOD temporary 
  width: 100%;
  height: ${props => props.isDesktop ? '405px' : '225px'};
  background-color: red;
`

export {
  AboutContainer,
  AboutDescription,
  DescriptionLine,
  DescriptionLink,
  AboutMap
}