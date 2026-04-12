import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { CounterComponent } from './pages/counter/counter-page.component';
import { HeroPageComponent } from './pages/counter/hero/hero-page.component';
import { DragonballPageComponent } from './pages/dragonball/dragonball-page.component';

export const routes: Routes = [

  {
  path: 'hero',
  component: HeroPageComponent
  },

{
  path: '',
  component: CounterComponent
},

{
  path: 'dragonball',
  component: DragonballPageComponent
},

{
  path: '**',
  redirectTo: ''
}

];
