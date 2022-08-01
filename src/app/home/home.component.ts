import { Component, OnInit } from '@angular/core';
import { Subscription, tap } from 'rxjs';
import { Photo } from '../photo';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  fav = 0

  photos!:Photo[]

  lastDeleted:Photo|undefined

  subGet!:Subscription
  subDel!:Subscription

  constructor(private pSrv:PhotoService) { }

  ngOnInit(): void {
    this.fav = this.pSrv.favCounter
    this.subGet = this.pSrv.getPhotos().subscribe((res)=>{
      this.photos = res
    })

    this.pSrv.getObs().subscribe((res)=>{
      this.fav = res
    })
  }

  delete(p:Photo) {
    if(confirm("Confermare l'eliminazione?"))
    this.subDel = this.pSrv.deletePhoto(p.id).subscribe((res)=>{
      this.lastDeleted = p
      this.photos = this.photos.filter(e=>e.id!=p.id)
    })
  }

  ngOnDestroy() {
    this.subDel.unsubscribe()
    this.subGet.unsubscribe()
  }


}
