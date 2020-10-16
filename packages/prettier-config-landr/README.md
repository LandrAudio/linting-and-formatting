# prettier-config-landr

This package exposes the Prettier configuration used for LANDR projects.

## Installation

Install `prettier-config-landr` and `prettier` as a dev dependency to your project.

```bash
# Using npm
npm install prettier prettier-config-landr --save-dev
# Using yarn
yarn add prettier prettier-config-landr --dev
```

Then in a `.prettierrc.js` file, add the following:

```js
module.exports = require('prettier-config-landr');
```

## Overriding settings

To overwrite some of the settings provided by `prettier-config-landr` the `.prettierrc.js` file should be setup as follows:

```js
// Example of using prettier-config-landr while changing the tab width for .scss files to 2 spaces

const defaultConfig = require('prettier-config-landr');

module.exports = {
  ...defaultConfig,
  overrides: [
    ...defaultConfig.overrides,
    {
      files: '*.scss',
      options: {
        tabWidth: 2,
      },
    },
  ],
};
```
