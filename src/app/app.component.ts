import { Component } from '@angular/core'

import { ICurrentWeather } from './interfaces'
import { WeatherService } from './weather/weather.service'

@Component({
  selector: 'app-root',
  template: `
    <div style="text-align:left">
      <mat-toolbar color="primary">
        <span> LocalCast Weather </span>
      </mat-toolbar>
      <div fxLayoutAlign="center">
        <div class="mat-caption vertical-margin">
          Your city, your forecast, right now!
        </div>
      </div>
      <div fxLayoutAlign="center">
        <app-city-search (searchEvent)="doSearch($event)"></app-city-search>
      </div>
      <div fxLayout="row">
        <div fxFlex></div>
        <div fxFlex="300px">
          <mat-card>
            <mat-card-header>
              <mat-card-title>
                <div class="mat-headline">Current Weather</div>
              </mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <app-current-weather [current]="currentWeather"></app-current-weather>
            </mat-card-content>
          </mat-card>
        </div>
        <div fxFlex></div>
      </div>
    </div>
  `,
})
export class AppComponent {
  currentWeather?: ICurrentWeather
  constructor(private weatherService: WeatherService) {}
  doSearch(searchValue: String) {
    const userInput = searchValue.split(',').map((s) => s.trim())
    this.weatherService
      .getCurrentWeather(userInput[0], userInput.length > 1 ? userInput[1] : undefined)
      .subscribe((data) => (this.currentWeather = data))
  }
}
