import styled from "styled-components";

const ContentWrapper = styled.div`
  background: ${props => props.theme.colors.liteBackground};
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LayoutWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: ${props => props.theme.fonts.jura};
  background: ${props => props.theme.colors.background};
  padding: 0;
  margin: 0;
`

export {
  ContentWrapper,
  LayoutWrapper
}
