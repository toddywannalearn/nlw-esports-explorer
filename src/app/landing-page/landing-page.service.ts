import { Injectable } from '@angular/core';

export interface IImageInfo {
  alt: string;
  imageLink: string;
  pageLink: string;
}

@Injectable({
  providedIn: 'root',
})
export class LandingPageService {
  gamesList: IImageInfo[] = [];
  streamersList: IImageInfo[] = [];

  constructor() {}

  setGamesList(list: IImageInfo[]) {
    this.gamesList = list;
  }

  getGamesList(): IImageInfo[]{
    return this.gamesList;
  }

  setStreamersList(list: IImageInfo[]) {
    this.streamersList = list;
  }

  getStreamersList(): IImageInfo[]{
    return this.streamersList;
  }
}
