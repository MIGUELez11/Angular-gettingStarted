import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {NameTransferService} from "../name-transfer.service";

@Component({
  selector: 'app-learning-angular',
  templateUrl: './learning-angular.component.html',
  styleUrls: ['./learning-angular.component.scss']
})
export class LearningAngularComponent implements OnInit {
  
  @Input() public parentData;
  public name = "";
  @Output() public childEvent = new EventEmitter()
  
  constructor(private _nameService : NameTransferService) {}
  
  public handleInput(event) {
    console.log(event);
    this.name = event;
    this._nameService.name = event;
  }

  public getData() {
    return ["red", "blue", "green", "red"].map((el, i) => i % 2 ? `The color is: ${el}` : `El color es: ${el}`);
  }

  public fireEvent() {
    console.log("fired", this.name);
    this.childEvent.emit(`${this.name}`)
  }

  ngOnInit(): void {
    this.name = this._nameService.name;
  }
}
