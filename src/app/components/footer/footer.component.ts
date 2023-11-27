import { Component, OnInit } from '@angular/core';
import { BRANCH_NAME } from "src/app/core/constant/common.constant";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public BRANCH_NAME = BRANCH_NAME;
  ngOnInit(): void {
  }
}
