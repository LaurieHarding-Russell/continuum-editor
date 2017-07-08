import { ADD_STORY_EVENT } from './../../store/storyEvent/StoryEvent.reducer';
import { StoryEvent } from './../../store/storyEvent/StoryEvent';
import { AppState } from './../../store/application-state';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { List } from 'immutable'

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {

  eventStream;
  events;
  
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.eventStream = this.store.select('storyEvents');
    this.eventStream.subscribe(
      (events: List<StoryEvent>) => {
        if (events) {
          this.events = events.toArray();
        }
      }
    );
  }

  addEvent() {
    this.store.dispatch({type: ADD_STORY_EVENT });
  }

  removeEvent() {
    
  }

}
