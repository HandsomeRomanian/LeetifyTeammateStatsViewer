import { Component, OnInit, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { LeetifyUserData } from './data/models';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public input = `  `;
  public data: LeetifyUserData[] = []
  private steamIds: string[] = [];
  private lastData = ``;

  constructor(public httpClient: HttpClient, private route: ActivatedRoute, private router: Router) {
  }

  public async ngOnInit() {
    this.route.queryParams.subscribe({
      next: (queryParams) => {
        if (queryParams && queryParams['gameData'] !== this.lastData) {
          this.lastData = queryParams['gameData'];
          if (queryParams['gameData'])
            this.steamIds = (queryParams['gameData'] as string).split('_');
          if (this.input) {
            this.fetchData();
          }
        }

      }
    })
  }

  public dataChanged() {
    this.data = [];
    var steamIds = this.input.match(/STEAM_1:\d+:\d+/g) || [];

    this.steamIds = steamIds.map((steamId) => {
      var parts = steamId.split(":");
      var steam64Id = BigInt(parts[2]) * 2n + 76561197960265728n + BigInt(parts[1]);
      return steam64Id.toString();
    });
    let params = {
      gameData: this.generateQueryParams()
    }
    this.router.navigate([], {
      queryParams: params,
      queryParamsHandling: 'merge'
    })
  }

  public async fetchData() {

    this.steamIds = this.steamIds.map(x => !!x ? x : ' ').sort((a, b) => a.toLowerCase() > b.toLowerCase() ? 1 : -1);
    for (const steam64Id of this.steamIds) {
      try {
        this.data.push(await firstValueFrom(this.httpClient.get<LeetifyUserData>("https://api.leetify.com/api/profile/" + steam64Id)));
      } catch (e) {
        console.error(steam64Id + " dosen't have a leetify profile we could fetch data from")
        this.data.push({
          'games': [],
          'meta': {
            name: '', steam64Id, steamAvatarUrl: '', isCollector: false, isLeetifyStaff: false, isProPlan: false, leetifyUserId: '', faceitNickname: '', platformBans: []
          },
        })
      }
    }
  }

  public generateQueryParams(): string {
    return this.steamIds.join('_');
  }

  public share() {
    navigator.clipboard.writeText(window.location.href.split('?')[0] + "?gameData=" + this.generateQueryParams());
  }
}
