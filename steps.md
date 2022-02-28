- In root folder `npm init vite@latest`
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
- ISSUE - @featherds/dialog is not included!
- ISSUE - Rail demo slot is malformed and CSS incomplete for visuals
- 