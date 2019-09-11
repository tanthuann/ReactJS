import React from 'react';
import Search from '../src/components/Search.js';

import { storiesOf } from '@storybook/react';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
 
addDecorator(withInfo);

storiesOf('Search', module)
    .add('Search', 
        () => (
            <Search onKeyUpSearchItem={Function} />
        )
    );