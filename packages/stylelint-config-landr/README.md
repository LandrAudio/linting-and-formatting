# stylelint-config-landr

This package exposes the stylelint configuration used for LANDR projects.

## Installation

Install `stylelint-config-landr` and all of its peer dependencies as dev dependencies of your project.

```bash
# Using npm
npm install stylelint stylelint-config-standard stylelint-scss --save-dev
# Using yarn
yarn add stylelint stylelint-config-standard stylelint-scss --dev
```

Add `stylelint-config-landr` as a value to the the `extends` array of your `.stylelintrc.js` config file.

```js
module.exports = {
    extends: [
        'stylelint-config-landr'
    ],
}
```
