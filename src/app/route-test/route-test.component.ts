import { Component, OnInit } from '@angular/core';
import { NameTransferService } from '../name-transfer.service';

@Component({
  selector: 'app-route-test',
  templateUrl: './route-test.component.html',
  styleUrls: ['./route-test.component.scss']
})
export class RouteTestComponent implements OnInit {
  public name = "";
  constructor(private _nameService: NameTransferService) { }

  ngOnInit(): void {
    this.name = this._nameService.name;
    this._nameService.name$.subscribe(value => this.name = value);
  }

}
