export interface IFilterItem<T>{
  //--------------input text----------------
  label?: string;
  name?: string;
  placeholder?: string;
  type: InputType;
  prefixInput?: string;
  suffixInput?: string;
  maxLength?: number;
  directives?: IDirectiveTypes;
  //----------------------------------------
  // ------------select---------------
  // size?: SelectSize;
  dataList?: Array<T>;
  // mode?: NzSelectModeType;
  nzAllowClear?: boolean;
  nzMaxTagCount?: number;
  defaultValue?: any;
  dropdownClassName?: string | string[];
  isShowAllOption?: boolean;
  showSearchSelect?:boolean;
  selectBindingPropertyKey?: string,
  expandKey?: string,
  //----------------------------------------
  //-------------datePicker------------------
  disabled?: boolean;
  title?: string;
  dateFormat?: string;
  require?: boolean;
  disabledTime?:boolean;
  dateMode?: 'year' | 'month' | 'date' | 'quarter';
  //----------------------------------------
  //------------range picker ---------------
  rangePlaceHolder?: string[];
  rangeNameValue?: string[];
  rangeDefaultValue?: string[];
  maxDate?:string | undefined;
  minDate?:string | undefined | null;
  //------------input select ---------------
  selectPlaceHolder?: string;
  selectValueKey?: string;
  //------------input money ----------------
  fractional?: number;
  //------------quarter picker ----------------
  datePickerPlaceholder?: string;
  selectPlaceholder?: string;
  datePickerQuarterKey?: string;
  selectQuarterKey?: string;
  // defaultQuarterValue?: IQuarterPicker;
  //------------common----------------------
  nzSpan?: 24 | number;
  nzSm?: 12 | number;
  nzLg?: 6 | number;
  nzMd?: 12 | number;
  hideControl?: boolean;

  icon?:string;
  controlName:string;
}

export enum InputType {
  Input = 'input',
  DatePicker = 'datePicker',
  RangePicker = 'rangePicker',
  Select = 'select',
  TextArea = 'textArea',
  InputSelect = 'inputSelect',
  InputMoney = 'inputMoney',
  QuarterPicker = 'quarterPicker',
  MultiSelect = 'multiSelect',
}

export interface IDirectiveTypes {
  invoiceMassNonNumber?: boolean,
  invoiceMassNoneSpecialCharacter?: INoneSpecialCharacter,
  invoiceMassNoneUnikey?: boolean,
  invoiceMassUpperCase?: boolean
  invoiceMassOnlyNumber?: INoneSpecialCharacter,
  invoiceMassNoneSpace?: boolean,
  invoiceMassInputTrim?: boolean,
  invoiceMassTaxCode?:boolean
}

export interface INoneSpecialCharacter {
  active: boolean,
  allowKey: string
}