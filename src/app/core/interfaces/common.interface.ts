export interface IMenuSidebar {
  icon?: string;
  label?: string;
  route?: string;
  children?: IMenuSidebarChild[];
}

export interface IMenuSidebarChild {
  icon?: string;
  title?: string;
  key?: string;
  route?: string;
}

export interface ISelectItem {
  name: string;
  code: string;
  value:string;
}


export interface IToastProperty {
  key?: string;
  severity?: string;
  summary?: string;
  detail: string;
  sticky?: boolean;
  life?:number;
  style?:Object;
  styleClass?:string;
  position?:"center" | "top-right" | "top-left" | "bottom-left" | "bottom-right" | "top-center" | "bottom-center";
  preventOpenDuplicates?:boolean;
  preventDuplicates?:boolean;
}

export interface ILoading {
  isLoading:boolean;
  time?:number
}