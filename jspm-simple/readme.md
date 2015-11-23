##Steps to build this from ground up

1. `npm init` - Initializes the folder with a `package.json` file.
2. `npm install jspm -g` - Installs `jspm` globally.
3. `jspm registry config github` - Sets up the github registry. You need to login with your github credentials.
4. `jspm init` - Initializes `config.js`, `package.json`, and loads the necessary `System.js` and transpiler (`babel` in our case) to `jspm_packages` (or whatever you choose).
5. `jspm install jquery` - Just so we have some dependencies to load.
6. Add `src/main.js` - Our main entry point.
7. Add `index.html`, the bridge between the regular `<script>` imports and `System.js`:
8. `npm install http-server -g` and `http-server`. This is required, because `jspm` tries to load stuff using http requests.
9. Visit `http://localhost:8080/index.html`

##After cloning

1. `npm install jspm -g` - Installs `jspm` globally.
2. `jspm install` - Installs the `jspm` dependencies listed in `package.js`
3. `npm install http-server -g` and `http-server`. This is required, because `jspm` tries to load stuff using http requests.
4. Visit `http://localhost:8080/index.html`
