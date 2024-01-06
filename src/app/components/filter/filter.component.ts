import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  AfterViewInit,
  Output,
  EventEmitter,
  OnDestroy,
} from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Subject, takeUntil } from "rxjs";
import { PAGE_NUMBER_DEFAULT } from "src/app/core/constant/common.constant";
import { IFilterItem, InputType } from "src/app/core/interfaces";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.scss"],
})
export class FilterComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  @Input() filterKeys: IFilterItem<any>[] = [];
  @Input() pageNumber = 0;
  @Input() pageSize = PAGE_NUMBER_DEFAULT;

  @Output() onSearch = new EventEmitter<any>();
  @Output() formFilterChange = new EventEmitter();

  public searchForm!: FormGroup;
  public InputType = InputType;

  private destroy$ = new Subject<void>();
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['filterKeys'].currentValue){
      this.initForm();
    }
  }
  ngOnInit(): void {
    this.initForm();
    // emit giá trị của form khi cố sự thay đổi mà không cần click submit form
    this.searchForm.valueChanges
    .pipe(
      takeUntil(this.destroy$)
    )
    .subscribe(formValue => {
      this.formFilterChange.emit(formValue);
    })
  }

  ngAfterViewInit(): void {}

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  initForm() {
    this.searchForm = this.fb.group({});
    const {queryParams} = this.route.snapshot;
    this.addMainForm(queryParams)
  }

  private addMainForm(queryParams:any){
    this.filterKeys.forEach((item) => {
      item = {...item};
      const controlValue = queryParams[item?.controlName];
      switch(item?.type){
        case InputType.Input:
          this.searchForm?.addControl(
            item?.controlName,
            this.addControl(queryParams[item?.controlName] || item?.defaultValue)
          )
          break;
        case InputType.Select:
          let selectValue;
          if(controlValue === '' || controlValue === 'all'){
            selectValue = 'all'
          }else{
            if(controlValue){
              selectValue = item?.dataList?.find(i => i?.value == controlValue)
            }
          }
          this.searchForm?.addControl(
            item?.controlName,
            this.addControl(selectValue)
          )
          break;
        case InputType.InputNumber:
          this.searchForm?.addControl(
            item?.controlName,
            this.addControl(queryParams[item?.controlName] || item?.defaultValue)
          )
          break;
        case InputType.DatePicker:
          this.searchForm?.addControl(
            item?.controlName,
            this.addControl(queryParams[item?.controlName] || item?.defaultValue)
          )
          break;
        default:
          break;
      }
    });
  }

  makeMainParams(params:any){
    const formValue = this.searchForm?.getRawValue();
    this.filterKeys.forEach(
      (item:IFilterItem<any>, index: number) => {
        switch(item?.type){
          case InputType.Input:
            break;
          case InputType.Select:
            params[item?.controlName] = formValue[item?.controlName]?.value;
            break;
        }
      }
    );
    return params;
  }

  makeParams() {
    if (!this.searchForm) {
      return;
    }
    const initParams = {
      page: this.pageNumber || 0,
      size: this.pageSize || PAGE_NUMBER_DEFAULT,
    }
    const mainFilterParams = this.makeMainParams(initParams)
    return {
      ...this.searchForm?.getRawValue(),
      ...mainFilterParams
    };

  }

  /**
   *
   */
  submit() {
    const urlTree = this.router.createUrlTree([], {
      queryParams: { ...this.makeParams() },
      preserveFragment: true,
      queryParamsHandling: "merge"
    });
    this.router.navigateByUrl(urlTree);
    this.onSearch.emit(this.makeParams());
  }

  /**
   * TẠO FORM CONTROL FORM SEARCH FORM
   * @param controlValue
   * @returns
   */
  private addControl(controlValue: any): FormControl<any> {
    return this.fb.control(controlValue) as FormControl;
  }

  clearSearch(){
    this.searchForm.reset();
  }
}
