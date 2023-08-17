import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherItemComponent } from './weather-item/weather-item.component';
import { FormsModule } from '@angular/forms';
import { WeatherItemsService } from './services/weather-items.service';

@NgModule({
  declarations: [
    AppComponent,
    WeatherItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [WeatherItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
