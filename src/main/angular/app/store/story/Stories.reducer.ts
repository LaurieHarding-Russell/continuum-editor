import { List } from 'immutable';
import { Story } from './Story';
import { ActionReducer, Action } from '@ngrx/store';

export const ADD_STORY = 'ADD_STORY';
export const UPDATE_STORY = 'UPDATE_STORY';

export function storiesReducer(state: List<Story> = List([]), action: Action) {
	switch (action.type) {
		case ADD_STORY:
		{
			let story = new Story();
			story.open = false;
			story.text = '';
			return state.push(story);
		}

		case UPDATE_STORY:
		{
			let story = new Story();
			story.text = action.payload.text;
			return state.set( action.payload.index, story);
		}
		
		default:
			return state;
	}
}