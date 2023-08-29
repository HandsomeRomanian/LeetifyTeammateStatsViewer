import { Component, Input, OnInit } from '@angular/core';
import { LeetifyUserData } from 'src/app/data/models';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {
  @Input() user!: LeetifyUserData;

  public valveSkillLevel?: number;
  public faceItSkillLevel?: number;

  constructor() {
  }

  ngOnInit() {
    if (!this.user.recentGameRatings) {
      this.user.recentGameRatings = {
        aim: 0,
        positioning: 0,
        utility: 0,
        clutch: 0,
        opening: 0,
        leetify: 0,
        tLeetify: 0,
        ctLeetify: 0,
        gamesPlayed: 0,
      }
    }
    this.faceItSkillLevel = this.user.games?.filter(x => x.dataSource == 'faceit')[0]?.skillLevel;
    this.valveSkillLevel = this.user.games?.filter(x => x.dataSource == 'matchmaking')[0]?.skillLevel || 0;
  }



}
