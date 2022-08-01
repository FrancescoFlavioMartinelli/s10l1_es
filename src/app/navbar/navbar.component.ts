import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  fav = 0

  constructor(private pSrv:PhotoService) { }

  ngOnInit(): void {
    this.pSrv.getObs().subscribe((res)=>{
      this.fav = res
    })
  }

}
