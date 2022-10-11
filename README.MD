# ESLint config for JavaScript projects

- Use Standard JS to enforce a code style

## Installing

1. In your project folder, run:

```
npm install -D @magikbee/eslint-config-magikbee
```

2. Install peer dependencies:
```
npm install -D eslint@^8.25.0 eslint-config-standard@^17.0.0 eslint-plugin-import@^2.26.0 eslint-plugin-n@^15.3.0 eslint-plugin-promise@^6.0.1
```

3. Create (or update) a `.eslintrc` file in your project folder with the following content:

```js
{
  "extends": [
    "@magikbee/eslint-config-magikbee"
  ]
}
```

## How To Override Default Config

1. Add your custom ESLint rules directly in .eslintrc file under "rules"

## Integration with VSCode

1. Install [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

2. Edit VSCode settings and edit or add the following settings:

```json
//tells the ESLint extension which languages it should check
"eslint.validate": [
    "javascript",
],
// avoid conflicts with eslint rules
"editor.formatOnSave": false,
// show eslint icon at bottom toolbar
"eslint.alwaysShowStatus": true,
// turns on Auto Fix for ESLint
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
}
```

- User settings: applied to all workspaces.
- Workspace settings: only applied to the current workspace.