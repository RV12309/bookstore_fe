export interface ITitleTable {
  title: string;
  classes?:string;
  sort?:boolean;
  key?:string;
}


export interface ITablePageChange {
  pageNumber?: number;
  pageIndex?:number;
  page:number;
  size:number;
}
