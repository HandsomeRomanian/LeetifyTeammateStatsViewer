import { Component, Input } from '@angular/core';
import { faceItSkillLevelToImageUrl, faceItSkillLevelToRank, matchmakingSkillLevelToImageUrl, matchmakingSkillLevelToRank } from 'src/app/data/functions';

@Component({
  selector: 'app-rank-card',
  templateUrl: './rank-card.component.html',
  styleUrls: ['./rank-card.component.scss']
})
export class RankCardComponent {
  @Input() skillLevel?: number;
  @Input() source!: 'faceit' | 'valve';

  public get imageUrl() {
    switch (this.source) {
      case 'faceit':
        return faceItSkillLevelToImageUrl(this.skillLevel);
      case 'valve':
        return matchmakingSkillLevelToImageUrl(this.skillLevel)
    }
  }

  public get imageAlt() {
    switch (this.source) {
      case 'faceit':
        return faceItSkillLevelToRank(this.skillLevel);
      case 'valve':
        return matchmakingSkillLevelToRank(this.skillLevel);
    }
  }

}
