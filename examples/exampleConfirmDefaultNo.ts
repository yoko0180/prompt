import { promptConfirm } from '../dist/index';

promptConfirm({
  message: 'Yes or No',
  defaultValue: false,
}).then((selected) => {
  console.log(selected); // true or false
});
