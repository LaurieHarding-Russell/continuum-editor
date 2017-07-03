import { Story } from './Story';
import { ActionReducer, Action } from '@ngrx/store';

export function storyReducer(state: Story = new Story(), action: Action) {
	switch (action.type) {
		default:
			return state;
	}
}