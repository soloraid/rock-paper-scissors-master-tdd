import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {IconsComponent} from './components/icons/icons.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RulesComponent } from './components/rules/rules.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ElementComponent } from './components/element/element.component';
import {BoardGameComponent} from './components/board-game/board-game.component';

@NgModule({
  declarations: [
    AppComponent,
    IconsComponent,
    BoardGameComponent,
    RulesComponent,
    ElementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
