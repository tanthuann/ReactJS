import React from 'react';
import LastPage from '../src/components/LastPage.js';

import { storiesOf } from '@storybook/react';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
 
addDecorator(withInfo);

storiesOf('LastPage', module)
    .add(
        'default', 
        () => (
            <LastPage onClickClearAll={Function}
                  onClickClearAllCompleted={Function}
                  onClickClearAllActive={Function} 
            />
        )
    );