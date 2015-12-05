##Walkthrough
- `npm init` - walk through the npm steps, explain a bit about it
- `npm install jspm -g` - explain why we need to have it globally
- `jspm init` - walk through the steps, hit enter
- Create `src/main.js` (don't forget `'use strict';`) with `console.log('hi');`
- Create `index.html`
```html
<html>
<head><title>jspm-react sample</title></head>
<body> 
  <div id="react-app"></div>
  <script src="jspm_packages/system.src.js"></script>
  <script src="config.js"></script>
  <script>
    System.import('./src/main');
  </script>
</body>
</html>
```
- `jspm install react`
- `jspm install react-dom`
- Rename `main.js` to `.jsx`, change contents to
```js
'use strict';
import React from 'react'
import ReactDOM from 'react-dom'
ReactDOM.render(
  <div>Hello world</div>,
  document.getElementById('react-app')
)
```
- In `config.js` add the `"jsx": "npm:babel-core@5.8.34"` mapping
- Change loading in `index.html` to `.jsx!`, explain why
- Add first component: ...
- In `config.js` add `"es7.decorators"` to the `babelOptions.optional` array 