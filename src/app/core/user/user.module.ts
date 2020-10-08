import { CalendarModule } from './../../examples/calendar/calendar.module';
import { UpdateProfileDetailComponent } from './update-profile-detail/update-profile-detail.component';
import { ERekodComponent } from './e-rekod/e-rekod.component';
import { ENotisComponent } from './e-notis/e-notis.component';
import { EKompaunComponent } from './e-kompaun/e-kompaun.component';
import { EFfbTransactionPurchaseComponent } from './e-ffb-transaction-purchase/e-ffb-transaction-purchase.component';
import { EFfbDirectoryComponent } from './e-ffb-directory/e-ffb-directory.component';
import { EFfbDeliveryComponent } from './e-ffb-delivery/e-ffb-delivery.component';
import { EFfbDashboardComponent } from './e-ffb-dashboard/e-ffb-dashboard.component';
import { EFfbComponent } from './e-ffb/e-ffb.component';
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
import { TagInputModule } from "ngx-chips";

import { RouterModule } from "@angular/router";
import { UserRoutes } from "./user.routing";
import { DashboardComponent } from "./dashboard/dashboard.component";

import { QuillModule } from "ngx-quill";
import { NgxDropzoneModule } from "ngx-dropzone";
import { OrgChartModule } from "angular-org-chart";

import { MatStepperModule } from "@angular/material/stepper";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { EAduanComponent } from './e-aduan/e-aduan.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    DashboardComponent,
    EAduanComponent,
    EFfbComponent,
    EFfbDashboardComponent,
    EFfbDeliveryComponent,
    EFfbDirectoryComponent,
    EFfbTransactionPurchaseComponent,
    EKompaunComponent,
    ENotisComponent,
    ERekodComponent,
    UpdateProfileDetailComponent,
    
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
    RouterModule.forChild(UserRoutes),
    QuillModule.forRoot(),
    NgxDropzoneModule,
    TagInputModule,
    OrgChartModule,
    MatStepperModule,
    MatFormFieldModule,
    MatButtonModule,
    NgbModule,
    CalendarModule
  ],
})
export class UserModule {}
