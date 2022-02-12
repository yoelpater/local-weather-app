import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module'
import { FlexLayoutModule } from '@angular/flex-layout';
import { SideNavComponent } from './side-nav/side-nav.component';
import { LayoutModule } from '@angular/cdk/layout';


@NgModule({
  declarations: [AppComponent, CurrentWeatherComponent, SideNavComponent],
  imports: [BrowserModule, HttpClientModule, BrowserAnimationsModule, MaterialModule, FlexLayoutModule, LayoutModule],
  providers: [],
  bootstrap: [AppComponent, CurrentWeatherComponent],
})
export class AppModule {}
