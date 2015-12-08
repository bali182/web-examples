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
- Check if it works (it doesn't), `http-server`, go to `http://localhost:8080/`
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
);
```
- Change main import to `System.import('./src/main.jsx');`
- Explain `defaultJSExtensions` in `config.js`. Change it, try to load file - fails -> now we messed up mapping.
- CHANGE `defaultJSExtensions`BACK TO `true` !!!
- Show `!babel` after `.jsx` extension, explain the easier way.
- In `config.js` add the `"jsx": "npm:babel-core@5.8.34"` mapping, change import in `index.html` to load `.jsx`
- Add first component `dummy-component.jsx`:
```js
'use strict';

import React from 'react';

export default class DummyComponent extends React.Component {
  constructor() {
    super(...arguments);
    this.state = { clickState: "Not clicked" };
  }
  
  handleClick(args) {
    this.setState({
      clickState: "You did it!"
    })
  }
  
  render() {
    return <div>
      <button onClick={this.handleClick}>Click me!</button>
      <span>{this.state.clickState}</span>
    </div>
  }
}
```
- Change `main.jsx` to load this component:
```js
'use strict';

import React from 'react'
import ReactDOM from 'react-dom';
import DummyComponent from './dummy-component.jsx!';

ReactDOM.render(
  <DummyComponent />,
  document.getElementById('react-app')
);
```
- Explain why this won't work, show the `this.handleClick.bind(this)` way, talk about decorators
- `jspm install npm:core-decorators`
- In `config.js` add `"es7.decorators"` to the `babelOptions.optional` array 
- Add `import {autobind} from 'core-decorators'`
- Annotate `handleClick` with `@autobind`
- UI looks ugly! Talk about react composability
- Go to http://www.material-ui.com , show components, go to buttons then `jspm install npm:material-ui`
- Replace `button` with `RaisedButton` in `dummy-component.jsx`
- This is not what we want to do!