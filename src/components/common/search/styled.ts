import styled from "styled-components";

const SearchWrapper = styled.div`
  display: flex;
  gap: 14px;
`

const StyledInput = styled.input`
  height: 25px;
  outline: none;
  border: none;
  background-color: inherit;
  font-family: Jura;
  font-size: 18px;
  font-weight: 400;
  line-height: 25px;
  color: ${props => props.theme.colors.darkMain};
  width: 100%;
`
export {
  StyledInput,
  SearchWrapper
}