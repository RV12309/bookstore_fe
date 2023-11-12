import { Injectable } from '@angular/core';
import { IFilterItem, ISelectItem } from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor() { }

  public renderList(
    list:any[] = [],
    nameKey:string = 'name',
    codeKey:string = 'value',
    valueKey:string = 'value'

  ){
    return list?.map(i => {
      return {
        name: i[nameKey],
        code: i[codeKey],
        value: i[valueKey]
      }
    })
  }

  public rerenderList(
    filtersData:IFilterItem<any>[],
    newItemDataList:any[],
    controlName = 'name',
  ){
    const mapIndex = filtersData?.findIndex(i => i?.controlName === controlName);
    if(mapIndex !== -1){
      filtersData[mapIndex]['dataList'] = newItemDataList
    }
    return filtersData;
  }
}
