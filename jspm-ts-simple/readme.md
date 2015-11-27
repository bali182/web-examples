##Steps to build this from ground up

1. `npm init` - Initializes the folder with a `package.json` file.
2. `npm install jspm -g` - Installs `jspm` globally.
3. `jspm registry config github` - Sets up the github registry. You need to login with your github credentials.
4. `jspm init` - Initializes `config.js`, `package.json`, and loads the necessary `System.js` and transpiler (`typescript` in our case) to `jspm_packages` (or whatever you choose).
5. `jspm install ts=typescript --dev` This will create an alias to typescript, making imports easier (instead of `import x from "./x.ts!typescript"` we can use `import x from "./x.ts!"`)
6. Add `src/main.ts` - Our main entry point.
7. Add `index.html`, the bridge between the regular `<script>` imports and `System.js`:
8. `npm install http-server -g` and `http-server`. This is required, because `jspm` tries to load stuff using http requests.
9. Visit `http://localhost:8080/index.html`

##After cloning

1. `npm install jspm -g` - Installs `jspm` globally.
2. `jspm install` - Installs the `jspm` dependencies listed in `package.js`
3. `npm install http-server -g` and `http-server`. This is required, because `jspm` tries to load stuff using http requests.
4. Visit `http://localhost:8080/index.html`
