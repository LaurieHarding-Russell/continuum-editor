import { StoryComponent } from './components/story/story.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { storyReducer } from "./store/story/Story.reducer";
import { EditorComponent } from './components/common/editor/editor.component';
import { CharactersComponent } from './components/characters/characters.component';
import { EventsComponent } from './components/events/events.component';
import { EventsListComponent } from './components/events-list/events-list.component';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { LocationsListComponent } from './components/locations-list/locations-list.component';


@NgModule({
  declarations: [
    AppComponent,
    StoryComponent,
    EditorComponent,
    CharactersComponent,
    EventsComponent,
    EventsListComponent,
    CharactersListComponent,
    LocationsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.provideStore({store :storyReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
