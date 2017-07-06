import { Story } from './Story';
import { ActionReducer, Action } from '@ngrx/store';

export const ADD_STORY = 'ADD_STORY';
export function storyReducer(state: Story = new Story(), action: Action) {
	switch (action.type) {
		case ADD_STORY: 
			return [state, action.payload];
		default:
			return state;
	}
}