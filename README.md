# Linting & Formatting

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-9-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

Monorepo to hold all shareable linting and formatting configurations.

[eslint-config-landr](./packages/eslint-config-landr) - ESLint configuration for linting JavaScript and TypeScript code

[prettier-config-landr](./packages/prettier-config-landr) - Prettier configuration for formatting all code

[stylelint-config-landr](./packages/stylelint-config-landr) - Stylelint configuration for linting CSS and Sass code


## Editor Setup

When using both ESLint and Prettier in a project, it's nice to have files automatically have ESLint errors fixed on save as well as have non JavaScript/TypeScript files formatted on save. This section explains how to set that up in an editor.

### VS Code

The easiest and recommended way of integrating with linters is to let Prettier do the formatting and configure the linter to not deal with formatting rules. You can find instructions on how to configure each linter on the Prettier docs site. You can then use each of the linting extensions as you normally would.

- ESLint: [Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- Stylelint: [Extension](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

You can enable Auto-Fix on Save for ESLint or Stylelint and still have formatting and quick fixes:

```
"editor.codeActionsOnSave": {
    // For ESLint
    "source.fixAll.eslint": true,
    // For Stylelint
    "source.fixAll.stylelint": true
}
```

## Releasing

We use [Auto](https://intuit.github.io/auto/) and [Lerna](https://lerna.js.org/) to automatically bump our packages versions based on the [Conventional Commits](https://www.conventionalcommits.org/) convention. 

- A commit starting with `fix:` will do a `PATCH` release
- A commit starting with `feat:` will do a `MINOR` release
- A commit starting with `BREAKING CHANGE:` will do a `MAJOR` release


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

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://benoitdeziel.com"><img src="https://avatars1.githubusercontent.com/u/537043?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Benoit Deziel</b></sub></a><br /><a href="#maintenance-benoitdeziel" title="Maintenance">🚧</a> <a href="https://github.com/LandrAudio/linting-and-formatting/commits?author=benoitdeziel" title="Documentation">📖</a> <a href="#infra-benoitdeziel" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/LandrAudio/linting-and-formatting/commits?author=benoitdeziel" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/hjack-landr"><img src="https://avatars2.githubusercontent.com/u/57115379?v=4?s=100" width="100px;" alt=""/><br /><sub><b>hjack-landr</b></sub></a><br /><a href="#maintenance-hjack-landr" title="Maintenance">🚧</a> <a href="#infra-hjack-landr" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/LandrAudio/linting-and-formatting/commits?author=hjack-landr" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/davidmartinezmarin"><img src="https://avatars3.githubusercontent.com/u/954888?v=4?s=100" width="100px;" alt=""/><br /><sub><b>David Martinez</b></sub></a><br /><a href="#maintenance-davidmartinezmarin" title="Maintenance">🚧</a> <a href="https://github.com/LandrAudio/linting-and-formatting/commits?author=davidmartinezmarin" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/RPDeshaies"><img src="https://avatars0.githubusercontent.com/u/6224111?v=4?s=100" width="100px;" alt=""/><br /><sub><b>rpdeshaies</b></sub></a><br /><a href="https://github.com/LandrAudio/linting-and-formatting/commits?author=RPDeshaies" title="Documentation">📖</a> <a href="#infra-RPDeshaies" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/LandrAudio/linting-and-formatting/commits?author=RPDeshaies" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/MPeloquin"><img src="https://avatars.githubusercontent.com/u/755469?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Maxime Péloquin</b></sub></a><br /><a href="https://github.com/LandrAudio/linting-and-formatting/commits?author=MPeloquin" title="Code">💻</a> <a href="#infra-MPeloquin" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
    <td align="center"><a href="https://github.com/ardeois"><img src="https://avatars.githubusercontent.com/u/1867939?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Corentin Ardeois</b></sub></a><br /><a href="https://github.com/LandrAudio/linting-and-formatting/commits?author=ardeois" title="Documentation">📖</a> <a href="https://github.com/LandrAudio/linting-and-formatting/commits?author=ardeois" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/vbeausoleil"><img src="https://avatars.githubusercontent.com/u/10699482?v=4?s=100" width="100px;" alt=""/><br /><sub><b>vbeausoleil</b></sub></a><br /><a href="#infra-vbeausoleil" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/LandrAudio/linting-and-formatting/commits?author=vbeausoleil" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/Ronan-Landr"><img src="https://avatars.githubusercontent.com/u/146753775?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ronan</b></sub></a><br /><a href="#infra-Ronan-Landr" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
    <td align="center"><a href="https://github.com/szum"><img src="https://avatars.githubusercontent.com/u/4643606?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Lukas Switlicki</b></sub></a><br /><a href="https://github.com/LandrAudio/linting-and-formatting/commits?author=szum" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
