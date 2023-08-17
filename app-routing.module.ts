import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherItemComponent } from './weather-item/weather-item.component';

const routes: Routes = [
  { path: '', redirectTo: '/weather', pathMatch: 'full' },
  { path: 'weather', component:WeatherItemComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
