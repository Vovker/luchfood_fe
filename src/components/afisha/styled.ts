import styled from "styled-components";



const AfishaDate = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
`

const AfishaTitle = styled.h4`
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
`

const AfishaLink = styled.a`
  text-decoration: none;
  gap: 11px;
  line-height: 21px;
  font-size: 18px;
  font-weight: 700;
  color: ${props => props.theme.colors.redMain};
  display: flex;
  align-items: center;
`

export {
  AfishaDate,
  AfishaTitle,
  AfishaLink
}