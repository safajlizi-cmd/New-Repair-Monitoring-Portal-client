import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }
  protected prepareHeader(): Object {
     let headers = new HttpHeaders();
      headers = headers.set('Accept', 'application/json');
      return { headers: headers }; }

   UpdatePassword(password:any, id:any ): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/User/update?password=${password}&id=${id}` ,this.prepareHeader()).pipe(map(res => res as any));
  }
}
