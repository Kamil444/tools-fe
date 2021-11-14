import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

import { IToolServiceData, ToolData } from '../types/Types-service-data';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  public data$: Observable<IToolServiceData>;
  private serviceSubject: BehaviorSubject<IToolServiceData>;

  constructor() {
    this.serviceSubject = new BehaviorSubject({});
    this.data$ = this.serviceSubject.asObservable().pipe(shareReplay({ bufferSize: 1, refCount: true }));
  }

  public addTools(tools: ToolData[]) {
    this.serviceSubject.next({ items: tools });
  }

}
