import React from 'react';
import AddTodo from '../src/components/AddTodo.js';

import { storiesOf } from '@storybook/react';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import checkIcon from '../src/img/check.svg';
import checkedIcon from '../src/img/checked-dark.svg'

addDecorator(withInfo);

let url = checkIcon, newItem = "";

storiesOf('AddTodo', module)
    .add('AddTodo-unCheckAll',
        () => (
            <AddTodo onClickCheckAll={Function}
                onKeyUpAdd={Function}
                onChange={Function}
                onClickSubmit={Function}
                onClickClearItem={Function}
                var={{ url, newItem }}
            />
        )
    )
    .add('AddTodo-checkedAll',
        () =>{
            url = checkedIcon;
            return (
                <AddTodo onClickCheckAll={Function}
                onKeyUpAdd={Function}
                onChange={Function}
                onClickSubmit={Function}
                onClickClearItem={Function}
                var={{ url, newItem }}
                />
            )
        }
    )
    .add(
        'check-icon-svg',
        () => (
            <img alt="svg" src={checkIcon} width={64} />
        )
    )
    .add(
        'checked-icon-svg',
        () => (
            <img alt="svg" src={checkedIcon} width={64} />
        )
    );