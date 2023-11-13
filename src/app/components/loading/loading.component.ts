import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild,
} from "@angular/core";
import { Subject, takeUntil } from "rxjs";
import { LoadingService } from "./loading.service";
import { ILoading } from "src/app/core/interfaces";

@Component({
  selector: "app-loading",
  templateUrl: "./loading.component.html",
  styleUrls: ["./loading.component.scss"],
})
export class LoadingComponent implements OnInit, OnDestroy {
  @ViewChild('loading', { static: true }) loadingTpl!: ElementRef;

  private destroy$ = new Subject();
  public isLoading = false;

  constructor(
    private loadingService: LoadingService,
    private renderer:Renderer2
  ) {}

  ngOnInit(): void {
    this.renderer.setStyle(this.loadingTpl?.nativeElement, 'display', 'none')
    this.loadingService.setLoadingObs
      .pipe(takeUntil(this.destroy$))
      .subscribe((resp: ILoading) => {
        this.renderer.setStyle(this.loadingTpl?.nativeElement, 'display', resp?.isLoading ? 'flex' : 'none')
        if (resp?.isLoading && resp?.time! > 0) {
          setTimeout(() => {
            this.renderer.setStyle(this.loadingTpl?.nativeElement, 'display', 'none')
          }, resp?.time);
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
  }
}
