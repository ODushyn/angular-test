import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CcsClickOutsideDirective } from './ccs-click-outside.directive';
import {
  MatAutocompleteModule,
  MatFormFieldControl,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatOptionModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConnectedPositionStrategy, OverlayContainer, PositionStrategy, ScrollStrategyOptions } from '@angular/cdk/overlay';

@NgModule({
  declarations: [
    AppComponent,
    CcsClickOutsideDirective
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatOptionModule,
    MatInputModule,
    MatIconModule,
    MatAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
