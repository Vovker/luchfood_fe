import styled from "styled-components/macro";
import {CardImg} from "../common/card/styled";

const  GalleryWrapper = styled.div`
  width: 980px;
  padding-top: 72px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 60px;
  
  @media (max-width: 480px) {
    padding-top: 16px;
    margin-bottom: 40px;
    align-items: center;
    width: 100%;
  }
`

const GalleryTitle = styled.div`
  font-size: 40px;
  font-weight: 700;
  line-height: 47px;
  text-align: left;
  margin-bottom: 40px;

  @media (max-width: 480px) {
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    margin-bottom: 19px;
  }
`

const GalleryCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 300px;
  @media (max-width: 480px) {
    padding: 0 15px;
    gap: 6px;
    width: 100%;
  }
`

const GalleryImage = styled(CardImg)`
  width: 300px;
  height: 230px;
`

const GalleryImageMobile = styled.img`
  width: 100%;
`

const GalleryDate = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 20.62px;
`

const GalleryCardRow = styled.div`
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 980px;
  
  @media (max-width: 480px) {  
    gap: 20px;
    width: 100%;
  }
`

export {
  GalleryWrapper,
  GalleryTitle,
  GalleryCardWrapper,
  GalleryImage,
  GalleryImageMobile,
  GalleryDate,
  GalleryCardRow
}
