import { Component } from '@angular/core'

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
        <app-city-search></app-city-search>
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
              <app-current-weather></app-current-weather>
            </mat-card-content>
          </mat-card>
        </div>
        <div fxFlex></div>
      </div>
    </div>
  `,
})
export class AppComponent {}
