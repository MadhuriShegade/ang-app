import { Component, OnInit } from '@angular/core';

import { SharingServiceService } from '../../sharing-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  flag:any=true;
  constructor(private sharingServiceService: SharingServiceService) {}

  onSelect(): void {  
    console.log("onclick");
    this.sharingServiceService.sendMessage(this.flag=!this.flag);
  }

  


  ngOnInit() {
  }

}
