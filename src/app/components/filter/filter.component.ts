import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  AfterViewInit,
  Output,
  EventEmitter,
} from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { PAGE_NUMBER_DEFAULT } from "src/app/core/constant/common.constant";
import { IFilterItem, InputType } from "src/app/core/interfaces";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.scss"],
})
export class FilterComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() filterKeys: IFilterItem<any>[] = [];
  @Input() pageNumber = 0;
  @Input() pageSize = PAGE_NUMBER_DEFAULT;

  @Output() onSearch = new EventEmitter<any>();

  public searchForm!: FormGroup;

  public InputType = InputType;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.searchForm = this.fb.group({});
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['filterKeys'].currentValue){
      this.initForm();
    }
  }
  ngOnInit(): void {
    this.initForm();
  }

  ngAfterViewInit(): void {}

  initForm() {
    console.log(this.filterKeys);
    const {queryParams} = this.route.snapshot;
    this.addMainForm(queryParams)
  }

  private addMainForm(queryParams:any){
    this.filterKeys.forEach((item) => {
      switch(item?.type){
        case InputType.Input:
          this.searchForm?.addControl(
            item?.controlName,
            this.addControl(queryParams[item?.controlName] || item?.defaultValue)
          )
          break;
        case InputType.Select:
          this.searchForm?.addControl(
            item?.controlName,
            this.addControl(queryParams[item?.controlName] || item?.dataList![2]?.code!)
          )
          break;
        default:
          break;
      }
    });
  }

  makeParams() {
    if (!this.searchForm) {
      return;
    }

    return {
      ...this.searchForm?.getRawValue(),
      page: this.pageNumber || 0,
      size: this.pageSize || PAGE_NUMBER_DEFAULT,
    };

  }

  /**
   *
   */
  submit() {
    const urlTree = this.router.createUrlTree([], {
      queryParams: { ...this.makeParams() },
    });
    this.router.navigateByUrl(urlTree);
    this.onSearch.emit(this.makeParams());
  }

  /**
   * TẠO FORM CONTROL FORM SEARCH FORM
   * @param controlValue
   * @returns
   */
  private addControl(controlValue: any = null): FormControl<any> {
    return this.fb.nonNullable.control(controlValue);
  }
}
