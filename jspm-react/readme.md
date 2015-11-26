##Getting started

1. `npm install jspm -g` - Installs `jspm` globally.
2. `jspm install` - Installs the `jspm` dependencies listed in `package.js`
3. `npm install http-server -g` and `http-server`. This is required, because `jspm` tries to load stuff using http requests.
4. Visit `http://localhost:8080/index.html`

#Building

1. `npm install gulp -g` - Installs gulp, the build system we use.
2. `gulp` - builds the whole stuff - see `dist` folder.