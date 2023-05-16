import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }
  protected prepareHeader(): Object {
    
     let headers = new HttpHeaders();
      headers = headers.set('Accept', 'application/json');
      return { headers: headers }; }

  getByDossier(id:any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Documents/Dossier?id=${id}`,this.prepareHeader()).pipe(map(res => res as any)); 
  }
  getByAssignment(id:any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Documents/Assign?id=${id}`,this.prepareHeader()).pipe(map(res => res as any)); 
  }
  getByWorkingOrder(id:any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Documents/Work?id=${id}`,this.prepareHeader()).pipe(map(res => res as any)); 
  }
  delete(id:any): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/Document?id=${id}`, this.prepareHeader()).pipe(map(res => res as any));
   }
   addDocument(url:any ,file:any,option:any,optionId:any,dossierId:any): Observable<any> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    return this.http.post<any>(`${this.apiUrl}/Documents/upload?option=${option}&optionId=${optionId}&dossierId=${dossierId}` ,formData , {
      reportProgress: true,
      responseType: 'json'
    }).pipe(map(res => res as any));
   }
}
