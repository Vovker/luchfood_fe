import styled from "styled-components";
import {Link} from "react-router-dom";

const BackLink = styled(Link)`
  text-decoration: none;
  display: flex;
  gap: 11px;
  align-items: center;
  position: absolute;
  top: 29px;
  left: 94px;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  text-align: left;
  cursor: pointer;
  color: ${props => props.theme.colors.darkMain};
  @media (max-width: 480px) {
    top: 18px;
    left: 15px;
  }
  
`

export {
  BackLink
}