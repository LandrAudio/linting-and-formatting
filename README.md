# Linting & Formatting

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

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

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://benoitdeziel.com"><img src="https://avatars1.githubusercontent.com/u/537043?v=4" width="100px;" alt=""/><br /><sub><b>Benoit Deziel</b></sub></a><br /><a href="#maintenance-benoitdeziel" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://github.com/hjack-landr"><img src="https://avatars2.githubusercontent.com/u/57115379?v=4" width="100px;" alt=""/><br /><sub><b>hjack-landr</b></sub></a><br /><a href="#maintenance-hjack-landr" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://github.com/davidmartinezmarin"><img src="https://avatars3.githubusercontent.com/u/954888?v=4" width="100px;" alt=""/><br /><sub><b>David Martinez</b></sub></a><br /><a href="#maintenance-davidmartinezmarin" title="Maintenance">🚧</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
