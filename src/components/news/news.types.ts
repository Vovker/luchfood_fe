
export type NewsItemTypes = {
  image: string;
};

export interface NewsProps {
  news?: NewsItemProps[];
}

export interface NewsItemProps {
  image: string;
  title: string;
  publicationDate: string;
  description: string;
  url: string;
}
