import { List } from 'immutable';
import { Action } from '@ngrx/store';
import { StoryEvent } from './StoryEvent';

export const ADD_STORY_EVENT = "ADD_STORY_EVENT";
export const REMOVE_STORY_EVENT = "REMOVE_STORY_EVENT";

export function storyEventReducer(state: List<StoryEvent> = List([]), action: Action) {
	switch (action.type) {
		case ADD_STORY_EVENT:
            let event = new StoryEvent();
			event.name = '';
			event.description = '';
			return state.push(event);

		case REMOVE_STORY_EVENT:
			return state.remove(action.payload);

		default:
			return state;
	}
}