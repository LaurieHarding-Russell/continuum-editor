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

  storiesStream: Observable<Story[]>;
  stories: Story[] = [];

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.storiesStream = this.store.select('stories');
    this.storiesStream.subscribe(
      stories => {
        if (stories)
          this.stories = stories;
      }
    );
  }

  updateStory(index: number) {
    this.stories[index].text = "<h1>test</h1>";
  }

  addStory() {
    let newStory = new Story();
    newStory.text ="";
    newStory.open = true;
    this.stories.push(newStory);
  }

}
