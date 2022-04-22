- In root folder `npm init vite@latest`
  - Follow prompts for `vue` and `vue` or `vue-ts`
- cd to project folder
- `npm install`
- `npm run dev`
- Now we install Feather DS styles
  - `npm install @featherds/styles`
  - add `import "@featherds/styles";` and `import "@featherds/styles/themes/open-light.css";` to main.js
  - <div class="feather-styles" id="app"></div> in index.html
  - remove default styles from App.vue and add `main` id to content
  - recommend install SASS `npm install sass`
- Now we install and use App Layout
  - `npm install @featherds/app-layout`
  - `npm install @featherds/app-bar`
  - `npm install @featherds/footer`
  - `npm install @featherds/navigation-rail`
  - `npm install @featherds/icon`
  - add centered rail layout from https://feather.nanthealth.com/Components/AppLayout/#getting-started to App.vue
  - Create an AppHeader component using the App Bar demo as reference https://feather.nanthealth.com/Components/AppBar/#example
  - Create an AppRail component using the demo from https://feather.nanthealth.com/Components/NavigationRail/#example
  - Create AppFooter component using the demo from https://feather.nanthealth.com/Components/Footer/#examples

## Optional Steps
### Typescript
- rename src/main.js to main.ts
- in each component, change the script lang to "ts" and refactor the default export to use `defineComponent`
- make sure to update the main.ts link in index.html
- install `vue-tsc` as dev dep
- add a `prebuild` step to the package.json to use it
- add a `tsconfig.json` to the root of your choice

### Add unit tests
- Add a `test:unit` step and add test dependencies
"@testing-library/jest-dom": "^5.16.2",
"@types/jest": "^27.4.1",
"@vue/test-utils": "^2.0.0-rc.17",
"@vue/vue3-jest": "^27.0.0-alpha.4",
"jest": "^27.5.1",
"jest-transform-stub": "^2.0.0",
"jest-watch-typeahead": "^1.0.0",
"ts-jest": "^27.1.3",
- Add a `jest.config.js`
- Add a shim for components
- Add a few lines to `tsconfig.json` file
- Add your tests

### Add ESLint
- Add a `lint` step and the dependencies
"@vue/eslint-config-prettier": "^7.0.0",
"@vue/eslint-config-typescript": "^10.0.0",
"eslint": "^8.10.0",
"eslint-plugin-prettier": "^4.0.0",
"eslint-plugin-vue": "^8.5.0",
"prettier": "^2.5.1",

- Add an `.eslintrc.js`