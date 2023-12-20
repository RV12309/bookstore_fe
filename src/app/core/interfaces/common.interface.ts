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
  code: string | number;
  value:string | Object;
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

export interface IProvinces {
  provinceId: number;
  provinceName: string;
  code: string;
  nameExtension: string[];
  countryId: number;
}

export interface IDistricts {
  districtId: number;
  provinceId: number;
  districtName: string;
  code: string;
  type: number;
  supportType: number;
}

interface IWhiteListDistrict {
  From: any[];
  To: any[];
}

interface IWhiteListClient {
  From?: any;
  To?: any;
  Return?: any;
}

export interface IWards {
  wardCode: number;
  wardName: string;
  districtId: number;
}

interface IWhiteListWard {
  From?: any;
  To?: any;
}

interface IWhiteListClient {
  From?: any;
  To?: any;
  Return?: any;
}