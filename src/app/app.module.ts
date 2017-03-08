import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Example2Component } from './example2/example2.component';
import { Example3Component } from './example3/example3.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CoreModule } from './core/core.module';
import { UserEffects } from './core/effects';
import userReducer from './core/reducers/user.reducer';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    StoreModule.provideStore({
      user: userReducer
    }),
    EffectsModule.run(UserEffects)
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    Example2Component,
    Example3Component
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
