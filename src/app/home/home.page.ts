import { LyricsService } from './../lyrics/shared/lyrics.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  performer: string;
  musicName: string;
  lyric: string;

  constructor(private lyricsService: LyricsService){}

  async findLyrics(){
    try{
      const result = await this.lyricsService.getLyrics(this.performer, this.musicName);
      this.fillFields(result);
    } catch (error) {
      console.log(error);
    }
  }

  // findLyrics(){
  //   const result = this.lyricsService.getLyrics(this.performer, this.musicName);
  //   this.fillFields(result);
  // }

  fillFields(data){
    this.lyric = data.lyrics;
  }

}
