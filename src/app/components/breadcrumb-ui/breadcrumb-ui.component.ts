import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { MenuItem } from "primeng/api";
import { filter } from "rxjs";

@Component({
  selector: "app-breadcrumb-ui",
  templateUrl: "./breadcrumb-ui.component.html",
  styleUrls: ["./breadcrumb-ui.component.scss"],
})
export class BreadcrumbUiComponent implements OnInit {
  @Input() items!: MenuItem[];

  public home: MenuItem | undefined;
  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit() {
    console.log(this.route?.snapshot);
    const routeConfig = this.route.parent?.snapshot?.url;

    // routeConfig?.forEach(item => {
    //   console.log(item);
    //   this.items?.push({
    //     label: "Trang chủ",
    //     iconClass: "hidden",
    //     routerLink: "/seller",
    //   })
    // });

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.items = this.createBreadcrumbs(this.route.root);
        console.log(this.items);

      });

    // this.items = [
    //   { label: "Computer" },
    //   { label: "Notebook" },
    //   { label: "Accessories" },
    //   { label: "Backpacks" },
    //   { label: "Item" },
    // ];

    this.home = {
      label: "Trang chủ",
      iconClass: "hidden",
      routerLink: "/seller",
    };
  }

  private createBreadcrumbs(
    route: ActivatedRoute,
    routerLink: string = "",
    breadcrumbs: any[] = [],
  ): any {
    const children: ActivatedRoute[] = route.children;
    if (children.length === 0) {
      return breadcrumbs;
    }
    for (const child of children) {
      const routeURL: string = child.snapshot.url
        .map((segment) => segment.path)
        .join("/");
      if (routeURL !== "") {
        routerLink += `/${routeURL}`;
      }
      const label = child.snapshot.data["breadcrumb"];
      if (label) {
        breadcrumbs.push({ label, routerLink });
      }
      return this.createBreadcrumbs(child, routerLink, [...new Set(breadcrumbs)]);
    }
  }
}
