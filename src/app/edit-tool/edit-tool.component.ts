import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { ToolsApiService } from '../http/tools-api.service';
import { typeOfTool } from '../types';

@Component({
  selector: 'app-edit-tool',
  templateUrl: './edit-tool.component.html',
  styleUrls: ['./edit-tool.component.scss']
})
export class EditToolComponent implements OnInit {

  public toolEditForm: FormGroup = this.fb.group({
    name: [''],
    typeOfTool: [''],
    quantity: [1],
    junkQuantity: [0],
    toolCabinetNumber: [0],
    toolShelfNumber: [0],
    toolPosition: [0], 
  });
  public toolList: object = typeOfTool; 
  constructor(private fb: FormBuilder, private toolsApiService: ToolsApiService, private router:  Router) { }

  ngOnInit(): void {}
  
  public addTool() {
    this.toolsApiService.addTools(this.toolEditForm.value).pipe(take(1)).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  public back() {        
      this.router.navigate(['']);  

  }
}



