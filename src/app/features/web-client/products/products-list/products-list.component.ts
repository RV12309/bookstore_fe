import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { DefaultValue } from "src/app/core/enums";
import { ISelectItem } from "src/app/core/interfaces";
import { GlobalService } from "src/app/core/services";

@Component({
  selector: "app-products-list",
  templateUrl: "./products-list.component.html",
  styleUrls: ["./products-list.component.scss"],
})
export class ProductsListComponent implements OnInit {
  public productsForm!: FormGroup;
  public DefaultValue = DefaultValue;
  public sortList: ISelectItem[] = [
    {
      name: "Giá: Thấp đến cao",
      code: "",
      value: "",
    },
    {
      name: "Giá: Cao đến thấp",
      code: "",
      value: "",
    },
  ];

  public dataBooks:any[] = []
  constructor(private fb: FormBuilder, private globalService: GlobalService) {}

  ngOnInit(): void {
    this.initForm();
    this.getBookList();
  }

  initForm() {
    this.productsForm = this.fb.group({
      priceRange: [[DefaultValue.MinPrice, DefaultValue.MaxPrice]],
    });
    this.productsForm.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }
  getBookList() {
    this.globalService.getBooksList({
      page: 0,
      size: 12,
    }).subscribe({
      next: resp => {
        this.dataBooks = resp.data?.content;
      }
    });
  }

  get priceRangeControl(): FormControl {
    return this.productsForm.get("priceRange") as FormControl;
  }
}
