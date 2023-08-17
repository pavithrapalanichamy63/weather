import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherItemsService {
  private apiKey = '907b49f556bc17a4834bed5284cab976';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

  getWeather(cityName: string): Observable<any> {
    const url = `${this.apiUrl}?q=${cityName}&appid=${this.apiKey}&units=metric`;
    return this.http.get(url);
  }
  
}
