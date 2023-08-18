import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { LeetifyUserData } from './data/models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public input = `  `;
  public data: LeetifyUserData[] = []
  private lastData = ``;

  constructor(public httpClient: HttpClient, private route: ActivatedRoute) {
  }

  public async ngOnInit() {
    this.route.queryParams.subscribe({
      next: (queryParams) => {
        if (queryParams && btoa(queryParams['gameData']) !== this.lastData) {
          this.lastData = btoa(queryParams['gameData']);
          console.log(queryParams, atob(queryParams['gameData']))
          this.input = atob(queryParams['gameData']) as string;
          if (this.input) {
            this.dataChanged();

          }
        }

      }
    })
  }

  public dataChanged() {
    this.data = [];
    var steamIds = this.input.match(/STEAM_1:\d+:\d+/g) || [];

    var steam64Ids = steamIds.map((steamId) => {
      var parts = steamId.split(":");
      var steam64Id = BigInt(parts[2]) * 2n + 76561197960265728n + BigInt(parts[1]);
      return steam64Id.toString();
    });
    this.fetchData(steam64Ids);
  }

  public async fetchData(steam64Ids: string[]) {
    for (const steam64Id of steam64Ids) {
      this.data.push(await firstValueFrom(this.httpClient.get<LeetifyUserData>("https://api.leetify.com/api/profile/" + steam64Id)));
    }
  }

  public share() {
    navigator.clipboard.writeText(location.host + "?gameData=" + btoa(this.input));
  }
}
