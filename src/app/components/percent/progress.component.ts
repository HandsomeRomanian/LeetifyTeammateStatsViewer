import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent {

  @Input() max = 100;
  @Input() min = 0;
  @Input() value = 0;

  public get progress() {
    return (((this.value - this.min) / (this.max - this.min)) * 100) + "%";
  }
}
