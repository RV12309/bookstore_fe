import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit{

  public categoryId: any

  constructor(
    private route: Router,
    private activatedRoute: ActivatedRoute,
  ){
    this.categoryId = this.activatedRoute.snapshot.paramMap.get('category');
  }
  ngOnInit(): void {
  }

}
