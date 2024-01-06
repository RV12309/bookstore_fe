import { Component, OnInit } from '@angular/core';
import { ITitleTable } from 'src/app/core/interfaces/table.interface';
import { ModalService } from 'src/app/core/services/modal';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  public titleTable: ITitleTable[] = [
    {
      title: 'Mã người dùng'
    },
    {
      title: 'Tên đăng nhập'
    }
  ];
  public dataTable: any[] = [];
  public total = 0;
  constructor(
    private modalService: ModalService,
    private userService: UserService
  ){

  }

  ngOnInit(): void {
    // this.getList();
    this.getAll();
  }

  getAll(){
    const params = {
      page: 0,
      size: 5,
      type: 'SELLER'
    }
    this.userService.getUserList(params)
    .subscribe({
      next: resp => {
        this.dataTable = resp.data;
        this.total = this.dataTable?.length
      }
    })
  }

  view(item: any){
  }

  lock(item: any){
    this.modalService.confirm({
      message: 'Bạn chắc chắn khóa người dùng này?',
      accept: () => {
        this.userService.lockUser(item?.id as string)
        .subscribe({
          next: () => {
            this.modalService.alert(
              {
                type: 'success',
                message: 'Khóa thành công',
              }
            );
            this.refreshData();
          },
          error: error => {
            this.modalService.alert(
              {
                type: 'error',
                message: error?.error?.message || 'Đã có lỗi xảy ra vui lòng thử lại sau',
                btnOkName: 'Đóng',
              }
            )
          }
        })
      }
    })

  }
  refreshData(){
    this.getAll();
  }

}
