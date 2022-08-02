import styled from "styled-components/macro";

const CornersSliderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 45px 0;
  width: 100%;
  
  @media(max-width: 480px){
    padding: 23px 0;
  }
`;

export {
  CornersSliderWrapper
}
