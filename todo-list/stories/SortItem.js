import React from 'react';
import SortItem from '../src/components/SortItem.js';

import { storiesOf } from '@storybook/react';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
 
addDecorator(withInfo);

storiesOf('SortItem', module)
    .add('default', 
        () => (
            <SortItem onClickDisplayAll={Function}
                  onClickDisplayComplete={Function}
                  onClickDisplayInComplete={Function}
                  isFocus={Array}
        />
        )
    );