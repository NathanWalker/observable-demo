// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// app
import { CORE_PROVIDERS } from './services/index';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule
  ],
  providers: [
    CORE_PROVIDERS
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule
  ]
})
export class CoreModule {
}
