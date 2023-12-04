import { Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { DATA_KEY } from "src/app/core/constant/common.constant";
import { ITablePageChange, ITitleTable } from "src/app/core/interfaces/table.interface";

@Component({
  selector: 'app-table-ui',
  templateUrl: './table-ui.component.html',
  styleUrls: ['./table-ui.component.scss']
})
export class TableUiComponent implements OnInit{

  @ContentChild('tableBody', { static: false }) tableBody!: TemplateRef<any>;
  @ContentChild('tableAction', { static: false }) tableAction!: TemplateRef<any>;

  @Input() headerTable = '';
  @Input() total = 0;
  @Input() isRefresh = true;
  @Input() paginator = true;
  @Input() dataTable:any[] = [];
  @Input() rows = 5;
  @Input() rowsPerPageOptions = [5, 10];
  @Input() currentPageReportTemplate = "";
  @Input() showCurrentPageReport = false;
  @Input() titleTable:ITitleTable[] = [];
  @Input() checkbox = true;
  @Input() radio = false;
  @Input() isSearch = false;
  @Input() placeholderSearch = "Tìm kiếm";
  @Input() showAction = false;
  @Input() actionWidth = '';
  @Input() scrollable = true;
  @Input() scrollHeight = '500px';
  @Input() showFirstLastIcon = false;
  @Input() dataKey = DATA_KEY;
  @Input() sortIcon = '';
  @Input() selectionPageOnly = false;
  @Input() showHeaderTable = true;

  @Output() searchChange = new EventEmitter<string>();
  @Output() refreshData = new EventEmitter<any>();
  @Output() onPage = new EventEmitter<any>();
  @Output() rowsChange = new EventEmitter<any>();
  @Output() firstChange = new EventEmitter<any>();
  @Output() selectAllChange = new EventEmitter<any>();
  @Output() selectionChange = new EventEmitter<any>();
  @Output() onRowSelect = new EventEmitter<any>();
  @Output() onRowUnselect = new EventEmitter<any>();


  checked: boolean = false;

  public products = [
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
    }
  ];
  public dataTableSkeleton = [1,2,3,4,5];

  public selectedProducts:any[] = [];

  ngOnInit(): void {
  }

  searchTableChange(event:any){
    this.searchChange.emit(event?.target?.value)
  }

  pageChange(e:any){
    console.log(e);
    const infoPaginator:ITablePageChange = {
      ...e,
      pageIndex: e?.first/e?.rows,
      pageNumber: (e?.first/e?.rows) + 1
    }
    console.log(infoPaginator);
    this.onPage.emit(infoPaginator);
  }

  rowsTableChange(e:number){
    this.rowsChange.emit(e);
  }

  firstTableChange(e:number){
    this.firstChange.emit(e);
  }

  checkboxAllChange(e:any){
    console.log(e);
    this.selectAllChange.emit(e)
  }

  checkboxChange(e:any){
    console.log(e);
    this.selectionChange.emit(e)
  }

  rowSelect(e:any){
    this.onRowSelect.emit(e);
  }

  rowUnselect(e:any){
    this.onRowUnselect.emit(e);
  }
}
