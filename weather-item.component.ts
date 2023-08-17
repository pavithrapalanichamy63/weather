import { Component } from '@angular/core';
import { WeatherItemsService } from '../services/weather-items.service';

@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.css']
})
export class WeatherItemComponent {
  cityName:any;
  weather: any = {};
  weatherObj:any;
  show=false;
  constructor(private weatherService: WeatherItemsService) {}

  getWeather() {
    this.weatherService.getWeather(this.cityName).subscribe(data => {
      this.weather = data;
      this.weatherObj=this.weather.weather[0].description;
      if(this.weather){
       this.show = true;
      }
    });
  }
  clearData(){
    this.show= false;
    this.cityName = '';
  }
}






