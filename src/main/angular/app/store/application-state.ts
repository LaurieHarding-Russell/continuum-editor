import { StoryEvent } from './storyEvent/StoryEvent';
import { Character } from './character/Character';
import { Story } from './story/Story';
import { List } from 'immutable'

export interface AppState {
  stories: List<Story>;
  characters: List<Character>;
  events: List<StoryEvent>;
  locations: List<Location>;
}