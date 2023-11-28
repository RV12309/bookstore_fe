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
  ProvinceID: number;
  ProvinceName: string;
  CountryID: number;
  Code: string;
  NameExtension: string[];
  IsEnable: number;
  RegionID: number;
  RegionCPN: number;
  UpdatedBy: number;
  CreatedAt: string;
  UpdatedAt: string;
  CanUpdateCOD: boolean;
  Status: number;
  UpdatedIP: string;
  UpdatedEmployee: number;
  UpdatedSource: string;
  UpdatedDate: string;
}

export interface IDistricts {
  DistrictID: number;
  ProvinceID: number;
  DistrictName: string;
  Code: string;
  Type: number;
  SupportType: number;
  NameExtension: string[];
  IsEnable: number;
  UpdatedBy: number;
  CreatedAt: string;
  UpdatedAt: string;
  CanUpdateCOD: boolean;
  Status: number;
  PickType: number;
  DeliverType: number;
  WhiteListClient: IWhiteListClient;
  WhiteListDistrict: IWhiteListDistrict;
  ReasonCode: string;
  ReasonMessage: string;
  OnDates?: any;
  UpdatedDate: string;
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
  WardCode: string;
  DistrictID: number;
  WardName: string;
  NameExtension: string[];
  IsEnable: number;
  CanUpdateCOD: boolean;
  UpdatedBy: number;
  CreatedAt: string;
  UpdatedAt: string;
  SupportType: number;
  PickType: number;
  DeliverType: number;
  WhiteListClient: IWhiteListClient;
  WhiteListWard: IWhiteListWard;
  Status: number;
  ReasonCode: string;
  ReasonMessage: string;
  OnDates?: any;
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