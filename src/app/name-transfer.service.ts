import {Injectable, EventEmitter} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ISubscribers} from "./subscribers";
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NameTransferService {
  private _name = "";
  private _url: string = "https://pokeapi.co/api/v2/pokemon";
  constructor(private http: HttpClient) { }

  public name$ = new EventEmitter<string>();
  
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
    this.name$.emit(this.name);
  }

  getData(): Observable<ISubscribers[]> {
    return this.http.get<ISubscribers[]>(this._url);
  }

}
