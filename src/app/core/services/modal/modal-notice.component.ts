import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'invoice-mass-modal-notice',
  template: `
    <!-- <nz-space nzDirection="vertical" [nzSize]="16">
      <ng-container *ngIf="modalType?.iconUrl">
        <div *nzSpaceItem class="alert-icon-wrap">
          <div class="alert-icon-inner" [ngClass]="modalType.type">
            <img [src]="modalType.iconUrl"
                 class="icon-size-large alert-icon" alt=""/>
          </div>
        </div>
      </ng-container>
      <ng-container *ngIf="heading">
        <h3 *nzSpaceItem class="h3 text-center">
          {{ heading | translate }}
        </h3>
      </ng-container>
      <ng-container *ngIf="message">
        <div *nzSpaceItem class="p1 color-text-ink-light text-center">
          {{ message | translate }}
        </div>
      </ng-container>
      <ng-container  *ngIf="messageHTML">
        <div *nzSpaceItem [innerHTML]="messageHTML | translate "></div>
      </ng-container>
    </nz-space>

    <div class="modal-footer justify-content-center">
      <div nz-row [nzGutter]="[12, 12]">
        <div nz-col nzXs="24" class="gutter-row">
          <button nz-button class="ant-btn-width-full"  (click)="acceptModal()" >
            {{ btnOkName | translate }}
          </button>
        </div>
      </div>
    </div> -->
    <span>Notification</span>
  `,
  styleUrls: []
})

export class ModalNoticeComponent {
  @Input() heading!: string;
  @Input() message!: string;
  @Input() messageHTML!: string;
  @Input() btnOkName!: string;
  @Input() modalType!: any;
  @Input() accept!: () => void;

  @HostListener('document:keydown.escape', ['$event']) onEscapeEvent() {
    // this.modal.destroy();
  }

  @HostListener('document:keydown.enter', ['$event']) onEnterEvent() {
    // this.modal.destroy();
  }

  constructor(
  ) {
  }

  public acceptModal() {
    if (this.accept) {
      this.accept();
    }

    // this.modal.destroy();
  }
}

