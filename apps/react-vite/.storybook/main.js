const rootMain = require('../../../.storybook/main');

module.exports = {
  ...rootMain,

  core: { ...rootMain.core, builder: '@storybook/builder-vite' },

  stories: [
    ...rootMain.stories,
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [...rootMain.addons, '@nrwl/react/plugins/storybook'],
  viteFinal: async (config, { configType }) => {
    // apply any global webpack configs that might have been specified in .storybook/main.js
    if (rootMain.viteFinal) {
      config = await rootMain.viteFinal(config, { configType });
    }

    // add your own webpack tweaks if needed

    return config;
  },
};
