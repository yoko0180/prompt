const {
  promptAutocomplete
} = require('../dist/index');

promptAutocomplete({
  message: 'Select a item',
  src: ["foo", "baa"], // or somePromise()
}).then((selected) => {
  console.log(selected);
});