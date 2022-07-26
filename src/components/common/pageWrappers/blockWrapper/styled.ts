import styled from "styled-components";
import {BlockWrapperProps} from "./blockWrapper.types";

const BlockWrapper = styled.div<BlockWrapperProps>`
  width: 100%;
  padding: 0 230px;
  background: ${props => props.backgroundColor};
`;

export {BlockWrapper};
