import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {NameTransferService} from "../name-transfer.service";

@Component({
  selector: 'app-learning-angular',
  templateUrl: './learning-angular.component.html',
  styleUrls: ['./learning-angular.component.scss']
})
export class LearningAngularComponent implements OnInit {
  
  @Input() public parentData;
  private _name = "";
  public data;

  @Output() public childEvent = new EventEmitter()
  
  constructor(private _nameService : NameTransferService) {}
  
  get name(): string {
    return this._name;
  }

  set name(value) {
    console.log("the name is: ", value);
    this._nameService.name = value;
    this._nameService.name$.emit(value);
  }

  public handleInput(event) {
    console.log(event);
    this._name = event;
    this._nameService.name = event;
  }

  public getData() {
    return ["red", "blue", "green", "red"].map((el, i) => i % 2 ? `The color is: ${el}` : `El color es: ${el}`);
  }

  public fireEvent() {
    console.log("fired", this._name);
    this.childEvent.emit(`${this._name}`)
  }

  public parseJson(data) {
    return JSON.stringify(data, null, 2);
  }

  ngOnInit(): void {
    this._name = this._nameService.name;
    this._nameService.name$.subscribe(value => {
      this.data = value;
    })
  }
}
