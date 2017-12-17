import { configure, addDecorator } from '@storybook/react'
import { setDefaults } from '@storybook/addon-info'
import { withInfo } from '@storybook/addon-info'

addDecorator((story, context) => withInfo(
  'Global Components'
)(story)(context))

function loadStories() {
  require('../stories')
}

configure(loadStories, module)

// addon-info
setDefaults({
  header: false,
  inline: true,
  source: true,
});
