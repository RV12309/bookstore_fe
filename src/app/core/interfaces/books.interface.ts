export interface IBookSearchForm {
    title?: string,
    author?: string,
    categoryId?: number,
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
    content?: IBookData[],
    pageNumber?: number,
    pageSize?: number,
    numberOfElements?: number,
}

export interface IBookData  {
    id?: number,
    isbn?: string,
    title?: string,
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
  categoryIds: number[];
  imagesUrls: string[];
  urlThumbnail: string;
  urlImageCover: string;
  publisher: string;
  publishDate: string;
  numberOfPages: number;
  price: number;
  quantity: number;
}