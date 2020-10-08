import { EIntelComponent } from './e-intel/e-intel.component';
import { ProfilPelesenComponent } from './profil-pelesen/profil-pelesen.component';
import { EPenguatkuasaanComponent } from './e-penguatkuasaan/e-penguatkuasaan.component';
import { EKlpComponent } from './e-klp/e-klp.component';
import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";

import { ManagementAuditComponent } from "./management-audit/management-audit.component";
import { ManagementUserComponent } from "./management-user/management-user.component";
import { MytaskComponent } from './mytask/mytask.component';
import { EAduanComponent } from './e-aduan/e-aduan.component';
import { TindakanEKompaunComponent } from './tindakan-e-kompaun/tindakan-e-kompaun.component';
import { TindakanERayuanComponent } from './tindakan-e-rayuan/tindakan-e-rayuan.component';
import { TindakanEAmaranComponent } from './tindakan-e-amaran/tindakan-e-amaran.component';
import { TindakanEMahkamahComponent } from './tindakan-e-mahkamah/tindakan-e-mahkamah.component';
import { TrackComponent } from './track/track.component';
import { TrackAssetComponent } from './track-asset/track-asset.component';
import { TrackReportComponent } from './track-report/track-report.component';

export const AdminRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "dashboard",
        component: DashboardComponent,
      },
      {
        path: "management",
        children: [
          {
            path: "users",
            component: ManagementUserComponent,
          },
          {
            path: "audit-trails",
            component: ManagementAuditComponent,
          },
        ],
      },
    ],
  },
  {
    path: "mytask",
    component: MytaskComponent,
  },
  {
    path: "e-klp",
    component: EKlpComponent,
  },
  {
    path: "e-penguatkuasaan",
    component: EPenguatkuasaanComponent,
  },
  {
    path: "e-aduan",
    component: EAduanComponent,
  },

  {
    path: "e-tindakan",
    children: [
      {
        path: "e-kompaun",
        component: TindakanEKompaunComponent,
      },
      {
        path: "e-rayuan",
        component: TindakanERayuanComponent,
      },
      {
        path: "e-amaran",
        component: TindakanEAmaranComponent,
      },
      {
        path: "e-mahkamah",
        component: TindakanEMahkamahComponent,
      },
    ],
  },
  {
    path: "profil-pelesen",
    component: ProfilPelesenComponent,
  },
  {
    path: "e-intel",
    component: EIntelComponent,
  },
  {
    path: "track",
    children: [
      {
        path: "track-asset",
        component: TrackAssetComponent,
      },
      {
        path: "track-report",
        component: TrackReportComponent,
      },
    ],
  }

];
