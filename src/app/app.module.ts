import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WarehouseRecepitComponent} from './warehouse-recepit/warehouse-recepit.component';
import { EditToolComponent } from './edit-tool/edit-tool.component';


@NgModule({
  declarations: [
    AppComponent,    
    DashboardComponent,
    WarehouseRecepitComponent,
    EditToolComponent,
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModalModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
