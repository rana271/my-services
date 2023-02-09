import { Component } from '@angular/core';
import {MyserviceService} from './myservice.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[MyserviceService]
})
export class AppComponent {
  profile:any;
  val:any;
  
  constructor(private _appService:MyserviceService){ }
  ngOnInit(): void { 
    this._appService.get().subscribe(data => 
      this.profile = data);
  }
  



}
