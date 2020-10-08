import { ENotisComponent } from './e-notis/e-notis.component';
import { UpdateProfileDetailComponent } from './update-profile-detail/update-profile-detail.component';
import { ERekodComponent } from './e-rekod/e-rekod.component';
import { EKompaunComponent } from './e-kompaun/e-kompaun.component';
import { EFfbTransactionPurchaseComponent } from './e-ffb-transaction-purchase/e-ffb-transaction-purchase.component';
import { EFfbDirectoryComponent } from './e-ffb-directory/e-ffb-directory.component';
import { EFfbDeliveryComponent } from './e-ffb-delivery/e-ffb-delivery.component';
import { EFfbDashboardComponent } from './e-ffb-dashboard/e-ffb-dashboard.component';
import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { EAduanComponent } from './e-aduan/e-aduan.component';
export const UserRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "dashboard",
        component: DashboardComponent,
      },
      {
        path: "e-aduan",
        component: EAduanComponent,
      },
      {
        path: "e-ffb",
        children: [
          {
            path: "e-ffb-dashboard",
            component: EFfbDashboardComponent,
          },
          {
            path: "e-ffb-delivery",
            component: EFfbDeliveryComponent,
          },
          {
            path: "e-ffb-directory",
            component: EFfbDirectoryComponent,
          },
          {
            path: "e-ffb-transaction-purchase",
            component: EFfbTransactionPurchaseComponent,
          },
        ],
      },
      {
        path: "e-kompaun",
        component: EKompaunComponent,
      },
      {
        path: "e-notis",
        component: ENotisComponent
        
      },
      {
        path: "e-rekod",
        component: ERekodComponent,
      },
      {
        path: "update-profile-detail",
        component: UpdateProfileDetailComponent,
      },
    ],
  },

];
