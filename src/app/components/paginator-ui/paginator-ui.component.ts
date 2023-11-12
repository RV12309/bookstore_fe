import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginator-ui',
  templateUrl: './paginator-ui.component.html',
  styleUrls: ['./paginator-ui.component.scss']
})
export class PaginatorUiComponent implements OnInit{

  @Input() first:number = 1;
  @Input() rows!:number;
  @Input() rowsPerPageOptions = [10, 20, 30];
  @Input() totalRecords:number = 100

  @Output() pageChange!: EventEmitter<any>;

  constructor(){
  }

  ngOnInit(): void {

  }

  onPageChange(event:any){
    this.pageChange?.emit(event);
  }
}
