import styled from "styled-components";

const CarouselContainer = styled.div`
  width: 100%;
  height: 706px;
  background: ${props => props.theme.colors.darkMain};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 42px 0;
  box-sizing: border-box;
`;

const CarouselTitle = styled.div`
  margin-bottom: 24px;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 47px;
  color: ${props => props.theme.colors.white};
`;

const PosterLinkIcon = styled.img`
  margin-left: 11px;
  width: 20px;
  transition: 0.5s;
`;

const PosterLink = styled.a`
  margin-top: 40px;
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: ${props => props.theme.colors.mint};
  
  &:hover {
    cursor: pointer;
    
    ${PosterLinkIcon} {
      margin-left: 20px;
    }
  }
`;

const SliderWrapper = styled.div`
  width: 1200px;
  height: 480px;
`;

const CardWrapper = styled.div`
  width: 380px;
  height: 480px;
  padding: 20px;
  background: transparent;
  border: 1px solid ${props => props.theme.colors.greyBorder};
  box-sizing: border-box;
`;

interface ICardImage {
  url: string;
}

const CardImage = styled.div<ICardImage>`
  height: 230px;
  width: 340px;
  background: url('${props => props.url}') center no-repeat;
  background-size: cover;
`;

const PublicationDate = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 150%;
  color: ${props => props.theme.colors.white};
`;

const PublicationTitle = styled.div`
  margin-bottom: 16px;
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 150%;
  text-transform: uppercase;
  color: ${props => props.theme.colors.mint};
`;

const PublicationDescription = styled.div`
  height: 110px;
  width: 340px;
  text-overflow: ellipsis;
  white-space: pre-wrap;
  overflow: hidden;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  color: ${props => props.theme.colors.white};
`;

export {
  CarouselContainer,
  CarouselTitle,
  PosterLink,
  PosterLinkIcon,
  SliderWrapper,
  CardWrapper,
  CardImage,
  PublicationDate,
  PublicationTitle,
  PublicationDescription
}

