import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/core/services/modal';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent implements OnInit {

  public userData: any;
  public  options = {
    plugins: {
    //   datalabels: {
    //     display: true,
    //     align: 'bottom',
    //     color: '#fff',
    //   },
    // },
  }
}


  constructor(
    private userService: UserService,
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
    this.getStatistic();
  }

  public getStatistic(){
    this.userService.getStatistic().subscribe({
      next: (res) => {
        console.log(res);
        this.userData = {
          labels: Object.keys(res?.data?.userStatistic),
          datasets: [
             { data: Object.values(res?.data?.userStatistic),
              backgroundColor: ['yellow', 'aqua', 'pink']},
            ]
        }
      },
      error: (error) => this.modalService.alert({
        type: error,
        message: error.message
      })
    })
  }
}
