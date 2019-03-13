# eslint-config-landr

This package exposes the ESLint configuration used for LANDR projects.

- Uses a [typescript parser](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser) that allows for the linting of both JS and TS files (therefore typescript is a installed as a peer dependency for this config).
- Uses both [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) and [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier) to display prettier formatting issues as ESLint errors and fix them with the ESLint `--fix` command. Prettier rules will be taken from a `.prettierrc` file found in your root project directory or if none is found, it will use default prettier settings.

## Installation

Install the package locally.

```bash
# Using npm
npm install eslint-config-landr --save-dev
# Using yarn
yarn add eslint-config-landr --dev
```

Add the following to your eslint config file.

```json
{
    extends: [
        'landr'
    ],
}
```
