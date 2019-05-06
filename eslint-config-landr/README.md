# eslint-config-landr

This package exposes the ESLint configuration used for LANDR projects.

- Uses a [typescript parser](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser) that allows for the linting of both JS and TS files (therefore typescript is a installed as a peer dependency for this config).
- Uses both [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) and [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier) to display prettier formatting issues as ESLint errors and fix them with the ESLint `--fix` command. Prettier rules will be taken from a `.prettierrc.js` file found in your root project directory or if none is found, it will use default prettier settings. The prettier configuration used at LANDR is [`prettier-config-landr`](https://github.com/Mixgenius/linting-and-formatting/tree/master/prettier-config-landr).

## Installation

Install `eslint-config-landr` and all of it's peer dependencies as dev dependencies of your project. This can be done with the following command:

```bash
npx install-peerdeps --dev eslint-config-landr
```

Add `landr` as a value to the the `extends` array of your `.eslintrc.js` config file.

```js
module.exports = {
  extends: ['landr'],
};
```
