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
  imageList: IImageInfo[] = [];

  constructor() {}

  setImageList(list: IImageInfo[]) {
    this.imageList = list;
  }

  getImageList(): IImageInfo[]{
    return this.imageList;
  }

}
