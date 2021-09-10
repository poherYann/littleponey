import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Pony} from "./pony";

@Injectable({
  providedIn: 'root'
})
export class PonyService {

  url = "http://www.ludivinecrepin.fr/api/";

  httpOption = {
    headers: new HttpHeaders({
      'Content-type' : 'applicaton/json',
    })
  }

  constructor(private http: HttpClient) { }

  getAllPonies(): Observable<Pony[]>{
    return this.http.get<Pony[]>(this.url+'pony-get.php', this.httpOption);
  }

  getPony(id: number): Observable<Pony>{
    return this.http.get<Pony>(this.url+'pony-get-id.php' + id, this.httpOption);
  }

  addPony(p: Pony): void{
    this.http.post<Pony>(this.url+'pony-add.php', p, this.httpOption).subscribe();
  }

  /*updatePony(p : Pony): Observable<Pony>{
    this.http.put<Pony>(this.url+ 'pony-update.php', p, this.httpOption).subscribe();
  }*/
}
