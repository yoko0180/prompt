const prompt = require('../index')
prompt({
  msg: 'Select a item', 
  src: [1,2,3]
})
.then(selected => {
  console.log(selected) // 'foo' or 'baa'
})