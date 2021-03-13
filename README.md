# Simple prompt

Simple way to autocomplete prompt.
[`inquirer`](https://www.npmjs.com/package/inquirer) and [`inquirer-autocomplete-prompt`](https://www.npmjs.com/package/inquirer-autocomplete-prompt) wrapper.

# Example

```js
const {
  promptAutocomplete,
  promptConfirm,
  promptInput,
} = require('@yoko0180/prompt');
promptAutocomplete({
  msg: 'Select a item',
  src: ['foo', 'baa'], // or somePromise()
}).then((selected) => {
  console.log(selected); // 'foo' or 'baa'
});

promptConfirm({
  message: 'Yes or No',
  defaultValue: false,
}).then((selected) => {
  console.log(selected); // true or false
});

promptInput({
  message: 'Type name',
}).then((inputText) => {
  console.log(inputText);
});
```
