import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LyricsService {

  constructor(private http: HttpClient) { }

  getLyrics(performer: string, musicName:string){
    return this.http.get('https://api.lyrics.ovh/v1/'+performer+'/'+musicName).toPromise();
  }
}
