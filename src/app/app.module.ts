import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RankCardComponent } from './components/rank-card/rank-card.component';
import { ProgressComponent } from './components/percent/progress.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileCardComponent,
    RankCardComponent,
    ProgressComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
