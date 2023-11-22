import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ClaimComponent } from './claim/claim.component';
import { DocumentComponent } from './document/document.component';
import { InsurancePlanComponent } from './insurance-plan/insurance-plan.component';
import { InsurancePolicyComponent } from './insurance-policy/insurance-policy.component';
import { InsuranceSchemeComponent } from './insurance-scheme/insurance-scheme.component';
import { PaymentComponent } from './payment/payment.component';
import { SchemeDetailComponent } from './scheme-detail/scheme-detail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AdminComponent } from './admin/admin.component';
import { HTTP_INTERCEPTORS, HttpClientModule}from '@angular/common/http';
import { JwtInterceptor } from './jwt.interceptor';
import { EmployeeComponent } from './employee/employee.component';
import { CustomerComponent } from './customer/customer.component';
import { AgentComponent } from './agent/agent.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import { AddInsuranceSchemeComponent } from './add-insurance-scheme/add-insurance-scheme.component';
import { UpdateInsuranceSchemeComponent } from './update-insurance-scheme/update-insurance-scheme.component';
import { DeleteInsuranceSchemeComponent } from './delete-insurance-scheme/delete-insurance-scheme.component';
import { AddInsurancePlanComponent } from './add-insurance-plan/add-insurance-plan.component';
import { UpdateInsurancePlanComponent } from './update-insurance-plan/update-insurance-plan.component';
import { DeleteInsurancePlanComponent } from './delete-insurance-plan/delete-insurance-plan.component';
import { AddagentComponent } from './addagent/addagent.component';
import { UpdateAgentComponent } from './update-agent/update-agent.component';
import { DeleteAgentComponent } from './delete-agent/delete-agent.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClaimComponent,
    DocumentComponent,
    InsurancePlanComponent,
    InsurancePolicyComponent,
    InsuranceSchemeComponent,
    PaymentComponent,
    SchemeDetailComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    LoginComponent,
    ContactUsComponent,
    AdminComponent,
    EmployeeComponent,
    CustomerComponent,
    AgentComponent,
    AddInsuranceSchemeComponent,
    UpdateInsuranceSchemeComponent,
    DeleteInsuranceSchemeComponent,
    AddInsurancePlanComponent,
    UpdateInsurancePlanComponent,
    DeleteInsurancePlanComponent,
    AddagentComponent,
    UpdateAgentComponent,
    DeleteAgentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,HttpClientModule
    ,MatButtonModule,MatDialogModule,MatIconModule,MatToolbarModule,FormsModule
    
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS, useClass: JwtInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
