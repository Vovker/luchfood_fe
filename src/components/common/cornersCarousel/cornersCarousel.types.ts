export interface ISlideProps {
  imageUrl: string;
  title: string;
  address: string;
  kitchenType: string;
  url: string;
}

export interface ICarouselProps {
  slides: ISlideProps[];
}
