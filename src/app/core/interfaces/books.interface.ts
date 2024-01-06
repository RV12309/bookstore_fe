export interface IBookSearchForm {
    title?: string,
    author?: string,
    categoryIds?: string[],
    page?: number,
    size?: number,
    sort?: string[] | any,
    priceFrom?: number,
    priceTo?: number
}

export interface IBooksResponse {
    totalElements?: number,
    totalPages?: number,
    size?: number,
    content: IBookData[],
    pageNumber?: number,
    pageSize?: number,
    numberOfElements?: number,
}

export interface IBookData  {
    id?: string,
    isbn?: string,
    title?: string,
    categories?: any,
    author?: string,
    description?: string,
    urlThumbnail?: string,
    urlImageCover?: string,
    publisher?: string,
    publishDate?: string,
    language?: string,
    numberOfPages?: number,
    price?: number,
    quantity?: number
  }

export interface IBookCreate {
  title: string;
  author: string;
  description: string;
  categoryIds: string[];
  imagesUrls: string[];
  urlThumbnail: string;
  urlImageCover: string;
  publisher: string;
  publishDate: string;
  numberOfPages: number;
  price: number;
  quantity: number;
}