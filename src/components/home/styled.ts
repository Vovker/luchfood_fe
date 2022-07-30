import styled from "styled-components/macro";
import {IsDesktop} from "../common/types/index.types";

const CornersSliderWrapper = styled.div<IsDesktop>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${props => props.isDesktop ? '45px 0' : '23px 0'};
  width: 100%;
`;

export {
  CornersSliderWrapper
}
