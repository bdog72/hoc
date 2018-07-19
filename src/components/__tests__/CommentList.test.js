import React from 'react';
import { mount } from 'enzyme';

import CommentList from 'components/CommentList';
import Root from 'root';

let wrapped;

beforeEach(() => {
    const initialState = {
        comments: ['Comment 1', 'Comment 2']
    };

    wrapped = mount(
        <Root initialState={initialState}>
            <CommentList />
        </Root>
    );
});

it('Creates one LI per comment', () => {
    console.log(wrapped.find('li').length);
});

it('Shows the text for each comment', () => {
    expect(wrapped.render().text()).toContain('Comment 1');

    expect(wrapped.render().text()).toContain('Comment 2');
});
