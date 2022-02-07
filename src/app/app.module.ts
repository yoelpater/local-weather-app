import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component'

import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [AppComponent, MyNewComponentComponent, CurrentWeatherComponent],
  imports: [BrowserModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent, CurrentWeatherComponent],
})
export class AppModule {}
