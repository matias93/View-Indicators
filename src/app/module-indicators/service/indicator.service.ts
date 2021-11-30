import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndicatorService {

  constructor(private _api:HttpClient) { }

  private urlIndicators = environment.apiIndicators;


  getUf():Observable<any>{
    return this._api.get(`${this.urlIndicators}/uf`)
  }

  getIvp():Observable<any> {
    return this._api.get(`${this.urlIndicators}/ivp`)
  }

  getDolar():Observable<any> {
    return this._api.get(`${this.urlIndicators}/dolar`)
  }
 
  getDolarIntercambio():Observable<any> {
    return this._api.get(`${this.urlIndicators}/dolar_intercambio`)
  }

  getEuro():Observable<any> {
    return this._api.get(`${this.urlIndicators}/euro`)
  }

  getUtm():Observable<any> {
    return this._api.get(`${this.urlIndicators}/utm`)
  }

  getIpc():Observable<any> {
    return this._api.get(`${this.urlIndicators}/ipc`)
  }

  getImacec():Observable<any> {
    return this._api.get(`${this.urlIndicators}/imacec`)
  }
  

}
