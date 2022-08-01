import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Photo } from '../photo';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() photo!:Photo

  @Output() delEvent = new EventEmitter<Photo>();

  constructor(private pSrv:PhotoService) { }

  ngOnInit(): void {
  }

  like(){
    this.pSrv.addLike()

  }
  del(){
    this.delEvent.emit(this.photo)
  }

}
