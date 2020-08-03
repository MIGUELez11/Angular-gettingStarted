import { Component, OnInit } from '@angular/core';
import {NameTransferService} from "../name-transfer.service";

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.scss']
})
export class ParentComponentComponent implements OnInit {
  public name : Function;
  public message = "";
  constructor(private _nameService : NameTransferService) { }

  ngOnInit(): void {
    this.name = () => this._nameService.name;
  }

}
