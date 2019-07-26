# Simple prompt
Simple way to autocomplete prompt.
[`inquirer`](https://www.npmjs.com/package/inquirer) and [`inquirer-autocomplete-prompt`](https://www.npmjs.com/package/inquirer-autocomplete-prompt) wrapper.

# Example
```js

const prompt = require('@yoko0180/prompt')
prompt({
  msg: 'Select a item', 
  src: ['foo', 'baa'] // or somePromise()
})
.then(selected => {
  console.log(selected) // 'foo' or 'baa'
})
.catch( err => {
  // error handling
})
```