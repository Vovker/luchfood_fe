import styled from "styled-components";
import {Link} from "react-router-dom";

const LinkWrapper = styled.div`
  width: 100%;
  background: ${props => props.theme.colors.background};
  height: 70px;
  padding-left: 94px;
`;

const BackToPageLinkIcon = styled.img`
  width: 20px;
  margin-right: 11px;
`;

const BackToPageLinkWrapper = styled(Link)`
  margin-bottom: 20px;
  
  &:hover {
    cursor: pointer;

    ${BackToPageLinkIcon} {
      margin-right: 20px;
    }
  }
`;

const BackToPageLinkText = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: ${props => props.theme.colors.darkMain};
`;

export {
  LinkWrapper,
  BackToPageLinkWrapper,
  BackToPageLinkIcon,
  BackToPageLinkText
}
