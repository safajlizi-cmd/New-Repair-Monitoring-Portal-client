import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }
  protected prepareHeader(): Object {
    
     let headers = new HttpHeaders();
      headers = headers.set('Accept', 'application/json');
      return { headers: headers }; }

  getListByStatus( status :any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Task/ListByStatus?status=${status}` ,this.prepareHeader()).pipe(map(res => res as any)); 
  }
  getListByStatusAndAssy( status :any , Assign:any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Task/GetBySA?status=${status}&Assigned=${Assign}` ,this.prepareHeader()).pipe(map(res => res as any)); 
  }
  getListByAssy(  Assign:any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Task/GetByAssy?Assigned=${Assign}` ,this.prepareHeader()).pipe(map(res => res as any)); 
  }
  getListByDossier( status :any , Assign:any, dossier :any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Task/GetByDossier?status=${status}&Assigned=${Assign}&dossierId=${dossier}` ,this.prepareHeader()).pipe(map(res => res as any)); 
  }
  getListByDossierAndAssy(Assign:any, dossier :any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Task/GetByDossierAndAss?Assigned=${Assign}&dossierId=${dossier}` ,this.prepareHeader()).pipe(map(res => res as any)); 
  }
  UpdateTaskStatus( id:any ,status :any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/Task/UpdateStatus?taskId=${id}&status=${status}` ,this.prepareHeader()).pipe(map(res => res as any)); 
  }
  UpdateTaskAssign( taskId:any ,assignId :any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/Task/Assigned?taskId=${taskId}&AssigId=${assignId}` ,this.prepareHeader()).pipe(map(res => res as any)); 
  }
}
