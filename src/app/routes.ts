import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { AuthGuard } from "./core/guards/auth/auth.guard";

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children:[
      {
        path: '',
        loadChildren: () => import('src/app/core/layouts/web-client/client-layout/client-layout.module').then(m => m.ClientLayoutModule),
      },
      {
        path: 'auth',
        loadChildren: () => import('src/app/core/layouts/web-client/auth-layout/auth-layout.module').then(m => m.AuthLayoutModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'seller',
        loadChildren: () => import('src/app/core/layouts/seller-layout/seller-layout.module').then(m => m.SellerLayoutModule),
        // canActivate: [LoggedGuard, SellerGuard]
      },
      {
        path: 'components',
        loadChildren: () => import('src/app/components/components.module').then(m => m.ComponentsModule)
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ]
  }

];
