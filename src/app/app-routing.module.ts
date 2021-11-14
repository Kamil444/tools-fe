import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditToolComponent } from './edit-tool/edit-tool.component';
import { WarehouseRecepitComponent } from './warehouse-recepit/warehouse-recepit.component';

const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'tools/edit', component: EditToolComponent},
  { path: 'tools/warehousereceipt', component: WarehouseRecepitComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
