import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { LeetifyUserData } from './data/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public input = `
  #  3 2 "Mach" STEAM_1:0:127366438 03:01 64 0 active 196608
  # 14 3 "ClammySosa" STEAM_1:0:569443757 02:36 74 0 active 196608
  #  6 5 "jdskilla2" STEAM_1:0:630112772 03:01 64 0 active 196608
  #  7 6 "Mattyyy" STEAM_1:0:499256766 03:01 46 0 active 196608
  #  8 7 "Shadow" STEAM_1:0:154185069 03:01 77 0 active 196608
  #  9 8 "always 322" STEAM_1:0:59529440 03:01 85 0 active 196608
  # 10 9 "TrashBoat" STEAM_1:1:544635849 03:01 61 0 active 196608
  # 11 10 "Darth Plagueis The Wise" STEAM_1:0:445759556 03:01 63 0 active 196608
  # 12 11 "Agent 37" STEAM_1:0:84671283 03:01 62 0 active 196608
  # 13 12 "Oniii Chaaaannnn" STEAM_1:0:770427199 03:01 81 0 active 196608
  `;
  public data: LeetifyUserData[] = []

  constructor(public httpClient: HttpClient) {
    this.dataChanged();
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
}
