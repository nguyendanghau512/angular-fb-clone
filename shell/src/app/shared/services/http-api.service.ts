import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpOption } from '../model/http-option.model';

@Injectable({
  providedIn: 'root'
})
export class HttpApiService<T> {

  constructor(
    private http: HttpClient
  ) { }
  public get(url: string, options?: HttpOption) {
    return this.http.get<T>(url, options);
  }
  public post(url: string, data: any, options?: HttpOption) {
    return this.http.post<T>(url, data, options);
  }
  public put(url: string, data: any, options?: HttpOption) {
    return this.http.put<T>(url, data, options);
  }
  public delete(url: string, options?: HttpOption) {
    return this.http.delete<T>(url, options);
  }
}
