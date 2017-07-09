import { ADD_STORY, UPDATE_STORY } from './../../store/story/Stories.reducer';
import { List } from 'immutable';
import { AppState } from './../../store/application-state';
import { Story } from './../../store/story/Story';
import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable, BehaviorSubject } from "rxjs";

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {

  storiesStream: Observable<List<Story>>;
  stories: Story[] = [];

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.storiesStream = this.store.select('stories');
    this.storiesStream.subscribe(
      (stories: List<Story>) => {
        if (stories) {
          this.stories = stories.toArray();
        }
      }
    );
  }

  addStory() {
    this.store.dispatch({type: ADD_STORY});
  }

  upgradeStory(text: string, index: number) {
    this.store.dispatch({type: UPDATE_STORY, payload: {index: index, text: text}});
  }

}
