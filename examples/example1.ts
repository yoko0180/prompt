import { promptAutocomplete } from '../dist/index';
import faker from 'faker';
// console.log(prompt);
promptAutocomplete({
  message: 'Select a item',
  src: [...Array(10)].map(() => faker.name.title()), // or somePromise()
}).then((selected) => {
  console.log(selected);
});
