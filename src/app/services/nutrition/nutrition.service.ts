import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from 'protractor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NutritionService {
  _url: any = 'https://api.edamam.com/api/nutrition-data?app_id=f91210f7&app_key=bea52c589f935632465b379a24de1464&nutrition-type=cooking&ingr=food';
  Posturl: any = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

  constructor(private http: HttpClient) { }


  getData() {
    return this.http.get<Config>(this._url);
  }

  postData(data: any): Observable<any> {
    const headers = { 'Content-Type': 'application/json' }
    return this.http.post(this.Posturl + `${data}`, { 'headers': headers })
  }
}


