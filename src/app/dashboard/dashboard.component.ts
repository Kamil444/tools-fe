import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,} from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import {  map, take } from 'rxjs/operators';
import { ToolsApiService } from '../http/tools-api.service';
import { IToolServiceData } from '../types/Types-service-data';
import { DashboardService } from './dashboard.service';
import { typeOfTool, listQuantity, listName, Enums } from '../types';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';





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
  public enumToolList: object = typeOfTool;
  public enumListQuantity: object = listQuantity;
  public enumListName: object = listName;
  private test: BehaviorSubject<any> = new BehaviorSubject({})
  public qqqq: any
  
 
  constructor(private dashboardService: DashboardService, private fb: FormBuilder, private router:  Router, private toolsApiService:ToolsApiService, private modalService:NgbModal) { 
    this.componentData$ = this.dashboardService.data$;    
    this.modalData$ = this.test;
    
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
    
    this.componentData$.pipe(take(1)).subscribe(val => { this.qqqq = val.items![index]})    
    console.log(this.qqqq)    
    this.modalService.open(content)     
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
