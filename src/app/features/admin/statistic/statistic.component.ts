import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/core/services/modal';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent implements OnInit {

  constructor(
    private userService: UserService,
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
    this.getStatistic();
  }

  public getStatistic(){
    this.userService.getStatistic().subscribe({
      next: (res) => console.log(res),
      error: (error) => this.modalService.alert({
        type: error,
        message: error.message
      })
    })
  }
}
