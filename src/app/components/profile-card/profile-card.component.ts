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
    this.faceItSkillLevel = this.user.games.filter(x => x.dataSource == 'faceit')[0]?.skillLevel;
    this.valveSkillLevel = this.user.games.filter(x => x.dataSource == 'matchmaking')[0]?.skillLevel || 0;
  }



}
