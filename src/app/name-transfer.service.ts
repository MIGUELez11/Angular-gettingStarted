import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NameTransferService {
  private _name = "";
  constructor() { }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

}
