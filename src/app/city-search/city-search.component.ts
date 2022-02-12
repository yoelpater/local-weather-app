import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'
import { debounceTime } from 'rxjs/operators'

import { WeatherService } from '../weather/weather.service'

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css'],
})
export class CitySearchComponent implements OnInit {
  @Output() searchEvent = new EventEmitter<string>()
  search = new FormControl('', [Validators.minLength(2)])

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.search.valueChanges.pipe(debounceTime(1000)).subscribe((searchValue: string) => {
      if (!this.search.invalid) {
        const userInput = searchValue.split(',').map((s) => s.trim())
        const searchText = userInput[0]
        const country = userInput.length > 1 ? userInput[1] : undefined
        this.weatherService.updateCurrentWeather(searchText, country)
      }
    })
  }


}
