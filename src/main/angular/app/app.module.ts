import { StoryComponent } from './components/story/story.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { EditorComponent } from './components/common/editor/editor.component';
import { EventsListComponent } from './components/events-list/events-list.component';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { LocationsListComponent } from './components/locations-list/locations-list.component';

import { storyEventReducer } from "./store/storyEvent/StoryEvent.reducer";
import { storiesReducer } from "./store/story/Stories.reducer";


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
    FormsModule,
    StoreModule.provideStore({stories :storiesReducer, storyEvents: storyEventReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
