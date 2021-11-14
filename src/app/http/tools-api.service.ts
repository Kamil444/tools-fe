import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToolsApiService {

  constructor(private http: HttpClient) { }

  public addTools(params: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/tools/add', params, {
      headers: { 'Content-type': 'application/json' }
    })
  }

  public fetchAllTools(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/tools/all',{
      headers: { 'Content-type': 'application/json' }
    })
  }

  public fetchToolById(toolId: string): Observable<any> {
    return this.http.get<any>('http://localhost:3000/tools/' + toolId,{
      headers: { 'Content-type': 'application/json' }
    })
  }

  public removeToolById(toolId: string): Observable<any> {
    return this.http.delete<any>('http://localhost:3000/tools/' + toolId,{
      headers: { 'Content-type': 'application/json' }
    })
  }

  public searchTool(query: any): Observable<any> {
    return this.http.get<any>('http://localhost:3000/tools/search', {
      headers: { 'Content-type': 'application/json' },
      params: query
    })
  }

  public updateTool(params: any): Observable<any> {
    return this.http.put<any>('http://localhost:3000/tools/', {
      headers: {'Content-type': 'application/json'}
    } )   
  }

}
