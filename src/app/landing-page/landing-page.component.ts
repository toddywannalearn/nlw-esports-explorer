import { LandingPageService, IImageInfo } from './landing-page.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  gamesList: IImageInfo[] = [];
  streamersList: IImageInfo[] = [];

  constructor(private landingPageService: LandingPageService) { }

  ngOnInit(): void {
    this.setGamesList();
    this.setStreamersList();
  }

  setGamesList() {
    this.landingPageService.setGamesList(
      [
        {
          alt: 'league of legends game image',
          imageLink: 'https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg',
          pageLink: 'https://www.twitch.tv/directory/game/League%20of%20Legends',
        },
        {
          alt: 'valorant game image',
          imageLink: 'https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg',
          pageLink: 'https://www.twitch.tv/directory/game/VALORANT',
        },
        {
          alt: 'splatoon game image',
          imageLink:
            'https://static-cdn.jtvnw.net/ttv-boxart/1158884259_IGDB-188x250.jpg',
          pageLink: 'https://www.twitch.tv/directory/game/Splatoon%203',
        },
      ]
    );

    this.gamesList = this.landingPageService.getGamesList();
  }

  setStreamersList() {
    this.landingPageService.setStreamersList(
      [
        {
          alt: 'alazonka streamer photo',
          imageLink: 'https://static-cdn.jtvnw.net/jtv_user_pictures/15cec952-c1ba-4ff8-a79c-53c2fa5bd269-profile_image-70x70.png',
          pageLink: 'https://www.twitch.tv/alanzoka',
        },
        {
          alt: 'gaules streamer photo',
          imageLink: 'https://static-cdn.jtvnw.net/jtv_user_pictures/f4b12683-57ff-4b57-926a-67512b43a7ff-profile_image-70x70.png',
          pageLink: 'https://www.twitch.tv/gaules',
        },
        {
          alt: 'carolfps streamer photo',
          imageLink: 'https://static-cdn.jtvnw.net/jtv_user_pictures/a56db9ac-c2be-4ac2-bb28-40db29ec9967-profile_image-70x70.png',
          pageLink: 'https://www.twitch.tv/carolfps',
        },
        {
          alt: 'cellbit streamer photo',
          imageLink: 'https://static-cdn.jtvnw.net/jtv_user_pictures/cb885149-f7f7-48f0-99ae-fe0a386ed3e2-profile_image-70x70.png',
          pageLink: 'https://www.twitch.tv/cellbit',
        },
      ]
    );

    this.streamersList = this.landingPageService.getStreamersList();
  }


}
