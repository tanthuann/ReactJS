import React from 'react';
import TodoItems from '../src/components/TodoItems.js';

import { storiesOf } from '@storybook/react';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
 
addDecorator(withInfo);

let index = 0, item = { title: 'Title', isComplete: false};

storiesOf('TodoItems', module)
    .add('Todo-uncheck', 
        () => (
            <TodoItems key={index} index={index} item={item} onClickCheck={Function} onClickDel={Function} />
        )
    )
    .add('Todo-checked', 
        () => {
            item = {...item, isComplete: true};
            return (
                <TodoItems key={index} index={index} item={item} onClickCheck={Function} onClickDel={Function} />
                )
        }
    );