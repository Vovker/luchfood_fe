
export interface CornersTypes {
  image: string,
  name: string,
  address: string,
  description: string,
  url: string,
  category?: string
}

export interface IFilterOption {
  value: string,
  name: string,
  title: string
}

export interface FilterOptionStyle{
  isChecked?: boolean
}