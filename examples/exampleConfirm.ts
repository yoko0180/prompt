import { promptConfirm } from '../dist/index';

promptConfirm({
  message: 'Yes or No',
}).then((selected) => {
  console.log(selected); // true or false
});
