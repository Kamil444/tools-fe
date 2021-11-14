import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {  map, take } from 'rxjs/operators';
import { ToolsApiService } from '../http/tools-api.service';
import { IToolServiceData } from '../types/Types-service-data';
import { DashboardService } from './dashboard.service';
import { typeOfTool, listQuantity, listName, Enums } from '../types';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AsyncPipe } from '@angular/common';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
   
  public componentData$: Observable<IToolServiceData>;
  public modalData$ : Observable<IToolServiceData>;
  public toolSearchForm: FormGroup = this.fb.group({
    name: [''], 
    toolType: [''], 
    limit: [10] 
  });
  public toolUpdate: FormGroup = this.fb.group({
    quantity: [0],
    junkQuantity: [0]
  })
  public toolList: object = typeOfTool;
  public listQuantity: object = listQuantity;
  public listName: object = listName;
  public test: Array<object> = []
  
 
  constructor(private dashboardService: DashboardService, private fb: FormBuilder, private router:  Router, private toolsApiService:ToolsApiService, private modalService:NgbModal) { 
    this.componentData$ = this.dashboardService.data$;    
    this.modalData$ = this.dashboardService.data$;
    
  }

  ngOnInit(): void {      
  }
 
  public addTool() {     
    this.router.navigate(['tools', 'edit']);
  }

  public warehouseRecepit(){
    this.router.navigate(['tools', 'warehousereceipt'])
  }
  public openModal(content: any, index: number){ 
    let modalDataArr: any ={}
    this.modalData$.pipe().subscribe(val => { modalDataArr = val.items![index]}).unsubscribe()
    console.log(modalDataArr)    
    this.modalService.open(content)    
    return this.test = modalDataArr
    
  }
  

  public search() {
    console.log(this.toolSearchForm.value);    
    this.toolsApiService.searchTool(this.toolSearchForm.value).pipe(take(1)).subscribe(
      (res) => {
        console.log(res)
        this.dashboardService.addTools(res.data);
      },
      (err) => {
        console.log(err)
      }
    );
  }
  
  public updateTool() {
    console.log(this.toolUpdate.value);
    this.toolsApiService.updateTool(this.toolUpdate.value).pipe(take(1)).subscribe(
      (res) => {
        console.log(res)
        this.dashboardService.addTools(res.data);
      },
      (err) =>{
        console.log(err)
      }
    )
  }
}
