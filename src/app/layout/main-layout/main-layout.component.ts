import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { SharingServiceService } from '../../sharing-service.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit { 

  subscription: Subscription;
  flag:any=true;

  constructor(private SharingServiceService: SharingServiceService) {  
    this.subscription = this.SharingServiceService.getMessage().subscribe(message => {
      console.log("onsubscribe")
      this.flag = message.message; 
      console.log(this.flag)
    });
  }

  ngOnInit() {
  }

}
