import { StoryComponent } from './components/story/story.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { EditorComponent } from './components/common/editor/editor.component';
import { EventsListComponent } from './components/events-list/events-list.component';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { LocationsListComponent } from './components/locations-list/locations-list.component';

@NgModule({
  declarations: [
    AppComponent,
    StoryComponent,
    EditorComponent,
    EventsListComponent,
    CharactersListComponent,
    LocationsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
