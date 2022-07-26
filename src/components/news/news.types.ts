
export type NewsItemTypes = {
  image: string;
};

export interface NewsProps {
  news: NewsItemProps[];
}

export interface NewsItemProps {
  image: string;
  title: string;
  publicationDate: Date;
  description: string;
  url: string;
}
