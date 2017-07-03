import { Story } from './../../store/story/Story';
import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable, BehaviorSubject } from "rxjs";

interface AppState {
  story: Story;
}

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {

  storyStream: Observable<Story>;
  storyTextStream: BehaviorSubject<string> = new BehaviorSubject('');

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.storyStream = this.store.select('story');
    this.storyStream.subscribe(
      story => {
        if (story)
          this.storyTextStream.next(story.text)
      }
    );
  }

  updateStory() {
    this.storyTextStream.next("<h1>test</h1>");
  }

}
