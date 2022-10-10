# ESLint config for JavaScript projects

## Installing

1. In your project folder, run:

```
npm install eslint @magikbee/eslint-config-magikbee --save-dev
```

2. Create (or update) a `.eslintrc` file with the following content:

```js
{
  'extends': [
    'magikbee'
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