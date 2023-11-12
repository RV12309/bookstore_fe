export interface ICategoryData {
    id?: string | number,
    code: string,
    name: string,
    description: string
}

export interface ICategoryForm {
    name?: string,
    description?: string
}

export interface ICategorySearch {
  name?: string;
  page: number;
  size: number;
}

export interface ICategoryUpdate extends ICategoryForm{
  id:string | number;
}