import { StoryComponent } from './components/story/story.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { storyReducer } from "./store/story/Story.reducer";
import { EditorComponent } from './components/common/editor/editor.component';


@NgModule({
  declarations: [
    AppComponent,
    StoryComponent,
    EditorComponent
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
