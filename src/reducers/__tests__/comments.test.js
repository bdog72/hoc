import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';

it('Handles actions of type SAVE_COMMENT', () => {
    const action = {
        type: SAVE_COMMENT,
        payload: 'New Comment'
    };
    const newState = commentsReducer([], action);

    expect(newState).toEqual(['New Comment']);
});

it('Handles action with unnown type', () => {
    const newState = commentsReducer([], { type: 'blahblah' });

    expect(newState).toEqual([]);
});
