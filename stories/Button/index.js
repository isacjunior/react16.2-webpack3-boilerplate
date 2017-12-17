import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Button } from 'components'

storiesOf('Button', module)
  .add('Primary', () => (
    <Button primary onClick={action('clicked')}>Primary</Button>
  ))
  .add('Normal', () => (
    <Button onClick={action('clicked')}>Normal</Button>
  ))
