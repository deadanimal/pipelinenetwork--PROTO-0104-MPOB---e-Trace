import { CalendarModule } from './../../examples/calendar/calendar.module';
import { TindakanERayuanComponent } from './tindakan-e-rayuan/tindakan-e-rayuan.component';
import { TindakanEMahkamahComponent } from './tindakan-e-mahkamah/tindakan-e-mahkamah.component';
import { TindakanEKompaunComponent } from './tindakan-e-kompaun/tindakan-e-kompaun.component';
import { TindakanEAmaranComponent } from './tindakan-e-amaran/tindakan-e-amaran.component';
import { ProfilPelesenComponent } from './profil-pelesen/profil-pelesen.component';
import { ETindakanComponent } from './e-tindakan/e-tindakan.component';
import { EPenguatkuasaanComponent } from './e-penguatkuasaan/e-penguatkuasaan.component';
import { EKlpComponent } from './e-klp/e-klp.component';
import { EIntelComponent } from './e-intel/e-intel.component';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  AccordionModule,
  BsDropdownModule,
  ModalModule,
  ProgressbarModule,
  TabsModule,
  TooltipModule,
} from "ngx-bootstrap";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { LoadingBarModule } from "@ngx-loading-bar/core";

import { RouterModule } from "@angular/router";
import { AdminRoutes } from "./admin.routing";
import { QuillModule } from "ngx-quill";
import { NgxDropzoneModule } from "ngx-dropzone";
import { OrgChartModule } from "angular-org-chart";
import { LeafletModule } from "@asymmetrik/ngx-leaflet";
// import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { environment } from "src/environments/environment";
import * as mapbox from "mapbox-gl";
import * as MapboxDraw from "@mapbox/mapbox-gl-draw";
(mapbox as any).accessToken = environment.mapbox.accessToken;
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";

import { DashboardComponent } from "./dashboard/dashboard.component";


import { ManagementAuditComponent } from "./management-audit/management-audit.component";
import { ManagementUserComponent } from "./management-user/management-user.component";

import { MatStepperModule } from "@angular/material/stepper";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { EAduanComponent } from './e-aduan/e-aduan.component';
import { MytaskComponent } from './mytask/mytask.component';
import { TrackComponent } from './track/track.component';


@NgModule({
  declarations: [
    ManagementAuditComponent,
    ManagementUserComponent,
    DashboardComponent,
    EAduanComponent,
    EIntelComponent,
    EKlpComponent,
    EPenguatkuasaanComponent,
    ETindakanComponent,
    MytaskComponent,
    ProfilPelesenComponent,
    TindakanEAmaranComponent,
    TindakanEKompaunComponent,
    TindakanEMahkamahComponent,
    TindakanERayuanComponent,
    TrackComponent
  ],
  imports: [
    CommonModule,
    AccordionModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    ProgressbarModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    LoadingBarModule,
    NgxDatatableModule,
    RouterModule.forChild(AdminRoutes),
    QuillModule.forRoot(),
    NgxDropzoneModule,
    OrgChartModule,
    MatStepperModule,
    MatFormFieldModule,
    MatButtonModule,
    LeafletModule,
    CalendarModule,
  ],
})
export class AdminModule {}
