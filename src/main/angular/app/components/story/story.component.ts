import { Story } from './../../model/Story';
import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from "rxjs";
import 'rxjs/add/operator/map'



@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {

  stories: Array<Story> = [];

  constructor() { }

  ngOnInit() {

  }

  addStory() {
    let newStory = new Story();
    newStory.open = true;
    newStory.text = "";
    this.stories.push(newStory);
  }
}
