import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, take, tap } from 'rxjs';
import { Photo } from './photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  favCounter = 0

  subj = new Subject<number>()
  obs!:Observable<number>

  url = "http://localhost:3000/photos"
  constructor(private http:HttpClient) { }

  getObs(){
  return this.obs = this.subj.asObservable()
    // return this.obs = new Observable((sub)=>{
    //   setTimeout(()=>{
    //     this.addLike()
    //     sub.next(this.favCounter)
    //   })
    // })
  }

  getPhotos(){
    return this.http.get<Photo[]>(this.url)
  }

  deletePhoto(id:number) {
    return this.http.delete(`${this.url}/${id}`)
  }

  addLike(){
    this.favCounter++
    this.subj.next(this.favCounter)
  }

  // getyP(){
  //   return fetch(this.url).then(res=>res.json()).then(res=>{
  //     console.log(res)
  //     return res
  //   })
  // }
}
