# Linting & Formatting

Monorepo to hold all shareable linting and formatting configurations.

[eslint-config-landr](./eslint-config-landr) - ESLint configuration for linting JavaScript and TypeScript code

[prettier-config-landr](./prettier-config-landr) - Prettier configuration for formatting all code

[stylelint-config-landr](./stylelint-config-landr) - Stylelint configuration for linting CSS and Sass code

## Editor Setup

When using both ESLint and Prettier in a project, it's nice to have files automatically have ESLint errors fixed on save as well as have non JavaScript/TypeScript files formatted on save. This section explains how to set that up in an editor.

### Semantic version increment rules
#### Patch releases (1.0.X): 
  - Bump dependencies to patch or minor releases
  - Fixes not impacting the configs or adding new rules
#### Minor releases (1.X): 
  - Adding exceptions to rules (ex: disable a default rule)
  - Changing linting rules (ex: `{ printWidth: 80 }` -> `{ printWidth: 120 }`)
#### Major releases(X): 
  - Breaking changes in repo
  - Bump dependencies to major releases

### VS Code

Make sure to have the [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extensions installed.

Next, add the following configuration to the `.vscode/settings.json` file for a project.

```json
"eslint.autoFixOnSave": true,
"eslint.validate": [
  "javascript",
  "javascriptreact",
  {"language": "typescript", "autoFix": true },
  {"language": "typescriptreact", "autoFix": true }
],
"editor.formatOnSave": true,
"[javascript]": {
  "editor.formatOnSave": false,
},
"[javascriptreact]": {
  "editor.formatOnSave": false,
},
"[typescript]": {
  "editor.formatOnSave": false,
},
"[typescriptreact]": {
  "editor.formatOnSave": false,
}
```

> Note: If you'd like you can also add these settings to your VS Code user settings so the settings will apply to all your projects.

## Pre-commit linting with Husky & lint-staged

TODO
